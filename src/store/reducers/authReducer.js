import * as Actions from "../actions/actionTypes";
import { updateStateObject } from "../../helpers/CatalogHelper";
const initialState = {
    authToken: "",
    userId: ""
}
const setAuthResponse = (state, action) => {
    return updateStateObject(state, {authToken: action.authToken, userId: action.userId});
}
const removeAuthFromState = (state, action) => {
    return updateStateObject(state, {authToken: "", userId: ""});
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.AUTH_SUCCESS:
            return setAuthResponse(state, action);
        case Actions.LOGOUT:
            return removeAuthFromState(state, action);
        default: 
            return state;
    }
}

export default reducer;