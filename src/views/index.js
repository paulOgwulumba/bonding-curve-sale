import IndexView from './IndexView'
import OmegaLogInView from './OmegaLogInView'
import ConnectAccountView from './ConnectAccountView'
import CreateContractView from './CreateContractView'
import BuyTokenView from './BuyTokenView'
import { Views } from '../utils/constants'
import React from 'react'

const RenderView = (parent, view = "") => {
    switch (view) {
        // Index View
        case Views.INDEX_VIEW: {
            return (
                <IndexView state={parent.state} />
            )
        }

        case Views.OMEGA_LOG_IN: {
            return (
                <OmegaLogInView parent={parent} />
            )
        }

        case Views.CONNECT_ACCOUNT: {
            return <ConnectAccountView parent={parent} connectAccount={parent.connectDefaultAccount} />
        }

        case Views.CREATE_CONTRACT: {
            return <CreateContractView parent={parent} />
        }

        case Views.BUY_TOKEN_VIEW: {
          return <BuyTokenView parent={parent} />
        }

        default: {
            return (
                <IndexView state={parent.state} />
            )
        }
    }
}

export default RenderView