import { Component } from 'react';
import Loader from '../components/Loader/Loader'

class CreateContractView extends Component {
  render() {
    return(
      <>
        <Loader isLoading={true}/>
      </>
    )
  }
}

export default CreateContractView