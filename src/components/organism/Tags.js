import React from 'react'
import StackItem from '../atoms/StackItem'



const stub = [
    {
        url: "https://www.StackNRead.com",
        title: "StackNRead",
    },
    {
        url: "https://www.StackNRead.com",
        title: "StackNRead",
    },
    {
        url: "https://www.StackNRead.com",
        title: "StackNRead",
    },
    {
        url: "https://www.StackNRead.com",
        title: "StackNRead",
    },

    {
        url: "https://www.StackNRead.com",
        title: "StackNRead",
    },
    {
        url: "https://www.StackNRead.com",
        title: "StackNRead",
    },
    {
        url: "https://www.StackNRead.com",
        title: "StackNRead",
    },
    {
        url: "https://www.StackNRead.com",
        title: "StackNRead",
    },
    {
        url: "https://www.StackNRead.com",
        title: "StackNRead",
    },
]

export default (props)=>{
    const {items , modalSwitch} = props

    const itemsList = stub;

    const getTags = ()=>(
        <ul className="stack-items">
            {
                itemsList.map(item=>(
                    <li className="stack-items_item">
                        <StackItem
                            url={item.url}
                            title={item.title}
                        />
                    </li>
                ))
            }
        </ul>
    )
    

    return (
        <>
            <div className="items">
                <div className="tag-header">
                    <h2 className="items_label">TAG</h2>
                    <input 
                        className="new-tag_btn"
                        type="button"
                        defaultValue="new Tag"
                        onClick={modalSwitch}
                    />
                </div>
                {getTags()}
            </div>
        </>
    );
}