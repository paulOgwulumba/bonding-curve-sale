import React, {useState, useEffect} from 'react'
import styles from './BuyToken.module.css'

const BuyToken = ({parent, grandparent}) => {
  const [balanceOfALG, setBalanceOfALG] = useState(0)
  const [supply, setSupply] = useState(0)
  const [price, setPrice] = useState(0)


  useEffect(() => {
    const getTokenBalance = async () => {
      const getBal = async () => {
        return await grandparent.state.reach.balanceOf(grandparent.state.account);
      }
      let balance = await getBal()
      return grandparent.state.reach.formatCurrency(balance, 6)
    }

    const doing = async () => {
      let bal = await getTokenBalance()
      setBalanceOfALG(bal)
    }
    doing()

    setSupply(grandparent.state.supply)
    setPrice(grandparent.state.price)
  }, [ grandparent.state.supply, grandparent.state.price, grandparent.state.reach, grandparent.state.account])
  return (
    <div className={styles.container}>
      <section className="subscribe">
        <section className="section-1">
          <div className="jumbotron d-flex align-items-center">
              <div className="gradient"></div>
              <div className="container content">
                  <h1>Daara Token</h1>
                  <h2 className="text-center">Purchase Daara Tokens</h2>
                  <p>Select the number of DAR you want to buy or the corresponding cost in ALG and click on buy to complete the transaction. </p>

                  <div className={`${styles.informationDiv}`}>
                    <p className={`${styles.title}`} style={{color: "rgba(0, 0, 0, 0.7)"}}>
                      Your ALG Balance
                    </p>
                    <p className={`${styles.info}`}>
                      {balanceOfALG}
                    </p>
                  </div>

                  <div className={`${styles.informationDiv}`}>
                    <p className={`${styles.title}`} style={{color: "rgba(0, 0, 0, 0.7)"}}>
                      Daara Token Current Supply
                    </p>
                    <p className={`${styles.info}`}>
                      {grandparent.formatCurrency(supply)}
                    </p>
                  </div>

                  <div className={`${styles.informationDiv}`}>
                    <p className={`${styles.title}`} style={{color: "rgba(0, 0, 0, 0.7)"}}>
                      Daara Token Current Price
                    </p>
                    <p className={`${styles.info}`}>
                      {price}
                    </p>
                  </div>

                  <form className={`row ${styles.form}`} onSubmit={grandparent.buyToken}>
                    <div className={styles.formGroup}>
                      <label>Number of DAR Tokens</label>
                      <input
                          type="number"
                          placeholder="How many DAR Tokens do you want to buy?"
                          min="0"
                          max={grandparent.state.supply}
                          step="0.0001"
                          value={grandparent.state.numberOfTokens}
                          onChange={grandparent.handleNormalUserInputChange}
                          required                                             
                          name="numberOfTokens" 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Total Cost in ALG</label>
                      <input
                        type="number"
                        placeholder="Cost in ALG"
                        min="0.0001"
                        max={balanceOfALG}
                        step="0.01"
                        value={grandparent.state.priceOfTokens}
                        onChange={grandparent.handleNormalUserInputChange}
                        required                                             
                        name="priceOfTokens"
                      />
                    </div>
                    <p className="text-center" style={{width: "100%", marginTop: "20px"}}>
                      <button className="btn btn-success" >
                        Buy
                      </button>
                    </p>
                  </form>
              </div>                                                   
          </div>
        </section> 
      </section>
    </div>
  )
}

export default BuyToken