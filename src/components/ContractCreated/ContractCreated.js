import React from 'react'
import styles from './ContractCreated.module.css'
import { useEffect, useState } from 'react'

const ContractCreated = ({ parent }) => {
  const [address, setAddress] = useState("0x")
  
  useEffect(() => {
    if(parent.state.contract) {
      parent.state.contract.getInfo().then((info) => {
        setAddress(JSON.stringify(info))
      })
      .catch((err) => console.log(err))
    }
    
  })

  return (
    <div className={styles.container}>
      <section className="subscribe">
        <section className="section-1">
          <div className="jumbotron d-flex align-items-center">
              <div className="gradient"></div>
              <div className="container content">
                  <h1>Daara Token</h1>
                  <h2 className="text-center">Contract Created Successfully.</h2>
                  <p>Below are the details of the contract.</p>

                  <div className={`${styles.informationDiv}`}>
                    <p className={`${styles.title}`} style={{color: "rgba(0, 0, 0, 0.7)"}}>
                      Contract Address
                    </p>
                    <p className={`${styles.info}`}>
                      {address}
                    </p>
                  </div>

                  <div className={`${styles.informationDiv}`}>
                    <p className={`${styles.title}`} style={{color: "rgba(0, 0, 0, 0.7)"}}>
                      Daara Token Current Supply
                    </p>
                    <p className={`${styles.info}`}>
                      {parent.formatCurrency(parent.state.supply) || 0}
                    </p>
                  </div>

                  <div className={`${styles.informationDiv}`}>
                    <p className={`${styles.title}`} style={{color: "rgba(0, 0, 0, 0.7)"}}>
                      Daara Token Current Price
                    </p>
                    <p className={`${styles.info}`}>
                      {(parent.state.price)}
                    </p>
                  </div>
              </div>                                                   
          </div>
        </section> 
      </section>
    </div>
  )
}

export default ContractCreated