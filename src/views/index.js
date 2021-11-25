import IndexView from './IndexView'
import OmegaLogInView from './OmegaLogInView'
import { Views } from '../utils/constants'

const RenderView = (parent, view="") => {
    switch(view) {
        // Index View
        case Views.INDEX_VIEW: {
            return (
                <IndexView state={parent.state}/>
            )
            break;
        }

        case Views.OMEGA_LOG_IN: {
            return (
                <OmegaLogInView parent={parent}/>
            )
            break;
        }

        default : {
            return (
                <IndexView state={parent.state}/>
            )
        }
    }
}

export default RenderView