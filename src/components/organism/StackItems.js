import React from 'react'
import StackItem from '../atoms/StackItem'

export default (props)=>{
    const {label, items} = props

    const itemsList = items;

    const getStackItems = ()=>(
        <ul className="stack-items">
            {
                itemsList.map((item, i)=>(
                    <li className="stack-items_item"  key={i} >
                        <StackItem
                            url={item.url}
                            title={item.title}
                            dateAdded={item.dateAdded}
                            siteUrl={item.siteUrl}
                            thumbnail = { item.thumbnail }
                        />
                    </li>
                ))
            }
        </ul>
    )
    
    return (
        <div className="items">
            <h2 className="items_label">{label}</h2>
            {getStackItems()}
        </div>
    );
}