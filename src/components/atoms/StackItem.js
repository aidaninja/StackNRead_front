import React from 'react'
import { Link } from 'react-router-dom'

import stackIcon from  '../../img/stack-icon.png'

export default props =>{
    const {url, title, dateAdded, siteUrl, thumbnail, type } = props

    const style = thumbnail ? {
        background : ` linear-gradient(rgba(246, 250, 250, .2), rgba(255, 231, 231, .9)), url(${thumbnail})`,
        backgroundSize : 'cover',
        backgroundPosition: 'center' 
    } : {
        backgroundImage: `url(${stackIcon})`,
        backgroundPosition: 'center',
        backgroundSize: '45%',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <>
        {
            type === 'tag' ?  
            <Link to={`/tag/${title}`} className="stack-item" style={style} >
                <p className="stack-item_title">{title}</p>
                <p className="stack-item_date">{dateAdded}</p>
                <p className="stack-item_site">{siteUrl}</p>
            </Link> : 
            <a href={url} className="stack-item" style={style}  target="_blunk">
                <p className="stack-item_title">{title}</p>
                <p className="stack-item_date">{dateAdded}</p>
                <p className="stack-item_site">{siteUrl}</p>
            </a>
        }
        </>
    )
}