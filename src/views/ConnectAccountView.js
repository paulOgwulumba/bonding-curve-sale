import React from 'react'
import { Component } from 'react';
import Loader from '../components/Loader/Loader'
import CreateOrImportAccount from '../components/CreateOrImportAccount/CreateOrImportAccount';

class ConnectAccountView extends Component {
  async componentDidMount() {
    await this.props.connectAccount()
  }
  render() {
    if (this.props.parent.state.hasDefaultAccount === false) {
      return (
        <>
          <CreateOrImportAccount parent={this.props.parent} />
        </>
      )
    }
    else {
      return (
        <>
          <Loader isLoading={true} />
        </>
      )
    }
  }
}

export default ConnectAccountView