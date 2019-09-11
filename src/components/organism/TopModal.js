import React from 'react'

const stub = {
    title: "Log in",
    forms: [
        {
            placeholder:'Username',
            onChange: ()=>{},
        },
        {
            placeholder:'Password',
            onChange: ()=>{},},
    ],
    btn: {
        value: 'Log in',
        onClick: ()=>{console.log('log in')}
    }
}

export default (props) =>{

    const { modal, modalSwitch } = props;
    const {title, forms, btn} = stub;

    const getInput = ()=>{
        return forms.map(form => {
            const {placeholder, onChange} = form
            return <input 
                className="modal_body_input"
                placeholder={placeholder}
            />
        })
    }

    return(
        <div className="modal">
            <div className="modal_body">
                <p className="modal_body_title">
                    {title}
                </p>
                {getInput()}
                <input
                    className="modal_body_submit"
                    type="button"
                    defaultValue={btn.value}
                    onClick={btn.onClick}
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