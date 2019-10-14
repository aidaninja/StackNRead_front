export default (state = {}, action) =>{
    switch (action.type){
        case 'FETCH_USER':
            return {  ...state , ...action.payload}
        case 'LOGOUT':
            return {
                id: null,
                name: null,
                items: {
                    stack: [],
                    tag : []
                }}
        case 'CREATE_TAG':
            return {
                ...state,
                items: {
                    ...state.items,
                    tag: [...action.payload.newTag]
                }
            }
        case 'ADD_STACK':
            return {
                ...state,
                items: {
                    ...state.items,
                    stack: [...action.payload.newStack]
                }
            }
        default:
            return state
    }
}