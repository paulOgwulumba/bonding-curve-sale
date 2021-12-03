import React from 'react'
import styles from './Loader.module.css'
const Loader = (props) => {
    const style = props.isLoading ? styles.holder : styles.hide;
    return (
        <div className={style}>
            <div className={styles.box}>
                <div className={styles.container}>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                    <span className={styles.circle}></span>
                </div>
            </div>
            <div className={styles.overlay}>

            </div>
        </div>
    )
}

export default Loader;