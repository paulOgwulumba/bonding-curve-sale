// import logo from './logo.svg';
import React from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import OmegaUser from './components/OmegaUser'
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    // Get contract information from API service
    this.fetchContractInformation = this.fetchContractInformation.bind(this)
    this.fetchContractInformation()
  }

  render() {
    return (
      <div class="App">
        <Navbar />
        <Loader isLoading={this.state.isLoading}/>
        <OmegaUser />
      </div>
    );
  }

  /**
   * @desc Gets the existing contract information from database. If none, allow an Omega User create one.
   */
  fetchContractInformation() {
    fetch('http://localhost:5000/contract-information')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({isLoading: false})
      })
      .catch(e => {
        // If no response is gotten from API service, try connecting again.
        this.fetchContractInformation()
      })
  }
}



export default App;
