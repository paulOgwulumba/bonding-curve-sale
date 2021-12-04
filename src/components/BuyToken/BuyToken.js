import React, { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import styles from './BuyToken.module.css'

const BuyToken = ({ parent, grandparent }) => {
  const [balanceOfALG, setBalanceOfALG] = useState(0)
  const [supply, setSupply] = useState(0)
  const [price, setPrice] = useState(0)


  useEffect(() => {
    const getTokenBalance = async () => {
      // Gets balance of users network tokens
      const getBal = async () => {
        return await grandparent.state.reach.balanceOf(grandparent.state.account);
      }
      const getSupply = async () => {
        // let unparsedSupply = grandparent.state.token ?
        //   await grandparent.state.reach.balanceOf(grandparent.state.contract, grandparent.state.token) :
        //   grandparent.state.supply;
        let unparsedSupply = grandparent.state.supply
        return unparsedSupply
      }

      let balance = await getBal()

      let sup = await getSupply()
      return [grandparent.formatCurrency(balance), grandparent.formatCurrency(sup)]
    }

    const doing = async () => {
      let [bal, sup] = await getTokenBalance()
      setBalanceOfALG(bal)
      setSupply(sup)
    }
    doing()

    setPrice(grandparent.state.price)
  }, [grandparent, grandparent.state.supply, grandparent.state.price, grandparent.state.reach, grandparent.state.account, grandparent.state.token])

  return (
    <>
      <div className={styles.container}>
        <section className="subscribe">
          <div className={parseInt(supply) === 0 && parseInt(price) === 0 ? styles.overlay : ''}></div>
          <section className="section-1">
            <div className="jumbotron d-flex align-items-center">
              <div className="gradient"></div>
              <div className="container content">
                <h1>Daara Token</h1>
                <h2 className="text-center">Purchase Daara Tokens</h2>
                <p>Select the number of DAR you want to buy or the corresponding cost in ALG and click on buy to complete the transaction. </p>

                <div className={`${styles.informationDiv}`}>
                  <p className={`${styles.title}`} style={{ color: "rgba(0, 0, 0, 0.7)" }}>
                    Your ALG Balance
                  </p>
                  <p className={`${styles.info}`}>
                    {balanceOfALG}
                  </p>
                </div>

                <div className={`${styles.informationDiv}`}>
                  <p className={`${styles.title}`} style={{ color: "rgba(0, 0, 0, 0.7)" }}>
                    Daara Token Current Supply
                  </p>
                  <p className={`${styles.info}`}>
                    {(supply) * 1000000}
                  </p>
                </div>

                <div className={`${styles.informationDiv}`}>
                  <p className={`${styles.title}`} style={{ color: "rgba(0, 0, 0, 0.7)" }}>
                    Daara Token Current Price
                  </p>
                  <p className={`${styles.info}`}>
                    {price}
                  </p>
                </div>

                <form className={`row ${styles.form}`} onSubmit={(event) => grandparent.buyToken(event, balanceOfALG)}>
                  <div className={styles.formGroup}>
                    <label>Number of DAR Tokens</label>
                    <input
                      type="number"
                      placeholder="How many DAR Tokens do you want to buy?"



                      value={grandparent.state.numberOfTokens}
                      onChange={(event) => grandparent.handleNormalUserInputChange(event, balanceOfALG)}
                      required
                      name="numberOfTokens"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Total Cost in ALG</label>
                    <input
                      type="number"
                      placeholder="Cost in ALG"
                      disabled={true}


                      value={grandparent.state.priceOfTokens}
                      onChange={(event) => grandparent.handleNormalUserInputChange(event, balanceOfALG)}
                      required
                      name="priceOfTokens"
                    />
                  </div>
                  <p className="text-center" style={{ width: "100%", marginTop: "20px" }}>
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

      <Loader isLoading={
        parseInt(supply) === 0 & parseInt(price) === 0 ? true : false
      } />
    </>
  )
}

export default BuyToken