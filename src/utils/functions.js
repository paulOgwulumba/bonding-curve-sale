import { API_BASE_URL, Views, User } from "./constants";

/**
 * @desc Gets the existing contract information from database. If none, allow an Omega User create one.
 */
function fetchContractInformation() {
  fetch(`${API_BASE_URL}/contract-information`)
    .then(response => response.json())
    .then(async data => {
      let newView = !data.isContract ? Views.OMEGA_LOG_IN : Views.CONNECT_ACCOUNT
      
      this.setState({ 
        view: newView, 
        user: newView === Views.OMEGA_LOG_IN? User.OMEGA_USER : User.NORMAL_USER,
        contract: data.isContract? data.contract.contract : this.state.contract,
        contractAddress: data.isContract? data.contract.address : this.state.contractAddress
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
 * @desc This handles the event triggered when a normal user enters their username or password
 * @param {*} event 
 */
 function handleNormalUserInputChange(event) {
   let numberOfTokens, priceOfTokens
   if(event.target.name === 'numberOfTokens') {
      numberOfTokens = event.target.value;
      priceOfTokens = numberOfTokens === 0? 0 : numberOfTokens * this.state.price
   }

   if (event.target.name === 'priceOfTokens') {
      priceOfTokens = event.target.value;
      numberOfTokens = priceOfTokens === 0 ? 0 : priceOfTokens / this.state.price
   }

   if(priceOfTokens > this.state.reach.balanceOf(this.state.account)  || numberOfTokens > this.formatCurrency(this.state.supply)){} 
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
 * @desc Connect to crypto account
 */
async function connectDefaultAccount() {
  try {
    let acct = await this.state.reach.getDefaultAccount();
    let currentView = this.state.user === User.OMEGA_USER? Views.CREATE_CONTRACT : Views.BUY_TOKEN_VIEW;
    this.setState({ account: acct, hasDefaultAccount: true, view: currentView});
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
function addAccount(account, connectedWithMnemonic=false) {
  
  let currentView = this.state.user === User.OMEGA_USER? Views.CREATE_CONTRACT : Views.BUY_TOKEN_VIEW;

  this.setState({ account: account, view: currentView, connectedWithMnemonic: connectedWithMnemonic })
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
  console.log('Communicating with back end...')

  this.setState({isLoading: true })

  contract.getInfo().then(info => {
    this.setState({contractAddress: JSON.stringify(info), contract: contract, })

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

    console.log(options)

    fetch(`${API_BASE_URL}/contract-information`, options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  })
  
  
  try {
    
    await this.state.backend.OmegaUser(contract, interact)
    // const contractAddress = await contract.getInfo()
    // console.log(contractAddress)
    // this.setState({contractAddress: contractAddress})
  }
  catch(e) {
    console.error(e)
    alert("Insufficied tokens in wallet to create contract")
  }
}

function createParticipantInteractInterface(name = "") {
  const interact = { ...this.state.reach.hasRandom };
  interact.name = name === "" ? "Omega User" : name;

  interact.acceptToken = async (token) => {
    console.log('..........INTERACT.ACCEPTTOKEN..........')
    const tokenID = this.state.reach.bigNumberToNumber(token)
    this.setState({token: token})
    await this.state.account.tokenAccept(tokenID)
    console.log('Token Accepted successfully')
    console.log('....................')
  }

  /**
   * @description displays network token balance and non-network token balance
   * @param tok Token datatype 
   */
  interact.showBalance = async (tok) => {
    console.log('..........INTERACT.SHOWBALANCE..........')
    console.log(`Your balance is ${this.formatCurrency(await this.state.reach.balanceOf(this.state.account))} network tokens and ${this.formatCurrency(this.state.reach.parseCurrency(await this.state.reach.balanceOf(this.state.account, tok)))} non-network tokens`);
    console.log('....................')
  }

  /**
   * @description Displays details of the token on the console
   * @param supply amount of non-network token available in the contract
   * @param price price of one non-network token with respect to network token
   */
  interact.displayTokenDetails = (supply, price) => {
    
    console.log(`..........INTERACT.DISPLAYTOKENDETAILS..........`)
    console.log(`Amount of tokens remaining: ${supply} \nPrice of Token: ${this.formatCurrency(price)}`)
    console.log('....................')
    this.setState({supply: supply, price: (this.formatCurrency(price))})
  }

  return interact
}

/**
 * @desc Connect to contract with account of normal user.
 */
async function connectToContract() {
  const contractAddress = this.state.contractAddress
  console.log(`contract address to connect to: ${contractAddress}`)

  const account = this.state.account
  console.log(account)
  console.log(`account we are to connect to contract with: ${account.getAddress()}`)

  const balanceObject = await this.state.reach.balanceOf(account)

  const balance = this.formatCurrency(balanceObject)

  console.log(balance)

  if (balance == 0) {
    alert('Your ALG balance is insufficient to interact with this contract. Please fund your account and try again.')
    this.setState({view: Views.CONNECT_ACCOUNT})
    return
  } 

  console.log(`Connecting to contract`)
  const contract = account.contract(this.state.backend, JSON.parse(contractAddress))
  console.log(`Connected successfully.`)
  console.log(`Waiting for response from backend`)

  const interact = this.createParticipantInteractInterface();

  /**
   * @description Asks user if they want to buy a no-network token, then asks for how much of it they want
   * @returns Number of non-network tokens user wants to buy
   */
  interact.buyToken = async (supply, tokenPrice) => {
    const price = this.formatCurrency(tokenPrice)

    this.setState({price: price, supply: supply})

    console.log("....INTERACT.BUYTOKEN......")
    console.log("Waiting for User response to proceed")
    let numberOfToks = await this.getUserResponse()
    numberOfToks = this.state.reach.parseCurrency(numberOfToks)
    console.log("User response gotten")
    console.log(`Number of tokens user wants to buy: ${numberOfToks}`)
    console.log('...............')
    return [(numberOfToks), this.state.account.networkAccount]

    // while (true) {
    //   numberOfToks = willBuy ? await ask(`How many non-network tokens would you like to buy?`, x => fmt(stdlib.parseCurrency(x))) : 0
    //   if (numberOfToks * price > balance) {
    //     console.log(`You do not have enough tokens for this transaction. Please don't try to bite more than you can chew`)
    //     continue
    //   } else {
    //     if (numberOfToks > supply) {
    //       console.log(`You're asking for more tokens than are available. Check the amount of tokens then adjust your demand`)
    //       continue
    //     } else {
          
    //       break
    //     }
    //   }
    // }
  }

  interact.giveFeedBack1 = () => {
    console.log('.......INTERACT.GIVEFEEDBACK.ONE.........')
    console.log(`pinging.`)
    console.log('.................................')
  }

  interact.giveFeedBack2 = () => {
    console.log('.......INTERACT.GIVEFEEDBACK.TWO..........')
    console.log(`Ping ping.`)
    console.log('...................................................')
  }

  interact.giveFeedBack3 = () => {
    console.log('.......INTERACT.GIVEFEEDBACK.THREE..........')
    console.log(`ping ping ping ping.`)
    console.log('.....................................................')
  }

  interact.giveFeedBack4 = () => {
    console.log('.......INTERACT.GIVEFEEDBACK.FOUR.........')
    console.log(`ping!!!!!!!!!!!!!!!.`)
    console.log('.................................')
  }

  this.state.backend.NormalUser(contract, interact)
}

function buyToken(event) {
  event.preventDefault()

  if(this.state.numberOfTokens > this.state.supply){
    alert(`You're asking for more tokens than are available. Check the amount of tokens then adjust your demand`)
  }
  else if (this.state.priceOfTokens > this.state.reach.balanceOf(this.state.account)) {
    alert(`You do not have enough tokens for this transaction. Please don't try to bite more than you can chew`)
  }
  else {
    this.resolved(this.state.numberOfTokens)
  }
}

/**
 * @description Formats the currency amount to 4 decimal places.
 * @param amount Amount of currency to be formatted.
 * @returns Formatted number.
 */
 function formatCurrency(amount) {
  return this.state.reach.formatCurrency(amount, 8);
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

