import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {

    return (
        <div className="side-nav">
            <div className="side-nav_logo">
                <img className="top_header_logo" src="../img/logo_text.png" alt="logo" />
                {/* <img className="top_header_logo" src="../img/logo_circle.png" alt="logo" /> */}
            </div>
            <div >
                <ul className="side-nav_links">
                    <li>
                        <Link  className="side-nav_links_link" to="/my">My Page</Link>
                    </li>
                    <li>
                        <Link className="side-nav_links_link" to="/stack">Stack</Link>
                    </li>
                    <li>
                        <Link className="side-nav_links_link" to="/read">Read</Link>
                    </li>
                </ul>
            </div>
            <div className="side-nav_logout">
                <input
                    className="side-nav_logout_btn"
                    type="button"
                    defaultValue="Log out"
                    onClick={()=>{console.log("log out")}}
                    />
            </div>
        </div>
    )


}