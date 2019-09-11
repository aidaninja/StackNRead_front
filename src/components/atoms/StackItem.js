import React from 'react'

export default props =>{
    const {url, title, dateAdded, siteUrl} = props
    return (
            <a href={url} className="stack-item" target="_blunk">
                <p className="stack-item_title">{title}</p>
                <p className="stack-item_date">{dateAdded}</p>
                <p className="stack-item_site">{siteUrl}</p>
            </a>
    )
}