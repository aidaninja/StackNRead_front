import React from 'react'

import SideNav from '../organism/SideNav'
import StackBar from '../organism/StackBar'

import StackItems from '../organism/StackItems'

class Read extends React.Component {

    render(){
        return (
            <>
            <SideNav />
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

export default Read;