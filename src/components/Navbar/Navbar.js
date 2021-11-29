import React from 'react'
import styles from './Navbar.module.css'

const Navbar = ({ canLogOut, handleLogOut }) => {
    const additionalClass = canLogOut ? '' : styles.hide
    return (
        <nav className="navbar navbar-expand-lg navbar-dark teal" id="myHeader">
            <div className="container">
                <a className="navbar-brand " href="index.html">
                    <span className="logo-text">D<small>aara Coin</small></span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className={"nav-item " + additionalClass}>
                            <a className={"nav-link "} onClick={handleLogOut} >Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

