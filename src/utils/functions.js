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
      console.log(data)
    })
}

/**
 * @desc This handles the event triggered when an omega user enters their username or password
 * @param {*} event 
 */
function handleOmegaInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
}

/**
 * @desc This triggers a log out of the omega user.
 */
function handleLogOut() {
  fetch(`${API_BASE_URL}/admin/log-out`)
    .then(response => response.json())
    .then(data => {
      this.setState({view: Views.INDEX_VIEW})
    }).catch(e => {
      this.handleLogOut()
    })
}

export {fetchContractInformation, handleOmegaInputChange, handleOmegaLogInSubmit}