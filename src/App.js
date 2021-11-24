// import logo from './logo.svg';
import React from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import OmegaUser from './components/OmegaUser'
import './App.css';


class App extends React.Component {
  state = {
    isLoading: true.valueOf,
    omegaUser: {
      username: '',
      password: '',
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange
    }
  }

  componentDidMount() {
    // Get contract information from API service
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.fetchContractInformation = this.fetchContractInformation.bind(this)
    this.fetchContractInformation()
    
  }

  render() {
    return (
      <div class="App">
        <Navbar />
        <Loader isLoading={this.state.isLoading}/>
        <OmegaUser 
          handleSubmit={this.state.omegaUser.handleSubmit} 
          handleChange={this.state.omegaUser.handleChange}
          username={this.state.omegaUser.username} 
          password={this.state.omegaUser.password}
        />
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
        this.setState({isLoading: false})
      })
      .catch(e => {
        // If no response is gotten from API service, try connecting again.
        this.fetchContractInformation()
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('wareva')
  }

  handleChange(event) {
    this.setState({omegaUser: {
      
    }});
  }
}



export default App;
