import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './style/login.module.css';

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div className={styles.background}>
                <div className={styles.container}>
                    <h1 className={styles.lgntx}>Log in</h1>
                    <input className={styles.inpemail} placeholder="Enter email here" />
                    <input className={styles.inppssw} placeholder="Enter password here" />
                    <button className={styles.lgnbtn} type='button' >Log in</button>
                </div>
            </div>
        );
    }
}
 
export default Login;