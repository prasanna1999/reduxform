import { combineReducers } from "redux";

let initialState = {
  user: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_DATA":
      let _user = state.user;
      _user[action.key] = action.value
      return {
        ...state,
        user: _user
      }
    case "CLEAR_DATA":
      return{
        ...state,
        user: {}
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ userReducer: reducer });

export default rootReducer;