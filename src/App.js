// import logo from './logo.svg';
import React from 'react'
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar'
import RenderView from './views';
import { Views } from './utils/constants'
import * as functions from './utils/functions'
import './App.css';


class App extends React.Component {
  state = {
    user: '',
    reach: this.props.reach,
    backend: this.props.backend,
    account: null,
    hasDefaultAccount: 'unknown',
    supply: 0,
    price: 0,
    isLoading: false,
    contractAddress: '_none_',
    view: Views.INDEX_VIEW,
    omegaPassword: '',
    omegaUsername: '',
    canLogOut: false,
    omegaDetailsAreCorrect: true,

    token: {},
    numberOfTokens: '',
    priceOfTokens: '',
    numberOfTokensBigInt: '',

    connectedWithMnemonic: false,
  }

  resolved;

  componentDidMount() {
    // Bind imported functions to App
    this.handleOmegaInputChange = functions.handleOmegaInputChange.bind(this)
    this.handleOmegaLogInSubmit = functions.handleOmegaLogInSubmit.bind(this)
    this.fetchContractInformation = functions.fetchContractInformation.bind(this)
    this.addAccount = functions.addAccount.bind(this)
    this.handleLogOut = functions.handleLogOut.bind(this)
    this.connectDefaultAccount = functions.connectDefaultAccount.bind(this)
    this.createContract = functions.createContract.bind(this)
    this.createParticipantInteractInterface = functions.createParticipantInteractInterface.bind(this)
    this.formatCurrency = functions.formatCurrency.bind(this)
    this.connectToContract = functions.connectToContract.bind(this)
    this.handleNormalUserInputChange = functions.handleNormalUserInputChange.bind(this)
    this.buyToken = functions.buyToken.bind(this)

    this.getUserResponse = async () => {
      return await new Promise((resolve, reject) => {
        this.resolved = resolve;
      });
    };

    // Get contract information from API service
    this.fetchContractInformation()
  }

  render() {
    return (
      <div className="App">
        <Navbar canLogOut={this.state.canLogOut} handleLogOut={this.handleLogOut} />
        {RenderView(this, this.state.view)}
      </div>
    );
  }
}



export default App;
