import React from 'react'

import SideNav from '../organism/SideNav'
import StackBar from '../organism/StackBar'

import UserProfile from '../organism/UserProfile'
import UserActivity from '../organism/UserActivity';

class My extends React.Component {

    render(){
        return (
        <>
            <SideNav />
            <div className="main">
                <div className="wrapper my">
                    <StackBar />
                    <div className="contents-wrapper">
                        <UserProfile
                            pp={"../img/DOLF_spotify.jpeg"}
                            userName="Jun Aida"
                            subName="NINJA"
                        />
                        <UserActivity/>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default My;