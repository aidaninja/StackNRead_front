import React from 'react'

export default props =>{
    const {url, title} = props
    return (
            <a href={url} className="stack-item" target="_blunk">
                <p className="stack-item_title">{title}</p>
            </a>
    )
}