import React from 'react'

export default (props)=>{
    const {} = props;
    return ( 
        <div className="user-activity">
            <ul className="user-activity_tabs">
                <li className="user-activity_tabs_tab">STACK</li>
                <li className="user-activity_tabs_tab">READ</li>
                <li className="user-activity_tabs_tab active">HISTORY</li>
            </ul>
            <div className="user-activity_content">

            </div>
        </div>
    );
}