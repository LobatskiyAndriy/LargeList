import { combineReducers } from 'redux';
import usersReduser from './users';



const rootReducer = combineReducers({
    users: usersReduser,
})


export default rootReducer;
 