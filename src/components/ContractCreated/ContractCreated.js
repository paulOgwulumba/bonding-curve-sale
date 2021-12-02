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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-12">
                  <div className="heading pointer" style={{ padding: '2rem' }}>
                    <h2>CONTRACT INFORMATION</h2>
                    <br />
                    <p><b>Contract Address:</b> <br /> {address}</p>
                    <p>
                      <b>Token Supply:</b> <br />
                      {parent.formatCurrency(parent.state.supply) || 0}
                    </p>
                    <p>
                      <b>Token Current Price:</b> <br />
                      {(parent.state.price)}
                    </p>
                  </div>
                </div>
                <div className="col-12">
                  
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