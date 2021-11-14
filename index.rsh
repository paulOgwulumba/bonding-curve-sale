'reach 0.1';

const User = {
  showBalance: Fun([Token], Null),
  ...hasRandom,
}

export const main = Reach.App(() => {
  const OmegaUser = Participant('OmegaUser', {
    ...User,
    name: Bytes(64),
    tokenPrice: UInt,
    paidBy: Fun([Bytes(64), UInt, UInt], Null), //<(name, amount-of-n-token, price-of-n-n-token)
    keepOpen: Fun([], Bool)
  });

  const NormalUser = ParticipantClass('NormalUser', {
    ...User,
    name: Bytes(64),
    displayPrice: Fun([UInt], Null),
    buyToken: Fun([], UInt)
  })
  deploy();

  // write your program here

  OmegaUser.only(() => {
    const name = declassify(interact.name);
    
  });
  OmegaUser.publish(name);

  // Create token
  const supply = UInt.max;
  const tok = new Token({ name: '01234567890123456789012345678901', symbol: '01234567', supply: supply});
  const tokenPrice = 2

  
  var totalBought = 0
  invariant( balance() == totalBought)
  while(true){
    commit()

    NormalUser.only(() =>{
      const normalName = declassify(interact.name);
      declassify(interact.displayPrice(tokenPrice))
      const tokenToBuy = declassify(interact.buyToken())
      const totalPrice = tokenToBuy * tokenPrice
      const NormAccount = this
    })
    NormalUser.publish(normalName, tokenToBuy, totalPrice, NormAccount)
      .pay(totalPrice)
    // transfer(tokenToBuy, tok).to(NormAccount);
    commit()

    OmegaUser.only(() => {
      declassify(interact.paidBy(normalName, tokenToBuy, tokenPrice));
    })
    OmegaUser.publish()
    commit()

    NormalUser.only(() =>{
      declassify(interact.showBalance(tok));
    })
    NormalUser.publish()
    commit()
    
    OmegaUser.only(() =>{
      const breakLoop = declassify(interact.keepOpen())
    })
    OmegaUser.publish(breakLoop)
    // each([OmegaUser, NormalUser], () => {
    //   declassify(interact.showBalance());
    // });
    
    totalBought =  totalBought + totalPrice
    continue
  }

  transfer(totalBought).to(OmegaUser);
  tok.burn(tok.supply());
  // assert(tok.supply() == supply - 100);
  tok.burn();
  assert(tok.destroyed() == false);
  commit();

  OmegaUser.only(() => {
    declassify(interact.showBalance(tok));
  })
  OmegaUser.publish()
  commit()
});
