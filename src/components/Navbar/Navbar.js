import React from 'react'
import styles from './Navbar.module.css'
import {useEffect, useState} from 'react'

const Navbar = ({ canLogOut, handleLogOut }) => {
    const [additionalClass, setClass] = useState(styles.hide)

    useEffect(() => {
      setClass(canLogOut? '' : styles.hide)
      console.log(additionalClass)
    }, [canLogOut])
    console.log(canLogOut)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark teal" id="myHeader">
          
            <div className="container">
                <a className="navbar-brand " href="index.html">
                    <span className="logo-text">D<small>aara Token</small></span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item ${additionalClass}`}>
                            <button className={styles.btn} onClick={handleLogOut} >Log Out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

