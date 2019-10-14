import React from 'react'
import StackItem from '../atoms/StackItem'

export default (props)=>{
    const {items , modalSwitch} = props

    const itemsList = items;

    const getTags = ()=>(
        <ul className="stack-items">
            {
                itemsList.map((item, i)=>(
                    <li key={i} className="stack-items_item">
                        <StackItem
                            url={item.url}
                            title={item.name}
                            type="tag"
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
                        defaultValue="New Tag"
                        onClick={modalSwitch}
                    />
                </div>
                {getTags()}
            </div>
        </>
    );
}