'reach 0.1';

export const main = Reach.App(() => {
  const OmegaUser = Participant('OmegaUser', {
    ...hasRandom,
    name: Bytes(64),
    tokenName: Bytes(32),
    tokenSymbol: Bytes(8),
    tokenAmount: UInt,
  });
  const NormalUser = Participant('NormalUser', {
    name: Bytes(64),
    ...hasRandom,
  })
  deploy();

  // write your program here

  OmegaUser.only(() => {
    const name = declassify(interact.name);
    const tokenName = declassify(interact.tokenName)
    const tokenSymbol = declassify(interact.tokenSymbol)
    const tokenAmount = declassify(interact.tokenAmount)
  });
  OmegaUser.publish(name, tokenName, tokenSymbol, tokenAmount);

  //Create token
  const supply = 2 * tokenAmount;
  const tok = new Token({ name: tokenName, symbol: tokenSymbol, supply: supply});
  transfer(tokenAmount, tok).to(OmegaUser);
  tok.burn(tokenAmount);
  assert(tok.supply() == supply - tokenAmount);
  tok.burn();
  assert(tok.destroyed() == false);
  commit()

  NormalUser.only(() => {
    const NormalName = declassify(interact.name);
  })
  NormalUser.publish(NormalName);
  commit();

});
