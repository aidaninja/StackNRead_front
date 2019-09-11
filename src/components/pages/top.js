import React , {useState} from 'react'
import TopModal from '../organism/TopModal'

export default (props)=> {


    const [modalState, changeModalState] = useState(false)

    const switchModal = ()=>{
            changeModalState(!modalState)
        }

    return (
        <div className="wrapper-top">
            <div className="top">
                <div className="top_header">
                    <img className="top_header_logo" src="../img/logo_text.png" alt="logo" />
                    <p 
                        className="top_header_log-in"
                        onClick={switchModal}
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
                                onClick={switchModal}
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
                    <TopModal modalSwitch={switchModal} />
                )
            }
        </div>
    )
}