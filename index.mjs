import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';

const stdlib = loadStdlib(process.env);

(async () => {
  /**
   * @description Starting balance of user (Strictly for testing purposes).
   */
  const startingBalance = stdlib.parseCurrency(100);

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
    `Hello ${nameOfUser}, would you like to create a new contract?`,
    yesno
  );

  console.log('Launching...');

  /**
   * @description Contract instance for the dapp.
   */
  let contract = null;
  let tokName = null;
  let tokSymbol = null;
  let tokAmount = null;
  let abeg = null;

  const fmt = (x) => stdlib.formatCurrency(x, 4);

  // display initial balance before contract deployment.
  console.log(`Your current balance is ${formatCurrency(await stdlib.balanceOf(accUser))}`);

  // if user is an omega user, create a new contract, else attach to already existing contract using contract info
  if (isOmegaUser) {
    contract = accUser.contract(backend);
    
    // display balance after contract deployment.
    console.log(`Your balance after contract deployment is ${formatCurrency(await stdlib.balanceOf(accUser))}`);

    // display contract information
    contract.getInfo().then((info) => {
      console.log(`The contract address is ${JSON.stringify(info)}`);
    });
  } 
  else{
    const info = await ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    contract = accUser.attach(backend, info);
    console.log(`Your balance after connecting to the contract is ${formatCurrency(await stdlib.balanceOf(accUser))}`);
  }

  const interact = { ...stdlib.hasRandom };

  //Define interact information for both principals
  interact.name = nameOfUser
  if (isOmegaUser){
    // tokName =  await ask("What would you like to call the token?", x => x);
    // tokSymbol =  await ask("Choose a character symbol for the token?", x => x);
    // tokAmount =  await ask("How much of the token do u want to create?", x => x)
    abeg = await ask("How much do you want to beg for?", stdlib.parseCurrency)
    interact.abeg = abeg;
    interact.keepOpen = async () =>{
      const keepOpen = await ask("Do you want to keep the contract open? (Y/n)", yesno)
      return keepOpen;
    }
  } else{
    interact.payAbeg = async (abeg) => {
      const payAbeg = await ask(`Would you like to pay ${fmt(abeg)} to the host? (Y/n)`, yesno)
      if(!payAbeg){
        process.exit(0)
      }
    }
  }

  interact.showBalance = async () => {
    console.log(`Your balance is ${formatCurrency(await stdlib.balanceOf(accUser))}`);
  }

  const part = isOmegaUser ? backend.OmegaUser : backend.NormalUser;
  await part(contract, interact);

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
