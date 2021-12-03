import React from 'react'
import styles from './OmegaUserLogIn.module.css'

const OmegaUserLogIn = (props) => {
    const extraClass = props.areDetailsCorrect ? styles.hide : ''
    return (
        <div className={styles.container}>
            <section className="subscribe">
                <div className="">
                    <div className="row">
                        <div className="col-md-12">
                            <section className="section-1">
                              <div className="jumbotron d-flex align-items-center">
                                  <div className="gradient"></div>
                                  <div className="container content">
                                      <h1>Daara Token</h1>
                                      <h2 className="text-center">Welcome, Omega User.</h2>
                                      <p>
                                        To proceed with creating a new contract, enter the correct details.
                                        <br/>
                                      </p>
                                      <p className="text-center">
                                        <small className={`text-danger ${extraClass}`}>Invalid details. Please enter correct details.*</small>
                                      </p>
                                      <form className="row" style={{ display: "flex", justifyContent: "center" }} onSubmit={props.handleSubmit}>
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
                                        <p className="text-center" style={{width: "100%"}}>
                                          <button className="btn btn-success" >
                                            Submit
                                          </button>
                                        </p>
                                      </form>
                                      
                                  </div>                                                   
                              </div>
                          </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OmegaUserLogIn
