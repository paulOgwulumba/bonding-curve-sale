import styles from './CreateOrImportAccount.module.css'
import {useState} from 'react'
import Loader from '../Loader/Loader'
const CreateOrImportAccount = (props) => {
  const Status = {
    INTRO: 'intro',
    IMPORT_ACCOUNT: 'import account',
    CREATE_ACCOUNT: 'create account',
    LOADING: 'loading'
  }
  let [status, setStatus] =  useState(Status.INTRO)
  let [mnemonic, setMnemonic] = useState('')
  let [mnemonicIsValid, setMnemonicIsValid] = useState(true)
  let [isImportSuccessful, setIsImportSuccessful] = useState(false)
  let [account, setAccount] = useState({})
  
  const handleImportAccount = async (mnemonic, event) => {
    event.preventDefault()
    try{
      const acc = await props.parent.state.reach.newAccountFromMnemonic(mnemonic)
      setMnemonicIsValid(true)
      setIsImportSuccessful(true)
      setTimeout(() => {
        props.parent.addAccount(acc)
      }, 3000)
    }
    catch(err) {
      setMnemonicIsValid(false)
    }
  }

  const createNewAccount = async () => {
    setStatus(Status.LOADING);
    try{
      const acc = await props.parent.state.reach.createAccount();
      setAccount(acc)
      console.log(acc)
      setTimeout(() => {
        setStatus(Status.CREATE_ACCOUNT);
      }, 2000)
    } catch(error) {
      alert('Something went wrong. Please try again later');
      setStatus(Status.INTRO)
    }
  }

  return (
    <>
    <div className={`${styles.container} ${status === Status.LOADING? styles.hide: ''}`}>
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
                            <button className={`btn btn-primary ${styles.spacing}`} onClick={createNewAccount}>
                              Create New Account
                            </button>
                          </div>
                        </div>
                        
                        <div className={`col-md-12 ${status===Status.IMPORT_ACCOUNT? '' : styles.hide}`}>
                            
                            <form className="row form" style={{display: "flex", justifyContent: "center"}} onSubmit={(event) => handleImportAccount(mnemonic, event)}>
                                <p className={`col-12`}><strong>Import Existing Account</strong></p> <br/>
                                <p className={`col-12 text-danger ${mnemonicIsValid? styles.hide: ''}`}>This mnemonic key does not exist. Check again and re-enter.</p>
                                <p className={`col-12 text-success ${isImportSuccessful? '':styles.hide}`}>Account imported successfully.</p>
                                <div className="col-lg-7 col-md-8 col-sm-12 form-group">
                                    <textarea 
                                      className={`${styles.textarea}`} 
                                      placeholder="Enter account mnemonic key phrases." 
                                      required 
                                      value={mnemonic}
                                      onChange={(event) => {
                                        setMnemonic(event.target.value); 
                                        setMnemonicIsValid(true)
                                      }}
                                      >

                                    </textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary">Import Account</button>
                                </div>
                                <div className="col-md-1 sub-hidden"></div>
                            </form>
                        </div>

                        <div className={status===Status.CREATE_ACCOUNT? '': styles.hide}>
                          <div className="col-md-12">
                              <div className="heading pointer" style={{padding: '2rem'}}>
                                  <h2>New Account Created Successfully!</h2>
                                  <br />
                                  <p><b>Public Address:</b> <br/> {account.getAddress? account.getAddress() : ''}</p>
                              </div>
                          </div>
                          <div className="col-12">
                            <button className={`btn btn-primary ${styles.spacing}`} onClick={() => props.parent.addAccount(account)}>
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
    <div className={status == Status.LOADING? '' : styles.hide}>
      <Loader isLoading={true}/>
    </div>
    </>
  )
}



export default CreateOrImportAccount