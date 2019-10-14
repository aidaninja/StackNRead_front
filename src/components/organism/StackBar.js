import React from 'react'
import { connect } from 'react-redux'
import { addStack } from '../../redux/actions'

const mapStateToProps = state => {
    return {
        login: state.login,
        user: state.user
    }
}

export default connect( mapStateToProps, { addStack })((props) => {

    const stackInput = React.createRef();
    const selectedTag = React.createRef();

    const submitHandler = async (e)=> {
        e.preventDefault();
        const baseStackUrl = stackInput.current.value
        stackInput.current.value = ''
        const stackTag = selectedTag.current.value
        if( !baseStackUrl ) return

        const loginToken = props.login.token
        const stackUrl = baseStackUrl
        const stackQuery = `mutation {
            addStack(stackInput: { url: "${stackUrl}", tag: "${stackTag}"}){
              url
              title
              tag
              thumbnail
              creator{
                name
                stacks{
                  title
                  url
                  tag
                  thumbnail
                }
              }
            }
          }`

        const requestBody = {
            query: stackQuery
        }

        await fetch('http://localhost:8000/graphql', {
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
            const { title, url, creator, tag, thumbnail} = resData.data.addStack
            const newStack = {
                title: title,
                url: url,
                tag: tag,
                thumbnail: thumbnail
            }
            // const stackItems = [...props.user.items.stack, newStack]
            const stackItems = [...creator.stacks, newStack]
            props.addStack(stackItems)
            return 
        }).catch(err=>{
            console.log(err)
        })
    }

    const getTagOption = (tags)=>{
        return  tags.map((tag, i)=><option key={i} value={tag.name} >{tag.name}</option>)
    }
    return (
        <div className="stack-bar">
            <form onSubmit={submitHandler}>
                <input ref={stackInput} className="stack-bar_url" type="input" placeholder="https://" />
                <select ref={selectedTag} className="stack-bar_tag">
                    <option>tags</option>
                    {getTagOption(props.user.items.tag)}
                </select>
                <input className="stack-bar_btn" type="submit" value="STACK" />
            </form>
        </div>
    )
})