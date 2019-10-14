export default (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return  action.payload
        case 'LOGOUT':
            return { token: null, status: null}
        default:
            return state
    }
}