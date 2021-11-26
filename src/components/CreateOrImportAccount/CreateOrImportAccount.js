import styles from './CreateOrImportAccount.module.css'
import {useState} from 'react'
const CreateOrImportAccount = () => {
  const Status = {
    INTRO: 'intro',
    IMPORT_ACCOUNT: 'import account',
    CREATE_ACCOUNT: 'create account'
  }
  let [status, setStatus] =  useState(Status.INTRO)
  
  return (
    <div className={styles.container}>
      <section className="subscribe">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="row">
                        <div className={status===Status.INTRO? '': styles.hide}>
                          <div className="col-md-12">
                              <div className="heading pointer">
                                  <h2>No default account detected.</h2>
                                  <br />
                                  <p>To proceed, pick one of the options below</p>
                              </div>
                          </div>
                          <div className="col-12">
                            <button className={`btn btn-primary ${styles.spacing}`} onClick={() => setStatus(Status.IMPORT_ACCOUNT)} >
                              Import Existing Account 
                            </button>
                            <button className={`btn btn-primary ${styles.spacing}`} onClick={() => setStatus(Status.CREATE_ACCOUNT)}>
                              Create New Account
                            </button>
                          </div>
                        </div>
                        
                        <div className={`col-md-12 ` + status===Status.IMPORT_ACCOUNT? '' : styles.hide}>
                            <form className="row form" style={{display: "flex", justifyContent: "center"}} >
                                <div className="col-lg-7 col-md-8 col-sm-12 form-group">
                                    <textarea className={`${styles.textarea}`} placeholder="Enter account mnemonic key phrases.">

                                    </textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary">Import Account</button>
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

export default CreateOrImportAccount