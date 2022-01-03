import { API_BASE_URL, Views, User } from "./constants";

/**
 * @desc Gets the existing contract information from database. If none, allow an Omega User to create one.
 */
function fetchContractInformation() {
  fetch(`${API_BASE_URL}/contract-information`)
    .then(response => response.json())
    .then(async data => {
      let newView = !data.isContract ? Views.OMEGA_LOG_IN : Views.CONNECT_ACCOUNT

      this.setState({
        view: newView,
        user: newView === Views.OMEGA_LOG_IN ? User.OMEGA_USER : User.NORMAL_USER,
        contract: data.isContract ? data.contract.contract : this.state.contract,
        contractAddress: data.isContract ? data.contract.address : this.state.contractAddress
      })
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

  // Send username and password to API microservice for validation.
  fetch(`${API_BASE_URL}/admin/log-in`, options)
    .then(response => response.json())
    .then(data => {
      // if validation is passed, set the view to the connect account page.
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
  this.setState({ [event.target.name]: event.target.value, omegaDetailsAreCorrect: true });
}

/**
 * @desc This handles the event triggered when a normal user tries to select the amount of tokens they want to buy.
 * @param {*} event 
 */
async function handleNormalUserInputChange(event, bal) {
  let numberOfTokens, priceOfTokens;
  if (event.target.name === 'numberOfTokens') {
    numberOfTokens = event.target.value;
    priceOfTokens = numberOfTokens === 0 ? 0 : (numberOfTokens) * ((this.state.price));
  }

  if (event.target.name === 'priceOfTokens') {
    priceOfTokens = event.target.value;
    numberOfTokens = priceOfTokens === 0 ? 0 : (priceOfTokens) / ((this.state.price));
  }

  let sup = this.formatCurrency(this.state.supply);

  // If user selects a number of tokens exceeding current supply or whose total price exceeds the user's balance, it gets rejected
  if (parseInt(priceOfTokens) > parseInt(bal) || parseInt(numberOfTokens) > (parseInt(sup) * 1000000)) { }
  else {
    this.setState({ numberOfTokens: numberOfTokens, priceOfTokens: priceOfTokens })
  }

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
 * @desc Connect to the default account linked to the browser.
 * @returns {Boolean} true if connection is successful, false if connection is not successful.
 */
async function connectDefaultAccount() {
  try {
    let acct = await this.state.reach.getDefaultAccount();
    let currentView = this.state.user === User.OMEGA_USER ? Views.CREATE_CONTRACT : Views.BUY_TOKEN_VIEW;
    this.setState({ account: acct, hasDefaultAccount: true, view: currentView });
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
 * @param {Boolean} connectedWithMnemonic specifies if the account to be added was imorted with the use of a mnemonic key phrase or not.
 */
function addAccount(account, connectedWithMnemonic = false) {

  let currentView = this.state.user === User.OMEGA_USER ? Views.CREATE_CONTRACT : Views.BUY_TOKEN_VIEW;

  this.setState({ account: account, view: currentView, connectedWithMnemonic: connectedWithMnemonic })
}

/**
 * @desc Creates a new contract.
 * @returns 
 */
async function createContract() {
  // This creates a new participant interact interface.
  const interact = this.createParticipantInteractInterface();

  /**
   * @description displays amount of non-network tokens paid for by user and amount of network tokens it cost
   * @param name Name of User that paid to contract
   * @param amount Amount of tokens paid to contract 
   * @param price Price of non-network token
   */
  interact.paidBy = (name, amount, price, address) => {
    
  }

  let contract;

  try {
    contract = this.state.account.deploy(this.state.backend);
  } catch (e) {
    alert("Unable to create contract. Fund your account and try again.")
    return
  }

  this.setState({ isLoading: true })

  contract.getInfo().then(info => {
    this.setState({ contractAddress: JSON.stringify(info), contract: contract, })

    let obj = {
      contract: JSON.stringify(contract),
      address: JSON.stringify(info)
    }

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(obj)
    }

    // send contract information to API service to save in database.
    fetch(`${API_BASE_URL}/contract-information`, options)
      .then(response => response.json())
      .then(data => {
        alert("Contract created successfully.");
      })
      .catch(err => {
        alert("Something went wrong while creating contract.");
      })
  })


  try {
    await this.state.backend.OmegaUser(contract, interact)
  }
  catch (e) {
    alert("You have exceeded the maximum number of apps you can create. Switch to another account and try again.");
    this.setState({ isLoading: false, view: Views.CONNECT_ACCOUNT })
    return
  }
}

/**
 * This creates the interact interface object that the Reach backend uses to interact with the frontend.
 * @param {*} name : Name of the participant.
 * @returns {*} An interact interface object for connecting with the backend.
 */
function createParticipantInteractInterface(name = "") {
  const interact = { ...this.state.reach.hasRandom };
  interact.name = name === "" ? "Omega User" : name;

  interact.acceptToken = async (token) => {
    const tokenID = this.state.reach.bigNumberToNumber(token)
    this.setState({ token: token, isLoading: false })
    await this.state.account.tokenAccept(tokenID)
  }

  /**
   * @description displays network token balance and non-network token balance
   * @param tok Token datatype 
   */
  interact.showBalance = async (tok) => {}

  /**
   * @description Displays details of the token.
   * @param supply amount of non-network token available in the contract
   * @param price price of one non-network token with respect to network token
   */
  interact.displayTokenDetails = (supply, price) => {
    this.setState({ supply: supply, price: (this.formatCurrency(price)) })
  }

  return interact
}

/**
 * @desc Connect to contract with account of normal user.
 */
async function connectToContract() {
  const contractAddress = this.state.contractAddress

  const account = this.state.account

  const balanceObject = await this.state.reach.balanceOf(account)

  const balance = this.formatCurrency(balanceObject)

  if (parseInt(balance) === 0) {
    alert('Your ALG balance is insufficient to interact with this contract. Please fund your account and try again.')
    this.setState({ view: Views.CONNECT_ACCOUNT })
    return
  }

  let contract
  try {
    contract = account.contract(this.state.backend, JSON.parse(contractAddress))
  }
  catch (error) {
    alert("You cannot connect to this contract with your account. Please try another account.");
    this.setState({ view: Views.CONNECT_ACCOUNT })
    return
  }
  
  const interact = this.createParticipantInteractInterface();

  /**
   * @description Asks user if they want to buy a no-network token, then asks for how much of it they want
   * @returns Number of non-network tokens user wants to buy
   */
  interact.buyToken = async (supply, tokenPrice) => {
    const price = this.formatCurrency(tokenPrice)

    this.setState({ price: price, supply: supply })

    let numberOfToks = await this.getUserResponse()
    let numberOfToksParsed = this.state.reach.parseCurrency(numberOfToks)
    let numberOfToksFormatted = this.formatCurrency(numberOfToksParsed)
    
    return [parseInt(numberOfToksFormatted), this.state.account.networkAccount]
  }

  // interact.giveFeedBack1, interact.giveFeedBack2, interact.giveFeedBack3 and interact.giveFeedBack4 are used to monitor the progress
  // of the transactions happening in the backend.
  interact.giveFeedBack1 = () => {
    if (this.state.tracker === 3) {
      alert("SOMETHING WENT WRONG WITH THIS TRANSACTION.")
      this.setState({ tracker: 0 })
    }
  }

  interact.giveFeedBack2 = () => {
    this.setState({ tracker: 2 })
  }

  interact.giveFeedBack3 = () => {
    this.setState({ tracker: 3 })
  }

  interact.giveFeedBack4 = () => {
    alert("Interaction with contract completed! If there is no change in your ALG balance, it means your transaction timed out. Try again till there is a change in your ALG balance. If there was a change in your ALG balance, your transaction was successful!!")
  }

  this.state.backend.NormalUser(contract, interact)
}

function buyToken(event, balance) {
  event.preventDefault()

  if (this.state.numberOfTokens > parseInt(this.formatCurrency(this.state.supply)) * 1000000) {
    alert(`You're asking for more tokens than are available. Check the amount of tokens then adjust your demand.`)
  }
  else if (this.state.priceOfTokens > balance) {
    alert(`You do not have enough tokens for this transaction. Please don't try to bite more than you can chew.`)
  }
  else if (this.state.numberOfTokens < 0 || this.state.priceOfTokens < 0) {
    alert('Negative values are not allowed.')
  }
  else {
    this.setState({ isLoading: true })
    this.resolved(this.state.numberOfTokens)
  }
}

/**
 * @description Formats the currency amount to 4 decimal places.
 * @param amount Amount of currency to be formatted.
 * @returns Formatted number.
 */
function formatCurrency(amount) {
  return this.state.reach.formatCurrency(amount, 10);
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
  formatCurrency,
  connectToContract,
  handleNormalUserInputChange,
  buyToken
}

