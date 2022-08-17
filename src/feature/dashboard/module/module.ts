import reducer from '../reducers/deviceReducer';
import devicesaga from '../saga/devicesaga';
import * as types from '../types';
import { ISagaModule } from 'redux-dynamic-modules-saga';

export const DeviceModule: ISagaModule<types.DeviceState> = {
    // Unique id of the module
    id: 'device',
    // Maps the Store key to the reducer
    reducerMap: {
        deviceListState: reducer
    },
    // This module uses redux-saga middleware
    // This property will be be used by the SagaExtension
    // to run sagas for the moduleD
    sagas: [devicesaga],
};
