import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './style/signin.module.css'

class Signin extends Component {
    state = {  } 
    render() { 
        return (
            <div className={styles.background}>
                <div className={styles.container}>
                    <h1 className={styles.sgntx}>Sign in</h1>
                    <input className={styles.inpemail} placeholder="Enter email here" />
                    <input className={styles.inppssw} placeholder="Enter password here" />
                    <button className={styles.sgnbtn} type='button'>Sign in</button>

                </div>
            </div>
        );
    }
}
 
export default Signin;