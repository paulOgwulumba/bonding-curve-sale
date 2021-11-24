import styles from './css/OmegaUser.module.css'

const OmegaUser = (props) => {
    return (
        <div className={styles.container}>
            <section class="subscribe">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="heading">
                                        <h2>Welcome, Omega User.</h2>
                                        <br />
                                        <p>
                                            To proceed with creating a new contract, enter the correct details.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <form class="row form" style={{display: "flex", justifyContent: "center"}}>
                                        <div class="col-lg-7 col-md-8 col-sm-12 form-group">
                                            <input type="text" class="form-control" placeholder="Enter verified username" required/>
                                        </div>
                                        <div class="col-lg-7 col-md-8 col-sm-12 form-group">
                                            <input type="password" class="form-control" placeholder="Enter correct passcode" required/>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-primary">Create Contract</button>
                                        </div>
                                        <div class="col-md-1 sub-hidden"></div>
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

export default OmegaUser