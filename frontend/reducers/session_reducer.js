import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, LOGOUT_CURRENT_USER } from '../actions/session'
import merge from 'lodash'


const _nullSession = {
    currrentUser: null
}

const _nullUser = Object.freeze ({
    id: null
});

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            const user = action.user;
            console.log(action)
            return merge({}, { user });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default: 
            return state;
    }
}

export default sessionReducer;


// import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

// const _nullSession = {
//   currentUser: null
// };

// export default (state = _nullSession, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case RECEIVE_CURRENT_USER:
//       const currentUser = action.user
//       return Object.assign({}, { currentUser });
//     case LOGOUT_CURRENT_USER:
//       return _nullSession;
//     default:
//       return state;
//   }
// };