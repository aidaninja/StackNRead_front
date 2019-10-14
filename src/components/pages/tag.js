import React from 'react'
import {connect } from "react-redux"

import SideNav from '../organism/SideNav'
import StackBar from '../organism/StackBar'

import StackItem from '../atoms/StackItem'

const mapStateToProps = state => {
    return {
        login: state.login,
        user: state.user
    }
}

export default connect(mapStateToProps)((props) => {
    const { tagName } = props.match.params
    const { stack } = props.user.items
    const taggedStack = stack.filter(item => item.tag === tagName)

    const getItems = ()=>(
        <ul className="stack-items">
            {
                taggedStack.map((item, i)=>(
                    <li key={i} className="stack-items_item">
                        <StackItem
                            url={item.url}
                            title={item.title}
                            thumbnail = {item.thumbnail}
                        />
                    </li>
                ))
            }
        </ul>
    )

    return (<>
        <SideNav history={props.history} />
        <div className="main">
            <div className="wrapper stack">
                <StackBar />
                <div className="contents-wrapper">
                <div className="items">
                <div className="tag-header">
                    <h2 className="items_label">{tagName}</h2>
                    <input 
                        className="new-tag_btn"
                        type="button"
                        defaultValue="Back"
                        onClick={()=>{props.history.push('/stack')}}
                    />
                </div>
                {getItems()}
            </div>
                </div>
            </div>
        </div>
    </>)
})