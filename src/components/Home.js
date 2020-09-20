import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';

import RecieveIcon from './images/recieve.png'
import SendIcon from './images/send.png'

class Home extends Component{
    render(){
    return(
        <div className="center black">
            <h1 className="red-text text-accent-1">Home</h1>
            <div className="col">
                <div className="col s12 m6 l14">
                <NavLink to="/SendOption">
                    <img src={SendIcon} alt="The send button"></img>
                </NavLink>
                </div>
                <div className="col s12 m6 l14">
                <NavLink to="/RecieveOption">
                    <img src={RecieveIcon} alt="The recieve button"></img>
                </NavLink>
                </div>
            </div>
        </div>
        
    )
    }
}

export default Home