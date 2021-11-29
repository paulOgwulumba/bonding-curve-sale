import React from 'react'
import OmegaUserLogIn from '../components/OmegaUserLogIn/OmegaUserLogIn'

const OmegaLogInView = ({ parent }) => {
    return (
        <OmegaUserLogIn
            password={parent.state.omegaPassword}
            username={parent.state.omegaUsername}
            handleSubmit={parent.handleOmegaLogInSubmit}
            handleChange={parent.handleOmegaInputChange}
            areDetailsCorrect={parent.state.omegaDetailsAreCorrect}
        />
    )
}

export default OmegaLogInView