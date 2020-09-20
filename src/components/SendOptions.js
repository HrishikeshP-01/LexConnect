import React from 'react'
import LinkIcon from './images/LinkIcon.png'
import MusicIcon from './images/MusicIcon.png'


const SendOption=()=>{
    return(
        <div>
            <div className="center">
            <h3 className="white-text">What would you like to send ?</h3>
            <p>This is the send options</p>
            <div className="col">
                <div className="col s12 m7 l5">
                    <p>For Text</p>
                    <a href="/LinkSender">
                    <img src={LinkIcon} alt="To send text or links"></img>
                    </a>
                </div>
                <div className="col s12 m7 l5">
                    <p>For Music</p>
                    <a href ="/MusicSender">
                    <img src={MusicIcon} alt="To send favourite song urls"></img>
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SendOption