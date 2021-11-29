import React from 'react'
import styles from './OmegaUserLogIn.module.css'

const OmegaUserLogIn = (props) => {
    const extraClass = props.areDetailsCorrect ? styles.hide : ''
    return (
        <div className={styles.container}>
            <section className="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading pointer">
                                        <h2>Welcome, Omega User.</h2>
                                        <br />
                                        <p>
                                            To proceed with creating a new contract, enter the correct details.
                                        </p>
                                        <small className={`text-danger ${extraClass}`}>Invalid details. Please enter correct details.*</small>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <form className="row form" style={{ display: "flex", justifyContent: "center" }} onSubmit={props.handleSubmit}>
                                        <div className="col-lg-7 col-md-8 col-sm-12 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter verified username"
                                                required
                                                onChange={props.handleChange}
                                                name="omegaUsername"
                                                value={props.username}
                                            />
                                        </div>
                                        <div className="col-lg-7 col-md-8 col-sm-12 form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter correct passcode"
                                                required
                                                onChange={props.handleChange}
                                                name="omegaPassword"
                                                value={props.password}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary">Create Contract</button>
                                        </div>
                                        <div className="col-md-1 sub-hidden"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OmegaUserLogIn
