import React from 'react'

export default (props)=>{
    const { pp, userName, subName } = props


    return (
        <div className="user-profile">
            <div className="user-profile_picture">
                <img src={pp} alt="profile" />
            </div>
            <div className="user-profile_name">
                <p className="user-profile_name-sub">
                    {subName}
                </p>
                <p className="user-profile_name-main">
                    {userName}
                </p>
            </div>
        </div>
    )
}