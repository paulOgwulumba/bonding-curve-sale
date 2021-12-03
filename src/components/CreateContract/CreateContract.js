import React from 'react'
import styles from './CreateContract.module.css'
import { useEffect, useState } from 'react'

const CreateContract = ({ parent }) => {
  const [balance, setBalance] = useState(0)
  

  useEffect(() => {
    const getTokenBalance = async () => {
      let balance = await parent.state.reach.balanceOf(parent.state.account);
      return parent.state.reach.formatCurrency(balance, 6)
    }

    const doing = async () => {
      let bal = await getTokenBalance()
      setBalance(bal)
    }

    doing()
  }, [parent.state.reach, parent.state.account])

  return (
    <div className={styles.container}>
      <section className="subscribe">
        <section className="section-1">
          <div className="jumbotron d-flex align-items-center">
              <div className="gradient"></div>
              <div className="container content">
                  <h1>Daara Token</h1>
                  <h2 className="text-center">Create new contract.</h2>
                  <div className={`${styles.informationDiv}`}>
                    <p className={`${styles.title}`} style={{color: "rgba(0, 0, 0, 0.7)"}}>
                      Your Public Address
                    </p>
                    <p className={`${styles.info}`}>
                      {parent.state.account.getAddress ? parent.state.account.getAddress() : ''}
                    </p>
                  </div>
                  <div className={`${styles.informationDiv}`}>
                    <p className={`${styles.title}`} style={{color: "rgba(0, 0, 0, 0.7)"}}>
                      Your Token Balance
                    </p>
                    <p className={`${styles.info}`}>
                      {balance}
                    </p>
                  </div>
                  <p className="text-center" style={{marginTop: "20px"}}>
                    <button className="btn btn-default" onClick={() => parent.createContract()}>
                      Create Contract
                    </button>
                  </p>
              </div>                                                   
          </div>
        </section> 
      </section>

      
    </div>
  )
}

export default CreateContract