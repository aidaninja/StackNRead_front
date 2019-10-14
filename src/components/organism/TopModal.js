import React from 'react'
import bcrypt from 'bcryptjs'



export default (props) =>{
    const { modalType, modalSwitch } = props;
    const  nameInput = React.createRef();
    const passInput = React.createRef();

    const login = {
        title: "Log in",
        forms: [
            {
                placeholder:'Username',
                ref: nameInput
            },
            {
                placeholder:'Password',
                ref: passInput,
                type: "password"
             },
        ],
        btn: {
            value: 'Log in',
        }
    }
    
    const signup =  {
        title: "Sign up",
        forms: [
            {
                placeholder:'Username',
                ref: nameInput
                
            },
            {
                placeholder:'Password',
                ref: passInput,
                type: "password"
            },
        ],
        btn: {
            value: 'Sign up',
        }
    }
    
    const logInQuery = (name, pass)=> `query {
        login(userInput: {name: "${name}", pass: "${pass}"}){
          userId
          token
          tokenExpiration
        }
      }`
    
      const signUpQuery = (name, pass) => `mutation {
        createUser(userInput: {name: "${name}", pass: "${pass}"}){
          name
        }
      }`

    const  data = modalType === "logIn" ? login : signup
    const {title, forms, btn} = data;

    const submitHandler = async(e)=>{
        e.preventDefault()
        const name = nameInput.current.value;
        const pass = passInput.current.value;


        const hashedPass = await bcrypt.hash(pass, 12)
        console.log(hashedPass)

        const loginQuery = logInQuery(name, pass)
        const requestBody = {
            query: loginQuery
        }


        if(modalType==="signUp"){
            const signUpRequestBody = {
                query: signUpQuery(name, hashedPass)
            }
            await fetch('https://stacknread.herokuapp.com/graphql', {
                method: 'POST',
                body: JSON.stringify(signUpRequestBody),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res=> {
                if(res.status !== 200 && res.status !== 201){
                    throw new Error('Failed');
                }
                return res.json()
            }).then(resData => {
                return 
            }).catch(err=>{
                console.log(err)
            })
            console.log('signUp');
        }

        await fetch('https://stacknread.herokuapp.com/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=> {
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Failed');
            }
            return res.json()
        }).then(resData => {
            const params  = {
                login: {
                    token: resData.data.login.token ,
                    status: true
                },
                user:{
                    id: resData.data.login.userId
                }
            }  
            props.onLogIn(params)
            return 
        }).catch(err=>{
            console.log(err)
        })
    }


    const getInput = ()=>{
        return forms.map(form => {
            const {placeholder, ref, type} = form
            return <input 
                key={placeholder}
                className="modal_body_input"
                placeholder={placeholder}
                ref={ref}
                type={type}
            />
        })
    }

    return(
        <div className="modal">
            <div className="modal_body">
                <p className="modal_body_title">
                    {title}
                </p>
                <form onSubmit={submitHandler}>
                    {getInput()}
                    <input
                        className="modal_body_submit"
                        type="submit"
                        value={btn.value}
                        onClick={btn.onClick}
                    />
                 </form>
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