import React from 'react'
import { HashRouter as Router ,Route } from 'react-router-dom'

import Top from './pages/top'
import My from './pages/my'
import Stack from './pages/stack'
import Read from './pages/read'


export default ()=>{
    return (
        <Router>
            <Route exact path={"/"} component={Top} />
            <Route path={"/my"} component={My} />
            <Route path={"/stack"} component={Stack} />
            <Route path={"/read"} component={Read} />
        </Router>

    )
}