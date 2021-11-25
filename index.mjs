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

  const fmt = (x) => stdlib.formatCurrency(x, 8);

  // if user is an omega user, create a new contract, else attach to already existing contract using contract info
  if (isOmegaUser) {
    contract = accUser.contract(backend);
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
    /**
     * @description displays amount of non-network tokens paid for by user and amount of network tokens it cost
     * @param name Name of User that paid to contract
     * @param amount Amount of tokens paid to contract 
     * @param price Price of non-network token
     */
    interact.paidBy = (name, amount, price, address) => {
      console.log(`${name} of address: ${address} paid for ${amount} non-network tokens with ${fmt(amount*price)} network tokens. `)
    }

    /**
     * @description Loggers for the backend
     * 
     */
    interact.logString = (value) => {
      console.log(`String log: ${value}`)
    }
    interact.logInt = (value) => {
      console.log(`Integer log: ${value}`)
    }
    interact.logBool = (value) => {
      console.log(`Boolean log: ${value}`)
    }
  } else{

    /**
     * @description Asks user if they want to buy a no-network token, then asks for how much of it they want
     * @returns Number of non-network tokens user wants to buy
     */
    interact.buyToken = async (supply, tokenPrice) => {
      const willBuy = await ask(`Would you like to buy non-network tokens? (Y/n)`, yesno)
      var numberOfToks =  null
      const balance = formatCurrency(await stdlib.balanceOf(accUser))
      const price = formatCurrency(tokenPrice)
      while(true){
        numberOfToks = willBuy ? await ask(`How many non-network tokens would you like to buy?`, x => fmt(stdlib.parseCurrency(x))) : 0
        if(numberOfToks * price > balance){
          console.log(`You do not have enough tokens for this transaction. Please don't try to bite more than you can chew`)
          continue
        } else{
          if(numberOfToks > supply){
            console.log(`You're asking for more tokens than are available. Check the amount of tokens then adjust your demand`)
            continue
          } else{
            return [(numberOfToks), accUser.networkAccount]
            break
          }
        }
      }
    }
  }

  interact.acceptToken = async (token) => {
    const tokenID = stdlib.bigNumberToNumber(token)
    await accUser.tokenAccept(tokenID)
  }

  /**
   * @description Displays details of the token on the console
   * @param supply amount of non-network token available in the contract
   * @param price price of one non-network token with respect to network token
   */
  interact.displayTokenDetails = (supply, price) =>{
    console.log(`Amount of tokens remaining: ${supply} \nPrice of Token: ${formatCurrency(price)}`)
  }

  /**
   * @description displays network token balance and non-network token balance
   * @param tok Token datatype 
   */
  interact.showBalance = async (tok) => {
      // console.log(`Your balance is ${formatCurrency(await stdlib.balanceOf(accUser))} network tokens and ${formatCurrency(await stdlib.balanceOf(accUser, tok))} non-network tokens`);
      console.log(`Your balance is ${formatCurrency(await stdlib.balanceOf(accUser))} network tokens and ${formatCurrency(stdlib.parseCurrency(await stdlib.balanceOf(accUser, tok)))} non-network tokens`);
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
  return stdlib.formatCurrency(amount, 8);
}
