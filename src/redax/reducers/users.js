import { TYPE_REDUSER } from "../../utils/constants";

const initialState = {
    usersList: [],
    activeUser: [],
    isLoaded: false,
}


const users = (state = initialState, actions) => {

    switch (actions.type) {
        case TYPE_REDUSER.ADD_USERS:
            return {
                ...state,
                usersList: [...state.usersList , ...actions.payload],
            } 
        case TYPE_REDUSER.SELECT_USER:
            return {
                ...state,
                activeUser: actions.payload,
            } 
        default:
            return state;
    }




}

export default users;