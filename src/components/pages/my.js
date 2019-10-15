import React from 'react'
import { connect } from 'react-redux'

import SideNav from '../organism/SideNav'
import StackBar from '../organism/StackBar'

import UserProfile from '../organism/UserProfile'
import UserActivity from '../organism/UserActivity';
import pp from '../../img/profile.jpg'

class My extends React.Component {
    constructor(props) {
        super(props)
        if(!this.props.login.status){
            this.props.history.push('/');
        }
    }

    render(){
        return (
        <>
            <SideNav history={this.props.history}   />
            <div className="main">
                <div className="wrapper my">
                    <StackBar />
                    <div className="contents-wrapper">
                        <UserProfile
                            // pp={"../img/DOLF_spotify.jpeg"}
                            pp={pp}
                            userName={this.props.user.name}
                        />
                        <UserActivity/>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

const mapStateToProps= state=>{
    return {
        login: state.login,
        user: state.user
    }
}

export default connect(mapStateToProps)(My);