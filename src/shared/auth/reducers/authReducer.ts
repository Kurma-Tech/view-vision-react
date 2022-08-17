import * as actionType from '../actions/actions';
import { UserState } from '../types';
import { getType } from 'typesafe-actions';
// import { fetchLoginAsync } from '../actions/actions';

const intialState: UserState = {
    isLoggedIn: false,
    name: '',
    access_token: '',
    refresh_token: ''
};

const reducer = (state = intialState, action: actionType.authActionTypes): UserState => {
    switch (action.type) {
        case getType(actionType.fetchLoginAsync.success):
            console.log(action.payload);
            return action.payload;
        case getType(actionType.fetchRegisterAsync.success):
            return action.payload;
        case getType(actionType.fetchAuthAsync.success):
            return action.payload;
        case getType(actionType.fetchLogoutAsync.success):
            return { ...state, isLoggedIn: false, name: '' };
        case getType(actionType.fetchAuthAsync.success):
            return { ...state, isLoggedIn: true, name: '' };
        default:
            return state;
    }
};

/*
 *  CHECK THE FOLLOWING CODE AFTER RELEASING THE DOC FOR V5
 */
// export const reducer = createReducer(intialState).handleAction(
//     fetchLoginAsync.success,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     (state: any, action: any) => {
//         debugger;
//         return action.payload;
//     },
// );

export default reducer;
