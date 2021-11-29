import React from 'react'
import { useState, useEffect } from 'react'
import CreateContract from '../components/CreateContract/CreateContract'
import ContractCreated from '../components/ContractCreated/ContractCreated'
import Loader from '../components/Loader/Loader'

const CreateContractView = ({ parent }) => {
  const Views = {
    isLoading: 'is loading',
    createContract: 'create contract',
    contractCreated: 'contract created'
  }
  const [view, setView] = useState(Views.createContract)

  useEffect(() => {
    if(parent.state.isLoading === true){
      setView(Views.contractCreated)
    } 
  })

  switch (view) {
    case Views.isLoading: {
      return <Loader isLoading={true} />
      break
    }
    case Views.contractCreated: {
      return <ContractCreated parent={parent} />
      break;
    }
    default: {
      return (
        <CreateContract parent={parent} />
      )
    }
  }
}

export default CreateContractView