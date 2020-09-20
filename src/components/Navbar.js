import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar=()=>{
    return(
        <div>
            <nav>
                <div className="nav-wrapper ">
                    <a className="brand-logo right">LexConnect</a>
                    <ul id="nav-mobile" className="left ">
                        <li className=""><NavLink to="/">Home</NavLink></li>
                        <li className=""><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar