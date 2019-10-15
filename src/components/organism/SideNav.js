import React from 'react'
import {  NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut  } from '../../redux/actions'

import logo from '../../img/logo_text.png'

export default connect(null, {logOut})((props) => {

    const redirector = path => {
        props.history.push(path)
    }

    return (
        <div className="side-nav">
            <div className="side-nav_logo">
                <img className="top_header_logo" src={logo} alt="logo" />
                {/* <img className="top_header_logo" src="../img/logo_circle.png" alt="logo" /> */}
            </div>
            <div >
                <ul className="side-nav_links">
                    <li>
                        <NavLink  className="side-nav_links_link" to="/my">My Page</NavLink>
                    </li>
                    <li>
                        <NavLink className="side-nav_links_link" to="/stack">Stack</NavLink>
                    </li>
                    {/* <li>
                        <NavLink className="side-nav_links_link" to="/read">Read</NavLink>
                    </li> */}
                </ul>
            </div>
            <div className="side-nav_logout">
                <input
                    className="side-nav_logout_btn"
                    type="button"
                    defaultValue="Log out"
                    onClick={()=>{
                        props.logOut()
                        redirector('/')
                    }}
                    />
            </div>
        </div>
    )
})