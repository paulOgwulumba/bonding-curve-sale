import React from 'react'
import styles from './CreateOrImportAccount.module.css'
import { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'

const CreateOrImportAccount = (props) => {
  const Status = {
    INTRO: 'intro',
    IMPORT_ACCOUNT: 'import account',
    CREATE_ACCOUNT: 'create account',
    LOADING: 'loading'
  }
  let [status, setStatus] = useState(Status.INTRO)
  let [mnemonic, setMnemonic] = useState('')
  let [mnemonicIsValid, setMnemonicIsValid] = useState(true)
  let [isImportSuccessful, setIsImportSuccessful] = useState(false)
  let [account, setAccount] = useState({})
  let [addr, setAddr] =  useState('')

  const handleImportAccount = async (mnemonic, event) => {
    event.preventDefault()
    try {
      const acc = await props.parent.state.reach.newAccountFromMnemonic(mnemonic)

      // check balance of account before funding
      let balanceOfAcc = await props.parent.state.reach.balanceOf(acc)
      console.log("Checking the balance of our imported account")
      console.log(props.parent.state.reach.formatCurrency(balanceOfAcc, 6))

      // check if account can be funded from faucet
      console.log("Checking if account can be funded from faucet.")
      const canFundFromFaucet = await props.parent.state.reach.canFundFromFaucet()

      if (canFundFromFaucet) {
        console.log("Account can be funded from faucet.")

        // get faucet information
        console.log("Getting faucet information")
        const faucet = await props.parent.state.reach.getFaucet()
        console.log("Faucet information gotten successfuly")

        console.log("getting the balance of our faucet before funding")
        let balanceOfFaucet = await props.parent.state.reach.balanceOf(faucet)
        let ballerina = props.parent.state.reach.formatCurrency(balanceOfFaucet, 6)
        console.log(props.parent.state.reach.formatCurrency(balanceOfFaucet, 6))

        // funding our account
        console.log("Funding our imported account. with " + (ballerina - 0.5))
        await props.parent.state.reach.fundFromFaucet(acc, props.parent.state.reach.parseCurrency(ballerina - 0.5))
        console.log("Done funding our imported account")

        // check balance of account before funding
        console.log("Checking the balance of our imported account after funding")
        balanceOfAcc = await props.parent.state.reach.balanceOf(acc)
        console.log(props.parent.state.reach.formatCurrency(balanceOfAcc, 6))

        // check balance of faucet after funding
        console.log("getting the balance of our faucet after funding")
        balanceOfFaucet = await props.parent.state.reach.balanceOf(faucet)
        console.log(props.parent.state.reach.formatCurrency(balanceOfFaucet, 6))

      } else {
        console.log("Cannot fund from faucet")
      }

      setMnemonicIsValid(true)
      setIsImportSuccessful(true)
      setTimeout(() => {
        props.parent.addAccount(acc, true)
      }, 1000)
    }
    catch (err) {
      setMnemonicIsValid(false)
    }
  }

  const createNewAccount = async () => {
    setStatus(Status.LOADING);
    try {
      // Create New Account
      const acc = await props.parent.state.reach.createAccount();

      // check balance of given Account
      let balanceOfAcc = await props.parent.state.reach.balanceOf(acc)
      console.log("Checking the balance of our new account")
      console.log(props.parent.state.reach.formatCurrency(balanceOfAcc, 6))

      // check if account can be funded from faucet
      const canFundFromFaucet = await props.parent.state.reach.canFundFromFaucet()

      if (canFundFromFaucet) {
        console.log("Account can be funded from faucet.")

        // get faucet information
        console.log("Getting faucet information")
        const faucet = await props.parent.state.reach.getFaucet()
        console.log("Faucet information gotten successfuly")

        console.log("getting the balance of our faucet before funding")
        let balanceOfFaucet = await props.parent.state.reach.balanceOf(faucet)
        let ballerina = props.parent.state.reach.formatCurrency(balanceOfFaucet, 6)
        console.log(props.parent.state.reach.formatCurrency(balanceOfFaucet, 6))

        // funding our account
        console.log("Funding our imported account. with " + (ballerina - 0.5))
        await props.parent.state.reach.fundFromFaucet(acc, props.parent.state.reach.parseCurrency(ballerina - 0.5))
        console.log("Done funding our imported account")

        // check balance of account before funding
        console.log("Checking the balance of our imported account after funding")
        balanceOfAcc = await props.parent.state.reach.balanceOf(acc)
        console.log(props.parent.state.reach.formatCurrency(balanceOfAcc, 6))

        // check balance of faucet after funding
        console.log("getting the balance of our faucet after funding")
        balanceOfFaucet = await props.parent.state.reach.balanceOf(faucet)
        console.log(props.parent.state.reach.formatCurrency(balanceOfFaucet, 6))

      } else {
        console.log("Cannot fund from faucet")
      }

      // Set this account as the global account
      setAccount(acc)

      setAddr(acc.getAddress())

      // update global state
      setTimeout(() => {
        setStatus(Status.CREATE_ACCOUNT);
      }, 2000)
    } catch (error) {
      console.log(error)
      alert('Something went wrong. Please try again later');
      setStatus(Status.INTRO)
    }
  }

  useEffect(() => {
    if(props.parent.state.account && !props.parent.state.connectedWithMnemonic) {
      setStatus(Status.CREATE_ACCOUNT)
      setAccount(props.parent.state.account)
      setAddr(props.parent.state.account.getAddress())
      console.log('We here')
    }
  }, [props.parent.state.connectedWithMnemonic, props.parent.state.account, Status.CREATE_ACCOUNT])

  return (
    <>
      <div className={`${styles.container} ${status === Status.LOADING ? styles.hide : ''}`}>
        <section className="subscribe">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className={status === Status.INTRO ? '' : styles.hide}>                   
                    <section className="section-1">
                        <div className="jumbotron d-flex align-items-center">
                            <div className="gradient"></div>
                            <div className="container content">
                                <h1>Daara Token</h1>
                                <h2 className="text-center">No default account detected!</h2>
                                <p>
                                  No account was found connected to your browser. Pick one of the options below to either import an existing account or create a new one.
                                  <br/>
                                  <small className="text-warning">For better experience, import an existing account.*</small>
                                </p>
                                <p className="text-center" style={{width: "100%"}}>
                                  <button className="btn btn-success" onClick={() => setStatus(Status.IMPORT_ACCOUNT)}>
                                    Import Account
                                  </button>
                                  <button className="btn btn-default" onClick={createNewAccount}>
                                    Create Account
                                  </button>
                                </p>
                            </div>                                                   
                        </div>
                    </section>
                  </div>

                  <div className={`col-md-12 ${status === Status.IMPORT_ACCOUNT ? '' : styles.hide}`}>

                    <form className="row form" style={{ display: "flex", justifyContent: "center" }} onSubmit={(event) => handleImportAccount(mnemonic, event)}>
                      <p className={`col-12`}><strong>Import Existing Account</strong></p> <br />
                      <p className={`col-12 text-danger ${mnemonicIsValid ? styles.hide : ''}`}>This mnemonic key does not exist. Check again and re-enter.</p>
                      <p className={`col-12 text-success ${isImportSuccessful ? '' : styles.hide}`}>Account imported successfully.</p>
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

                    <section className="section-1">
                        <div className="jumbotron d-flex align-items-center">
                            <div className="gradient"></div>
                            <div className="container content">
                                <h1>Daara Token</h1>
                                <h2 className="text-center">Import Existing Acount</h2>
                                <p>
                                  <small className="text-warning">For better experience, import an existing account.*</small>
                                </p>
                                <p className="text-center" style={{width: "100%"}}>
                                  <button className="btn btn-success" onClick={() => setStatus(Status.IMPORT_ACCOUNT)}>
                                    Import Account
                                  </button>
                                  <button className="btn btn-default" onClick={createNewAccount}>
                                    Create Account
                                  </button>
                                </p>
                            </div>                                                   
                        </div>
                    </section>
                  </div>

                  <div className={status === Status.CREATE_ACCOUNT ? '' : styles.hide}>
                    <div className="col-md-12">
                      <div className="heading pointer" style={{ padding: '2rem' }}>
                        <h2>New Account Created Successfully!</h2>
                        <br />
                        <p><b>Public Address:</b> <br /> {addr}</p>
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
      <div className={status === Status.LOADING ? '' : styles.hide}>
        <Loader isLoading={true} />
      </div>
    </>
  )
}



export default CreateOrImportAccount