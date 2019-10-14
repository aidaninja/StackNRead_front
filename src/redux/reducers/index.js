import { combineReducers} from 'redux';
import  loginReducer from './loginReducer';
import userReducer from './userReducer';

export const  initState = {
    login: {
        token: null,
        status: null,
    },
    user: {
        id: null,
        name: null,
        history: null,
        items: {
            stack: [],
            tag : []
        }
    }
}

export default combineReducers({
    login: loginReducer,
    user : userReducer,
});