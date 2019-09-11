import React from 'react'
import StackItem from '../atoms/StackItem'


const stub = [
    {
        url: "https://www.google.com",
        title: "google",
        dateAdded: "08/09/2018",
        siteUrl: "google.com",
    },
    {
        url: "https://www.google.com",
        title: "google",
        dateAdded: "08/09/2018",
        siteUrl: "google.com",
    },
    {
        url: "https://www.google.com",
        title: "google",
        dateAdded: "08/09/2018",
        siteUrl: "google.com",
    },
    {
        url: "https://www.google.com",
        title: "google",
        dateAdded: "08/09/2018",
        siteUrl: "google.com",
    },

    {
        url: "https://www.google.com",
        title: "google",
        dateAdded: "08/09/2018",
        siteUrl: "google.com",
    },
    {
        url: "https://www.google.com",
        title: "google",
        dateAdded: "08/09/2018",
        siteUrl: "google.com",
    },
    {
        url: "https://www.google.com",
        title: "google",
        dateAdded: "08/09/2018",
        siteUrl: "google.com",
    },
    {
        url: "https://www.google.com",
        title: "google",
        dateAdded: "08/09/2018",
        siteUrl: "google.com",
    },
]

export default (props)=>{
    const {label, items} = props

    const itemsList = stub;

    const getStackItems = ()=>(
        <ul className="stack-items">
            {
                itemsList.map(item=>(
                    <li className="stack-items_item">
                        <StackItem
                            url={item.url}
                            title={item.title}
                            dateAdded={item.dateAdded}
                            siteUrl={item.siteUrl}
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