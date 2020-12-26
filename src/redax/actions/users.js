import { TYPE_REDUSER } from "../../utils/constants";

// const entryLoaded = users => ({ type: TYPE_REDUSER.ADD_USERS, payload: users })

export const addUsers = (usersList) => ({ type: TYPE_REDUSER.ADD_USERS, payload: usersList })

export const selectUser = userID => ({ type: TYPE_REDUSER.SELECT_USER, payload: userID })
