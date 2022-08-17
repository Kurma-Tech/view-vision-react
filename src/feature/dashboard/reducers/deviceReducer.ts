import * as actionType from '../actions/actions';
import { DeviceListState } from '../types';
import { getType } from 'typesafe-actions';
// import { fetchLoginAsync } from '../actions/actions';

const intialState: DeviceListState = {
    myDevices: [],
    deviceAddSuccess: false
};

const reducer = (state = intialState, action: actionType.deviceActionTypes): DeviceListState => {
    switch (action.type) {
        case getType(actionType.fetchDeviceAsync.success):
            return { ...state, myDevices: action.payload };
        case getType(actionType.addDeviceAsync.success):
            return { ...state, deviceAddSuccess: true };
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
