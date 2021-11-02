import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';

const stdlib = loadStdlib(process.env);

(async () => {
  /**
   * @description Starting balance of user (Strictly for testing purposes).
   */
  const startingBalance = stdlib.parseCurrency(10);

  /**
   * @description Name of the current user.
   */
  const nameOfUser = await ask('What is your name?', x => x);

  /**
   * @description Account of user. It is initiated to have the 'startingBalance'
   */
  const accUser = await stdlib.newTestAccount(startingBalance);

  // prompt user if they want to create new token or buy one that exists
  // an omega user is one that creates a new token
  /**
   * @description Holds true if current user is an Omega User.
   */
  const isOmegaUser = await ask(
    `Hello ${nameOfUser}, would you like to create a new token? (saying no is an indication that you want to buy an existing one)`,
    yesno
  );

  console.log('Launching...');

  /**
   * @description Contract instance for the dapp.
   */
  let contract = null;

  // display initial balance before contract deployment.
  console.log(`Your current balance is ${formatCurrency(await stdlib.balanceOf(accUser))}`);

  // if user is an omega user, create a new contract.
  if (isOmegaUser) {
    contract = accUser.contract(backend);
  }

  console.log('Starting backend...');
  backend.User(contract, {
    // implement Alice's interact object here
    ...stdlib.hasRandom,
    name: 26,
  });

  // display balance after contract deployment.
  console.log(`Your balance after contract deployment is ${formatCurrency(await stdlib.balanceOf(accUser))}`);

  console.log(`Here comes the contract information!!`);
  const address = await contract.getInfo();
  console.log(JSON.stringify(address));

  console.log('Goodbye');
})();

/**
 * @description Formats the currency amount to 4 decimal places.
 * @param amount Amount of currency to be formatted.
 * @returns Formatted number.
 */
function formatCurrency(amount) {
  return stdlib.formatCurrency(amount, 4);
}