'reach 0.1';

const User = {
  showBalance: Fun([Token], Null),
  displayTokenDetails: Fun([UInt, UInt], Null), //(supply, price)
  ...hasRandom,
};
const gotHere = "got here";

const Logger = {
  logString: Fun([Bytes(8)], Null),
  logInt: Fun([UInt], Null),
  logBool: Fun([Bool], Null)
};
/**
 * 
 * @param totalSupply Supply of non-network token in contract
 * @returns Price of non-network token w.r.t network token
 */
const updatePrice = (totalSupply) => {
  return 50000/totalSupply;
};

export const main = Reach.App(() => {
  const OmegaUser = Participant('OmegaUser', {
    ...User,
    name: Bytes(64),
    paidBy: Fun([Bytes(64), UInt, UInt], Null), //<(name, amount-of-n-token, price-of-n-n-token)
    ...Logger
  });

  const NormalUser = ParticipantClass('NormalUser', {
    ...User,
    name: Bytes(64),
    buyToken: Fun([], UInt),
    notEnoughToken: Fun([], Null)
  });
  deploy();

  //Contract flow starts here

  OmegaUser.only(() => {
    const name = declassify(interact.name);
  });
  OmegaUser.publish(name);

  // Create token
  const supply = 10000;
  const tok = new Token({ name: '01234567890123456789012345678901', symbol: '01234567', supply: supply});
  const tokenPrice = updatePrice(balance(tok));
  commit();

  //Display minted token's supply and price to Omega user
  OmegaUser.only(() => {
    declassify(interact.displayTokenDetails(balance(tok), tokenPrice));
  });
  OmegaUser.publish();

  var [ totalBought, totalPaid ]  = [ 0, 0 ]; //total amount of non-network tokens paid for, total amount of network tokens spent
  invariant( (supply == balance(tok) + totalBought) && (balance() == totalPaid ));
  while(totalBought <= supply){
    commit();

    //Normal User gets and publishes their name and account address and gets shown token details 
    NormalUser.only(() => {
      const normalName = declassify(interact.name);
      const newPrice = updatePrice(balance(tok));
      const normalUserAccount = this;
      declassify(interact.displayTokenDetails(balance(tok), updatePrice(balance(tok))));
      const buyTok = declassify(interact.buyToken());
    });
    NormalUser.publish(normalName, normalUserAccount, buyTok, newPrice);
    OmegaUser.interact.logInt(buyTok)
    const tokToPay = buyTok * newPrice;

    if(buyTok < balance(tok)){
      commit();
      OmegaUser.interact.logString(gotHere)
      NormalUser.pay(tokToPay);
      OmegaUser.interact.logString(gotHere)
      transfer(buyTok, tok).to(normalUserAccount);
      commit()

      OmegaUser.only(() => {
        declassify(interact.displayTokenDetails(balance(tok), updatePrice(balance(tok))));
      });
      OmegaUser.publish();

      [ totalBought, totalPaid ] = [ totalBought + buyTok, totalPaid + tokToPay ];
      continue;
    } else{
      commit();
      NormalUser.only(() => {
        interact.notEnoughToken();
      });
      NormalUser.publish();

      [ totalBought, totalPaid ] = [ totalBought, totalPaid ];
      continue;
    }
    
  }
  
  transfer(totalPaid).to(OmegaUser)
  assert(balance() == 0)
  assert(balance(tok) == 0);
  tok.burn(tok.supply());

  if (!tok.destroyed()) {
    tok.destroy();
  }
  assert(tok.destroyed() == true);
  commit();
})