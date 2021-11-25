import { Component } from 'react';
import Loader from '../components/Loader/Loader'
import { Provider } from '../utils/constants';

class ConnectAccountView extends Component {
  async componentDidMount() {
    console.log(await this.props.connectAccount(Provider.TEST_NET))
  }
  render() {
    return(
      <>
        <Loader isLoading={true}/>
      </>
    )
  }
}

export default ConnectAccountView