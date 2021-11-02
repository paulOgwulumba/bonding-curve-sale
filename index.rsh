'reach 0.1';

export const main = Reach.App(() => {
  const OmegaUser = Participant('User', {
    // Specify Alice's interact interface here
    ...hasRandom,
    name: UInt,
  });
  deploy();
  // write your program here
  OmegaUser.only(() => {
    const name = declassify(interact.name);
  });

  OmegaUser.publish(name);
  commit();
});
