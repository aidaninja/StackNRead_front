import React from 'react'

export default (props) =>{
    const { modalSwitch } = props

    return(
        <div className="modal">
            <div className="modal_body">
                <input 
                    className="modal_body_input"
                    placeholder="New TAG"
                />
                <input
                    className="modal_body_btn"
                    type="button"
                    defaultValue="Create"
                />
                <div 
                   className="modal_body_close"
                   onClick={modalSwitch}
                >
                    x
                </div>
            </div>
        </div>
    )
}