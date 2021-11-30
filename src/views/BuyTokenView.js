import React from 'react'
import Loader from '../components/Loader/Loader'
import BuyToken from '../components/BuyToken/BuyToken'

class BuyTokenView extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.props.parent.connectToContract()
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000)
  }

  render() {
    const toBeReturned = this.state.isLoading? <Loader isLoading={true}/> : <BuyToken grandparent={this.props.parent} parent={this}/>
    return (
      toBeReturned
    )
  }
}

export default BuyTokenView