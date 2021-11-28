import styles from './CreateOrImportAccount.module.css'
import { useState } from 'react'
import Loader from '../Loader/Loader'
import { Provider } from '../../utils/constants'
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

  const handleImportAccount = async (mnemonic, event) => {
    event.preventDefault()
    try {
      const acc = await props.parent.state.reach.newAccountFromMnemonic(mnemonic)

      // check balance of account before funding
      let balanceOfAcc = await props.parent.state.reach.balanceOf(acc)
      console.log("Checking the balance of our imported account")
      console.log(props.parent.state.reach.formatCurrency(balanceOfAcc, 6))

      // check if account can be funded from faucet
      // console.log("Checking if account can be funded from faucet.")
      // const canFundFromFaucet = await props.parent.state.reach.canFundFromFaucet()

      // if (canFundFromFaucet) {
      //   console.log("Account can be funded from faucet.")

      //   // get faucet information
      //   console.log("Getting faucet information")
      //   const faucet = await props.parent.state.reach.getFaucet()
      //   console.log("Faucet information gotten successfuly")

      //   console.log("getting the balance of our faucet before funding")
      //   let balanceOfFaucet = await props.parent.state.reach.balanceOf(faucet)
      //   console.log(props.parent.state.reach.formatCurrency(balanceOfFaucet, 6))

      //   // funding our account
      //   console.log("Funding our imported account.")
      //   await props.parent.state.reach.fundFromFaucet(acc, props.parent.state.reach.parseCurrency(3))
      //   console.log("Done funding our imported account")

      //   // check balance of account before funding
      //   console.log("Checking the balance of our imported account after funding")
      //   balanceOfAcc = await props.parent.state.reach.balanceOf(acc)
      //   console.log(props.parent.state.reach.formatCurrency(balanceOfAcc, 6))

      //   // check balance of faucet after funding
      //   console.log("getting the balance of our faucet after funding")
      //   balanceOfFaucet = await props.parent.state.reach.balanceOf(faucet)
      //   console.log(props.parent.state.reach.formatCurrency(balanceOfFaucet, 6))

      // } else {
      //   console.log("Cannot fund from faucet")
      // }

      setMnemonicIsValid(true)
      setIsImportSuccessful(true)
      setTimeout(() => {
        props.parent.addAccount(acc)
      }, 3000)
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
      console.log(props.parent.state.reach)

      // check balance of given Account
      let balanceOfAcc = await props.parent.state.reach.balanceOf(acc)
      console.log("Checking the balance of our new account")
      console.log(props.parent.state.reach.formatCurrency(balanceOfAcc, 6))

      // check if account can be funded from faucet
      const canFundFromFaucet = await props.parent.state.reach.canFundFromFaucet()

      // get faucet information
      const faucet = await props.parent.state.reach.getFaucet()
      console.log("Faucet gotten successfuly")
      console.log(faucet)

      let balanceOfFaucet = await props.parent.state.reach.balanceOf(faucet)
      console.log("getting the balance of our faucet")
      console.log(props.parent.state.reach.formatCurrency(balanceOfFaucet, 6))

      if (canFundFromFaucet) {
        console.log('Account can be funded from faucet')
        // await props.parent.state.reach.fundFromFaucet(acc, props.parent.state.reach.parseCurrency(0.5))
      }

      // check balance of given Account after funding
      balanceOfAcc = await props.parent.state.reach.balanceOf(acc)
      console.log("Checking the balance of our new account after funding")
      console.log(props.parent.state.reach.formatCurrency(balanceOfAcc, 6))

      // check balance of faucet after funding
      balanceOfFaucet = await props.parent.state.reach.balanceOf(faucet)
      console.log("getting the balance of our faucet after funding")
      console.log(props.parent.state.reach.formatCurrency(balanceOfFaucet, 6))

      // Set this account as the global account
      setAccount(acc)
      console.log(acc)

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

  return (
    <>
      <div className={`${styles.container} ${status === Status.LOADING ? styles.hide : ''}`}>
        <section className="subscribe">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className={status === Status.INTRO ? '' : styles.hide}>
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
                  </div>

                  <div className={status === Status.CREATE_ACCOUNT ? '' : styles.hide}>
                    <div className="col-md-12">
                      <div className="heading pointer" style={{ padding: '2rem' }}>
                        <h2>New Account Created Successfully!</h2>
                        <br />
                        <p><b>Public Address:</b> <br /> {account.getAddress ? account.getAddress() : ''}</p>
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
      <div className={status == Status.LOADING ? '' : styles.hide}>
        <Loader isLoading={true} />
      </div>
    </>
  )
}



export default CreateOrImportAccount