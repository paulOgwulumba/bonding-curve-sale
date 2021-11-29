import { API_BASE_URL, Views } from "./constants";

/**
 * @desc Gets the existing contract information from database. If none, allow an Omega User create one.
 */
function fetchContractInformation() {
  fetch(`${API_BASE_URL}/contract-information`)
    .then(response => response.json())
    .then(data => {
      let newView = !data.isContract ? Views.OMEGA_LOG_IN : Views.CONNECT_ACCOUNT
      this.setState({ view: newView })
    })
    .catch(e => {
      // If no response is gotten from API service, try connecting again.
      this.fetchContractInformation()
    })
}

/**
 * @desc This handles the event triggered when an omega user attempts to log in.
 * @param {*} event 
 */
function handleOmegaLogInSubmit(event) {
  // prevents the refreshing of the page
  event.preventDefault();

  let username = this.state.omegaUsername;
  let password = this.state.omegaPassword;

  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ username, password }),
  }

  fetch(`${API_BASE_URL}/admin/log-in`, options)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        this.setState({ view: Views.CONNECT_ACCOUNT, canLogOut: true, omegaDetailsAreCorrect: true, omegaUsername: '', omegaPassword: '' })
      } else {
        this.setState({ omegaDetailsAreCorrect: false })
      }
    })
    .catch(e => {
      this.setState({ view: Views.INDEX_VIEW })
    })
}

/**
 * @desc This handles the event triggered when an omega user enters their username or password
 * @param {*} event 
 */
function handleOmegaInputChange(event) {
  this.setState({ [event.target.name]: event.target.value, omegaDetailsAreCorrect: true })
}

/**
 * @desc This triggers a log out of the omega user.
 */
function handleLogOut() {
  fetch(`${API_BASE_URL}/admin/log-out`)
    .then(response => response.json())
    .then(data => {
      this.setState({ view: Views.INDEX_VIEW, canLogOut: false })
      this.fetchContractInformation()
    }).catch(e => {
      this.handleLogOut()
    })
}

/**
 * @desc Connect to crypto account
 */
async function connectDefaultAccount() {
  try {
    let acct = await this.state.reach.getDefaultAccount();
    this.setState({ account: acct, hasDefaultAccount: true });
    return true
  }
  catch (error) {
    this.setState({ hasDefaultAccount: false })
    return false
  }

}

/**
 * This adds a new account to the application.
 * @param {*} account contract object to be added to application
 */
function addAccount(account) {
  this.setState({ account: account, view: Views.CREATE_CONTRACT })
}

async function createContract() {
  const interact = this.createParticipantInteractInterface();

  /**
   * @description displays amount of non-network tokens paid for by user and amount of network tokens it cost
   * @param name Name of User that paid to contract
   * @param amount Amount of tokens paid to contract 
   * @param price Price of non-network token
   */
  interact.paidBy = (name, amount, price, address) => {
    console.log(`${name} of address: ${address} paid for ${amount} non-network tokens with ${this.formatCurrency(amount * price)} network tokens. `)
  }

  console.log('Creating new contract...')
  const contract = this.state.account.deploy(this.state.backend);
  console.log('Contract created successfully')
  console.log(contract)
  this.setState({ contract: contract })

  await this.state.backend.OmegaUser(contract, interact);
}

function createParticipantInteractInterface(name = "") {
  const interact = { ...this.state.reach.hasRandom };
  interact.name = name === "" ? "Omega Man" : name;

  interact.acceptToken = async (token) => {
    const tokenID = this.state.reach.bigNumberToNumber(token)
    await this.state.account.tokenAccept(tokenID)
  }

  /**
   * @description displays network token balance and non-network token balance
   * @param tok Token datatype 
   */
  interact.showBalance = async (tok) => {
    // console.log(`Your balance is ${formatCurrency(await stdlib.balanceOf(accUser))} network tokens and ${formatCurrency(await stdlib.balanceOf(accUser, tok))} non-network tokens`);
    console.log(`Your balance is ${this.formatCurrency(await this.state.reach.balanceOf(this.state.account))} network tokens and ${this.formatCurrency(this.state.reach.parseCurrency(await this.state.reach.balanceOf(this.state.account, tok)))} non-network tokens`);
  }

  /**
   * @description Displays details of the token on the console
   * @param supply amount of non-network token available in the contract
   * @param price price of one non-network token with respect to network token
   */
  interact.displayTokenDetails = (supply, price) => {
    console.log(`supply: ${supply}`)
    console.log(`price: ${price}`)
    console.log(`Amount of tokens remaining: ${supply} \nPrice of Token: ${this.formatCurrency(price)}`)
  }

  return interact
}

export {
  fetchContractInformation,
  handleOmegaInputChange,
  handleOmegaLogInSubmit,
  handleLogOut,
  connectDefaultAccount,
  addAccount,
  createContract,
  createParticipantInteractInterface,
  formatCurrency
}

/**
 * @description Formats the currency amount to 4 decimal places.
 * @param amount Amount of currency to be formatted.
 * @returns Formatted number.
 */
function formatCurrency(amount) {
  return this.state.reach.formatCurrency(amount, 8);
}