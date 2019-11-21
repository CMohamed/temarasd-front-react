import {combineReducers} from "redux";
import {UPDATE_GUEST, REGISTER} from "../actions/actionsTypes";

const initialState = {
    guest: {},
    connectedUser: null,
    rubriques: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER :
            console.log("register", state);
            return {...state};
        case "LOGIN" :
            console.log("login");
            return {...state};
        case UPDATE_GUEST:
            console.log("state", state);
            console.log("action", action);
            return {
                ...state,
                guest: Object.assign(state.guest, action.payload.guest)
            };
        default :
            console.log("default");
            return {...state};
    }
};

export const rootReducer = combineReducers([reducer]);
