import React from 'react'
import styles from './CreateContract.module.css'
import { useEffect, useState } from 'react'

const ContractCreated = ({ parent }) => {
  const [balance, setBalance] = useState(0)
  const getTokenBalance = async () => {
    let balance = await parent.state.reach.balanceOf(parent.state.account);
    return parent.state.reach.formatCurrency(balance, 6)
  }

  useEffect(async () => {
    let bal = await getTokenBalance()
    setBalance(bal)
  })

  return (
    <div className={styles.container}>
      <section className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-12">
                  <div className="heading pointer" style={{ padding: '2rem' }}>
                    <h2>CREATE NEW CONTRACT</h2>
                    <br />
                    <p><b>Your Public Address:</b> <br /> {parent.state.account.getAddress ? parent.state.account.getAddress() : ''}</p>
                    <p>
                      <b>Your Token Balance:</b> <br />
                      {balance}
                    </p>
                  </div>
                </div>
                <div className="col-12">
                  <button className={`btn btn-primary ${styles.spacing}`} onClick={() => parent.createContract()}>
                    Create Contract
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ContractCreated