// import logo from './logo.svg';
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import RenderView from './views';
import { Views } from './utils/constants'
import * as functions from './utils/functions'
import './App.css';


class App extends React.Component {
  state = {
    reach: this.props.reach,
    account: {},
    hasDefaultAccount: 'unknown',

    view: Views.INDEX_VIEW,
    omegaPassword: '',
    omegaUsername: '',
    canLogOut: false, 
    omegaDetailsAreCorrect: true
  }

  componentDidMount() {
    // Bind imported functions to App
    this.handleOmegaInputChange = functions.handleOmegaInputChange.bind(this)
    this.handleOmegaLogInSubmit = functions.handleOmegaLogInSubmit.bind(this)
    this.fetchContractInformation = functions.fetchContractInformation.bind(this)
    this.handleLogOut = functions.handleLogOut.bind(this)
    this.connectDefaultAccount = functions.connectDefaultAccount.bind(this)

    // Get contract information from API service
    this.fetchContractInformation()
  }

  render() {
    return (
      <div class="App">
        <Navbar canLogOut={this.state.canLogOut} handleLogOut={this.handleLogOut}/>
        {RenderView(this, this.state.view)}
      </div>
    );
  }
}



export default App;
