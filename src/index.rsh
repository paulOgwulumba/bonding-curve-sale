'reach 0.1';

const User = {
  showBalance: Fun([Token], Null),
  displayTokenDetails: Fun([UInt, UInt], Null), //(supply, price)
  acceptToken: Fun([Token], Null),
  ...hasRandom,
};
const gotHere = "got here";

/**
 * 
 * @param totalSupply Supply of non-network token in contract
 * @returns Price of non-network token w.r.t network token
 */
const updatePrice = (totalSupply) => {
  if (totalSupply == 0) return 50000;
  else return 50000000000000000 / totalSupply;
  // return totalSupply/4
};

export const main = Reach.App(() => {
  const OmegaUser = Participant('OmegaUser', {
    ...User,
    name: Bytes(64),
    paidBy: Fun([Bytes(64), UInt, UInt, Address], Null), //<(name, amount-of-n-token, price-of-n-n-token)
  });

  const NormalUser = ParticipantClass('NormalUser', {
    ...User,
    name: Bytes(64),
    buyToken: Fun([UInt, UInt], Tuple(UInt, Address)),  //supply of non-network tokens
    giveFeedBack1: Fun([], Null),                 //give feedback to normal user on state of contract runtime
    giveFeedBack2: Fun([], Null),
    giveFeedBack3: Fun([], Null),
    giveFeedBack4: Fun([], Null)
  });
  deploy();

  //Contract flow starts here

  OmegaUser.only(() => {
    const name = declassify(interact.name);
  });
  OmegaUser.publish(name);

  // Create token
  const supply = 1000000000000000;
  const tok = new Token({ name: Bytes(32).pad('DaaraCoin'), symbol: Bytes(8).pad('DRA'), supply: supply });
  commit();

  //Display minted token's supply and price to Omega user
  OmegaUser.only(() => {
    interact.acceptToken(tok);
    declassify(interact.displayTokenDetails(balance(tok), updatePrice(balance(tok))));
  });
  NormalUser.interact.acceptToken(tok);
  OmegaUser.publish();

  var [totalBought, totalPaid] = [0, 0]; //total amount of non-network tokens paid for, total amount of network tokens spent
  invariant((supply == balance(tok) + totalBought) && (balance() == totalPaid));
  while (totalBought <= supply) {
    commit();

    //Normal User gets and publishes their name and account address and gets shown token details 
    NormalUser.only(() => {
      const newPrice = updatePrice(balance(tok));
      const normalUserAccount = this;
      const normalName = declassify(interact.name);
      declassify(interact.showBalance(tok));
      declassify(interact.displayTokenDetails(balance(tok), newPrice));
      const [buyTok, me] = declassify(interact.buyToken(balance(tok), newPrice));
      const tokToPay = buyTok * newPrice;
      assume(buyTok <= balance(tok));

      interact.giveFeedBack1();                                                      //here1
    });
    NormalUser.interact.giveFeedBack2();                                                             //here
    NormalUser.publish(buyTok, newPrice, normalUserAccount, me, normalName, tokToPay)
      .pay(tokToPay)
      .when(me == normalUserAccount)
      .timeout(relativeTime(5000), () => {
        NormalUser.publish();
        NormalUser.interact.giveFeedBack3();
        [totalBought, totalPaid] = [totalBought, totalPaid];
        continue;
      });

                                                                 //here
    //OmegaUser.interact.paidBy(normalName, buyTok, newPrice, normalUserAccount)
    require(this == normalUserAccount);

    require(buyTok <= balance(tok));
    transfer(buyTok, tok).to(this);
    NormalUser.interact.giveFeedBack4();                                                            //here
    //OmegaUser.interact.displayTokenDetails(balance(tok), updatePrice(balance(tok)));
    [totalBought, totalPaid] = [totalBought + buyTok, totalPaid + tokToPay];
    continue;
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