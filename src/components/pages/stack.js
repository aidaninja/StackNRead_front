import React, { useState } from 'react'
import {connect } from "react-redux"

import SideNav from '../organism/SideNav'
import StackBar from '../organism/StackBar'

import Tags from '../organism/Tags'
import StackItems from '../organism/StackItems'

import NewTagModal from '../organism/NewTagModal'

const mapStateToProps = (state) => {
    return {
        login: state.login,
        user: state.user
    }
}

export default connect(mapStateToProps)((props)=>{
    if(!props.login.status) props.history.push('/');

    const [modalState, changeModalState] = useState(false)

    const switchModal = ()=>changeModalState(!modalState)
    return (
        <>
            <SideNav history={props.history} />
            <div className="main">
                <div className="wrapper stack">
                    <StackBar />
                    <div className="contents-wrapper">
                        <div className="tag-wrapper">
                            <Tags items={props.user.items.tag} modalSwitch={switchModal} />
                        </div>
                        <div className="stack-wrapper" >
                            <StackItems
                                label="STACKED"
                                items={props.user.items.stack}
                            />
                        </div>
                    </div>
                </div>
                {modalState&&(
                        <NewTagModal modalSwitch={switchModal} />
                     )
                }
            </div>
        </>
    )
    })
