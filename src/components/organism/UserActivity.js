import React, {useState} from 'react'
import classNames from 'classnames'

const ACTIVITY = {
    STACK: 'stack',
    READ: 'read',
    HISTORY: 'history'
}

export const ComingSoon = () => {
    return (<div className="coming-soon">
                    <p>coming soon...</p>
                </div>)
}

export default (props)=>{
    // const { } = props;

    const [ activityState, switchActivity  ] = useState('stack');

    const activityTabHandler = (activity)=>{
        switchActivity(activity)
    }

    return ( 
        <div className="user-activity">
            <ul className="user-activity_tabs">
                <li className={classNames("user-activity_tabs_tab", {active: activityState === ACTIVITY.STACK})} onClick={()=>{activityTabHandler(ACTIVITY.STACK)}} >STACK</li>
                {/* <li className={classNames("user-activity_tabs_tab", {active: activityState === ACTIVITY.READ})} onClick={()=>{activityTabHandler(ACTIVITY.READ)}}>READ</li> */}
                <li className={classNames("user-activity_tabs_tab", {active: activityState === ACTIVITY.HISTORY})} onClick={()=>{activityTabHandler(ACTIVITY.HISTORY)}}>HISTORY</li>
            </ul>
            <div className="user-activity_content">
                { activityState === ACTIVITY.STACK ? <ComingSoon /> : null }
                {/* { activityState === ACTIVITY.READ ? <div>read</div> : null } */}
                { activityState === ACTIVITY.HISTORY? <ComingSoon /> : null }
            </div>
        </div>
    );
}