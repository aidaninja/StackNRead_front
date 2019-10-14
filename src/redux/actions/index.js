export const actionType = {
    LOGIN : 'LOGIN',
    LOGOUT: 'LOGOUT',
    ADD_STACK: 'ADD_STACK',
    CREATE_TAG: 'CREATE_TAG',
    ADD_TAG: 'ADD_TAG',
    FETCH_USER: 'FETCH_USER'
}

export const logIn = (login={}) =>{
    return  { 
        payload: {...login},
        type: actionType.LOGIN
    }
}
export const logOut = () => {
    return {
        type: actionType.LOGOUT
    }
}
export const fetchUser = (user = {}) => {
    return {
        payload: {...user},
        type: actionType.FETCH_USER
    }
}
export const addStack = (newStack = {}) => {
    return {
        payload: { newStack },
        type: actionType.ADD_STACK
    }
}
export const createTag =  (newTag = {}) => {
    return { 
        payload: { newTag },
        type: actionType.CREATE_TAG
    }
}