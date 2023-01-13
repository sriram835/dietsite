import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css' 
import './style/feedback.css';

class Feed extends Component {
    render() { 
        return (
            <div className='fbdiv'>
                <h3 className='fbh3'>Feedback</h3>
                <hr className='fbhr'/>
                
            </div>
        );
    }
}
 
export default Feed;
