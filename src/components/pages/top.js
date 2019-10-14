import React , {useState} from 'react'
import TopModal from '../organism/TopModal'
import { connect } from "react-redux"

import { logIn, fetchUser  } from '../../redux/actions'

const mapStateToProps = state => {
    return {
        login: state.login,
        user: state.user
    }
}

export default  connect(mapStateToProps, {logIn,fetchUser})((props)=> {

    const [modalState, changeModalState] = useState(false)
    const  [modalType, changeModalType] = useState('logIn')

    if(props.login.status)props.history.push('/stack')

    const switchModal = ()=>{
            changeModalState(!modalState)
        }
    
    const redirector = path => {
            props.history.push(path)
        }

        const onLogin = ({login, user}) => {
            props.logIn(login)
            props.fetchUser(user)
        }

    return (
        <div className="wrapper-top">
            <div className="top">
                <div className="top_header">
                    <img className="top_header_logo" src="../img/logo_text.png" alt="logo" />
                    <p 
                        className="top_header_log-in"
                        onClick={()=>{
                            changeModalType('logIn')
                            switchModal()
                        }}
                    >
                        Log in
                    </p>
                </div>
                <div className="top_main">
                    <div className="top_main_left">
                        <div className="top_main_left_wrapper">
                            <p className="top_main_left_catch">STACK</p>
                            <p className="top_main_left_catch">STACK</p>
                            <p className="top_main_left_catch">READ</p>
                            <p className="top_main_left_catch">STACK</p>
                            <input
                                className="top_main_left_sign-up" 
                                type="button"
                                defaultValue="Start Stack"
                                onClick={()=>{
                                    changeModalType('signUp')
                                    switchModal()
                                }}
                            />
                        </div>
                    </div>
                    <div className="top_main_right">

                    </div>
                </div>
                <div className="top_footer">
                    <p>SnR is an indie maker project by Aida</p>
                </div>
            </div>
            {
                modalState&&(
                    <TopModal onLogIn={onLogin} redirector={redirector} modalType={modalType} modalSwitch={switchModal} />
                )
            }
        </div>
    )
})