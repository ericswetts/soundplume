import { postSession, postUser, deleteSession } from '../utils/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS, 
    errors
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
  });

export const signup = formUser => dispatch => postUser(formUser)
    .then (user => dispatch(receiveCurrentUser(user)))

export const login = formUser => dispatch => postSession(formUser)
    .then (user => dispatch(receiveCurrentUser(user)))

export const logout = () => dispatch => deleteSession()
    .then (() => dispatch(logoutCurrentUser()))


