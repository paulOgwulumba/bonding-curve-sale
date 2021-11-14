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
  let tokenPrice = null;

  const fmt = (x) => stdlib.formatCurrency(x, 4);

  // display initial balance before contract deployment.
  console.log(`Your current balance is ${formatCurrency(await stdlib.balanceOf(accUser))}`);

  // if user is an omega user, create a new contract, else attach to already existing contract using contract info
  if (isOmegaUser) {
    contract = accUser.contract(backend);
    
    // display balance after contract deployment.
    console.log(`Contract is launching...`);

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
    contract = accUser.contract(backend, info);
    console.log(`Connecting to contract...`);
  }

  const interact = { ...stdlib.hasRandom };

  //Define interact information for both principals
  interact.name = nameOfUser
  if (isOmegaUser){
    // tokName =  await ask("What would you like to call the token?", x => x);
    // tokSymbol =  await ask("Choose a character symbol for the token?", x => x);
    // tokAmount =  await ask("How much of the token do u want to create?", x => x)
    tokenPrice = await ask("How much is the price of the new token (in network-tokens)?", stdlib.parseCurrency)
    interact.tokenPrice = tokenPrice;
    interact.keepOpen = async () =>{
      const keepOpen = await ask("Do you want to keep the contract open? (Y/n)", yesno)
      return keepOpen;
    }
    interact.paidBy = (name, amount, price) => {
      console.log(`${name} paid for ${fmt(amount)} non-network tokens with ${fmt(amount*price)} network tokens`)
    }
  } else{
    interact.displayPrice = (price) => {
      console.log(`The price of one non-network token = ${price} network tokens`)
    }
    interact.buyToken = async () => {
      const willBuy = await ask(`Would you like to buy non-network tokens? (Y/n)`, yesno)
      if(!willBuy){
        process.exit(0)
      }
      const numberOfToks = await ask(`How many non-network tokens would you like to buy?`, stdlib.parseCurrency)
      return numberOfToks
    }
  }

  interact.showBalance = async (tok) => {
      console.log(`Your balance is ${formatCurrency(await stdlib.balanceOf(accUser))} network tokens and ${await stdlib.balanceOf(accUser, tok)} non-network tokens`);
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
