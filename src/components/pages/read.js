import React from 'react'
import { connect } from 'react-redux'

import SideNav from '../organism/SideNav'
import StackBar from '../organism/StackBar'

import StackItems from '../organism/StackItems'

class Read extends React.Component {
    constructor(props) {
        super(props)
        if(!this.props.login.status){
            this.props.history.push('/');
        }
    }

    render(){
        return (
            <>
            <SideNav history={this.props.history}  />
            <div className="main">
                <div className="wrapper read">
                    <StackBar />
                    <div className="contents-wrapper">
                        <StackItems 
                            label="READ"
                            items={[]}
                        />
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

export default connect(mapStateToProps)(Read);