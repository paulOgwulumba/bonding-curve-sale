import IndexView from './IndexView'
import OmegaLogInView from './OmegaLogInView'
import ConnectAccountView from './ConnectAccountView'
import CreateContractView from './CreateContractView'
import { Views } from '../utils/constants'
import React from 'react'

const RenderView = (parent, view = "") => {
    switch (view) {
        // Index View
        case Views.INDEX_VIEW: {
            return (
                <IndexView state={parent.state} />
            )
            break;
        }

        case Views.OMEGA_LOG_IN: {
            return (
                <OmegaLogInView parent={parent} />
            )
            break;
        }

        case Views.CONNECT_ACCOUNT: {
            return <ConnectAccountView parent={parent} connectAccount={parent.connectDefaultAccount} />
            break;
        }

        case Views.CREATE_CONTRACT: {
            return <CreateContractView parent={parent} />
            break;
        }

        default: {
            return (
                <IndexView state={parent.state} />
            )
        }
    }
}

export default RenderView