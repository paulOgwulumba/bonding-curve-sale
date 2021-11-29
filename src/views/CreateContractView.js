import React from 'react'
import { useState } from 'react'
import CreateContract from '../components/CreateContract/CreateContract'
import Loader from '../components/Loader/Loader'

const CreateContractView = ({ parent }) => {
  const Views = {
    isLoading: 'is loading',
    createContract: 'create contract',
    contractCreated: 'contract created'
  }
  const [view, setView] = useState(Views.createContract)

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