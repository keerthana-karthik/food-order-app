import axios from "axios";

import * as actionTypes from './actionTypes';
export const authStart = ( ) => {
    return {
        type: actionTypes.AUTH_START
    };
};
export const authSuccess = ( authToken, userId ) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authToken: authToken, 
        userId: userId
    };
};
export const authFailure = ( error ) => {
    return {
        type: actionTypes.AUTH_FAILURE,
        error: error
    };
};
export const auth = ( email, password, isSignIn ) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBc0GNBtrhhNxC8vH7S8vVMOkHdWOOBAwQ';
        if(isSignIn) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBc0GNBtrhhNxC8vH7S8vVMOkHdWOOBAwQ';
        }
        axios.post(url, authData)
        .then(response => {
            dispatch(authSuccess(response.data.idToken, response.data.email));
        })
        .catch(err => {
            dispatch(authFailure(err));
        });

    }
};

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    };
}