'reach 0.1';

const User = {
  showBalance: Fun([], Null),
  ...hasRandom,
}

export const main = Reach.App(() => {
  const OmegaUser = Participant('OmegaUser', {
    ...User,
    name: Bytes(64),
    tokenName: Bytes(32),
    tokenSymbol: Bytes(8),
    tokenAmount: UInt,
    abeg: UInt,
    keepOpen: Fun([], Bool)
  });
  const NormalUser = ParticipantClass('NormalUser', {
    ...User,
    name: Bytes(64),
    payAbeg: Fun([UInt], Null)
  })
  deploy();

  // write your program here

  OmegaUser.only(() => {
    const name = declassify(interact.name);
    const abeg = declassify(interact.abeg)
    // const tokenName = declassify(interact.tokenName)
    // const tokenSymbol = declassify(interact.tokenSymbol)
    // const tokenAmount = declassify(interact.tokenAmount)
  });
  // OmegaUser.publish(name, tokenName, tokenSymbol, tokenAmount);
  OmegaUser.publish(name, abeg);
  //Create token
  // const supply = 2 * tokenAmount;
  // const tok = new Token({ name: tokenName, symbol: tokenSymbol, supply: supply});
  // transfer(tokenAmount, tok).to(OmegaUser);
  // tok.burn(tokenAmount);
  // assert(tok.supply() == supply - tokenAmount);
  // tok.burn();
  // assert(tok.destroyed() == false);
  // commit()


  var payers =  0;
  invariant( balance() == 0)
  while(true){
    commit()

    NormalUser.only(() =>{
      const NormalName = declassify(interact.name);
      declassify(interact.payAbeg(abeg))
    })
    NormalUser.publish()
      .pay(abeg)
    transfer(abeg).to(OmegaUser);
    commit()

    each([OmegaUser, NormalUser], () => {
      declassify(interact.showBalance());
    });

    race(NormalUser, OmegaUser).publish();

    payers =  payers + 1 
    continue
  }

  commit();
});
