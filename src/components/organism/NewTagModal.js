import React from 'react'
import { connect } from 'react-redux'
import {  createTag  } from '../../redux/actions'

const mapStateToProps = state => {
    return {
                    login: state.login,
                    user : state.user
                }
}

export default  connect(mapStateToProps, {createTag})((props) =>{
    const { modalSwitch } = props
    const tagInput = React.createRef()

    const  onSubmitHandler = (e)=> {
        e.preventDefault()
        const tag = tagInput.current.value
        if( !tag ) return
        const tagQuery = `mutation {
            createTag(tagInput: {name: "${tag}"}){
              name
              creator{
                name
                tags{
                    name
                }
                stacks{
                    title
                    url
                }
              }
            }
          }`
        const requestBody = {
            query: tagQuery
        }
        const loginToken = props.login.token
        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loginToken}`
            }
        }).then(res=> {
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Failed');
            }
            return res.json()
        }).then(resData => {
            const { name, creator } = resData.data.createTag
            const newTag = { name: name}
            // const tagItems = [ ...props.user.items.tag, newTag]
            const tagItems = [ ...creator.tags, newTag]
            props.createTag(tagItems)
            return 
        }).catch(err=>{
            console.log(err)
        })
        modalSwitch()
    }

    return(
        <div className="modal">
            <div className="modal_body">
                <form onSubmit={onSubmitHandler}>
                    <input 
                        ref={tagInput}
                        className="modal_body_input"
                        placeholder="New TAG"
                    />
                    <input
                        className="modal_body_btn"
                        type="submit"
                        value="Create"
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
})