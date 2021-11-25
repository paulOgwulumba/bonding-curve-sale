// import logo from './logo.svg';
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import RenderView from './views';
import { Views } from './utils/constants'
import * as functions from './utils/functions'
import './App.css';


class App extends React.Component {
  state = {
    view: Views.INDEX_VIEW,
    omegaPassword: '',
    omegaUsername: '',
    canLogOut: false, 
  }

  componentDidMount() {
    // Bind imported functions to App
    this.handleOmegaInputChange = functions.handleOmegaInputChange.bind(this)
    this.handleOmegaInputChange = functions.handleOmegaInputChange.bind(this)
    this.fetchContractInformation = functions.fetchContractInformation.bind(this)

    // Get contract information from API service
    this.fetchContractInformation()
  }

  render() {
    return (
      <div class="App">
        <Navbar />
        {RenderView(this, this.state.view)}
      </div>
    );
  }
}



export default App;
