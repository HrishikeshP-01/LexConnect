import React from 'react'
import {NavLink} from 'react-router-dom'
import LinkIcon from './images/LinkIcon.png'
import MusicIcon from './images/MusicIcon.png'
 
const RecieveOption=()=>{
    return(
        <div className="center">
            <h3 className="white-text">What data do you want to recieve ?</h3>
            <div className="col">
                <div className="col s12 m7 l5">
                    <p>For Text input</p>
                    <NavLink to="/TextReciever">
                        <img src={LinkIcon} alt="To send text links"/>
                    </NavLink>
                </div>
                <div className="col s12 m7 l5">
                    <p>For music input</p>
                    <NavLink to="/MusicReciever">
                    <img src={MusicIcon} alt="To send music files"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default RecieveOption