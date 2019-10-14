import React from 'react'
import { HashRouter as Router ,Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from '../redux/actions'

import Top from './pages/top'
import My from './pages/my'
import Stack from './pages/stack'
import Tag from './pages/tag'
// import Read from './pages/read'

const mapStateToProps = state => {
    return {
        login: state.login,
        user: state.user
    }
}

export default connect(mapStateToProps, {fetchUser})((props)=>{
    console.log(props)
    if(props.user.id && !props.user.name){
        const requestBody = {
            query: `query {
                user(userId: "${props.user.id}"){
                name
                stacks{
                  title
                  url
                  thumbnail
                  tag
                }
                tags{
                  name
                }
              }
            }`
        }
        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=> {
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Failed');
            }
            return res.json()
        }).then(resData => {
            const params = {
                name: resData.data.user.name,
                items: {
                    stack: [...resData.data.user.stacks],
                    tag : [...resData.data.user.tags]
                }
            }
            props.fetchUser(params)
            return 
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <Router>
            <Route exact path={"/"} component={Top} />
            <Route path={"/my"} component={My} />
            <Route path={"/stack"} component={Stack} />
            <Route path ="/tag/:tagName" component={Tag} />
            {/* <Route path={"/read"} component={Read} /> */}
        </Router>
    )
})