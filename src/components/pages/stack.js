import React, { useState } from 'react'

import SideNav from '../organism/SideNav'
import StackBar from '../organism/StackBar'

import Tags from '../organism/Tags'
import StackItems from '../organism/StackItems'


import NewTagModal from '../organism/NewTagModal'

export default (props)=>{

    const [modalState, changeModalState] = useState(false)

    const switchModal = ()=>changeModalState(!modalState)


    return (
        <>
            <SideNav />
            <div className="main">
                <div className="wrapper stack">
                    <StackBar />
                    <div className="contents-wrapper">
                        <Tags modalSwitch={switchModal} />
                        <StackItems
                            label="STACKED"
                            items={[]}
                        />
                    </div>
                </div>
                {modalState&&(
                    <NewTagModal modalSwitch={switchModal} />
                )
                }
            </div>
        </>
    )
    }
