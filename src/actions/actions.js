import {REGISTER, UPDATE_GUEST} from "./actionsTypes";

export const updateGuest = (guest) => {
    return {
        type: UPDATE_GUEST,
        payload: {
            guest: guest
        }
    }
};

export const register = () => {
    return {
        type: REGISTER,
        payload: {}
    }
};
