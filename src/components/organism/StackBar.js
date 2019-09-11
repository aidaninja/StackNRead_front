import React from 'react'

export default (props) => {

    return (
        <div className="stack-bar">
            <input className="stack-bar_url" type="input" placeholder="https://" />
            <select className="stack-bar_tag">
                <option>tag</option>
                <option>web</option>
                <option>game</option>
                <option>tips</option>
            </select>
            <input className="stack-bar_btn" type="button" defaultValue="STACK" />
        </div>
    )
}