import React, {useState, useEffect} from 'react'
import styles from './BuyToken.module.css'

const BuyToken = ({parent, grandparent}) => {
  const [balanceOfALG, setBalanceOfALG] = useState(0)
  const [supply, setSupply] = useState(0)
  const [price, setPrice] = useState(0)

  const getTokenBalance = async () => {
    let balance = await grandparent.state.reach.balanceOf(grandparent.state.account);
    return grandparent.state.reach.formatCurrency(balance, 6)
  }

  useEffect(async () => {
    const doing = async () => {
      let bal = await getTokenBalance()
      setBalanceOfALG(bal)
    }
    doing()

    setSupply(grandparent.state.supply)
    setPrice(grandparent.state.price)
  }, [getTokenBalance])
  return (
    <div className={styles.container}>
            <section className="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading pointer">
                                        <h2>Buy Daara Coin</h2>
                                        <br />
                                        <p>
                                            Select amount you want and click on buy.
                                        </p>
                                        <small className={`text-danger`}>Invalid details. Please enter correct details.*</small>
                                    </div>
                                </div>
                                <div className="col-md-12" onSubmit={grandparent.buyToken}>
                                    <form className="row form" style={{ display: "flex", justifyContent: "center" }}>
                                        <label className="col-lg-7 col-md-8 col-sm-12 form-group">
                                          Your ALG Balance: <span className={styles.info}>{balanceOfALG}</span>
                                        </label>

                                        <label className="col-lg-7 col-md-8 col-sm-12 form-group">
                                          Daara Token Supply: <span className={styles.info}>{grandparent.formatCurrency(supply)}</span>
                                        </label>

                                        <label className="col-lg-7 col-md-8 col-sm-12 form-group">
                                          Daara Token Current Price: <span className={styles.info}>{price}</span>
                                        </label>
                                        
                                        <div className="col-lg-7 col-md-8 col-sm-12 form-group">
                                            <label>Number of Daara Tokens</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="How many DRA Tokens do you want to buy?"
                                                min="0"
                                                max={grandparent.state.supply}
                                                step="0.0001"
                                                value={grandparent.state.numberOfTokens}
                                                onChange={grandparent.handleNormalUserInputChange}
                                                required                                             
                                                name="numberOfTokens" 
                                            />
                                        </div>
                                        <div className="col-lg-7 col-md-8 col-sm-12 form-group">
                                            <label>Cost in ALG</label>
                                            <input
                                                type="number"
                                                className="form-control"
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
                                        <div className="col-12">
                                            <button className="btn btn-primary">Buy</button>
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

export default BuyToken