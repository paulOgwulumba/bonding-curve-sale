import { API_BASE_URL, Views } from "./constants";

/**
 * @desc Gets the existing contract information from database. If none, allow an Omega User create one.
 */
function fetchContractInformation() {
  fetch(`${API_BASE_URL}/contract-information`)
    .then(response => response.json())
    .then(data => {
        let newView = !data.isContract? Views.OMEGA_LOG_IN : Views.CONNECT_ACCOUNT
        this.setState({view: newView})
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
      if(data.status === 'success'){
        this.setState({view: Views.CONNECT_ACCOUNT, canLogOut: true, omegaDetailsAreCorrect: true, omegaUsername: '', omegaPassword: ''})
      } else {
        this.setState({omegaDetailsAreCorrect: false})
      }
    })
    .catch(e => {
      this.setState({view: Views.INDEX_VIEW})
    })
}

/**
 * @desc This handles the event triggered when an omega user enters their username or password
 * @param {*} event 
 */
function handleOmegaInputChange(event) {
    this.setState({[event.target.name]: event.target.value, omegaDetailsAreCorrect: true})
}

/**
 * @desc This triggers a log out of the omega user.
 */
function handleLogOut() {
  fetch(`${API_BASE_URL}/admin/log-out`)
    .then(response => response.json())
    .then(data => {
      this.setState({view: Views.INDEX_VIEW, canLogOut: false})
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
    this.setState({account: acct, hasDefaultAccount: true});
    return true
  } 
  catch(error) {
    this.setState({hasDefaultAccount: false})
    return false
  }
  
}

/**
 * This adds a new account to the application.
 * @param {*} account contract object to be added to application
 */
function addAccount(account) {
  this.setState({account: account, view: Views.CREATE_CONTRACT})
  console.log('here')
  console.log(account)
}

export {
          fetchContractInformation, 
          handleOmegaInputChange, 
          handleOmegaLogInSubmit, 
          handleLogOut, 
          connectDefaultAccount,
          addAccount
}