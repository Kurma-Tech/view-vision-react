import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as deviceActionTypes from '../actions/actions';
import * as api from '../api/deviceapi';
import { AuthState } from '../../../shared/auth/types';
import { select } from 'redux-saga/effects';
import { getToken } from '../../../shared/auth/services/authService'

function* myDevicesRequest(action: ReturnType<typeof deviceActionTypes.fetchDeviceAsync.request>): Generator {
    try {
        const access_token = getToken();
        console.log(access_token);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = yield call(api.getMyDevices, access_token as string);
        console.log(response.data);

        if (response) yield put(deviceActionTypes.fetchDeviceAsync.success(response.data));
    } catch (error) {
        console.log(error);
        yield put(deviceActionTypes.fetchDeviceAsync.failure(Error("${error}")));
    }
}

function* addDeviceRequest(action: ReturnType<typeof deviceActionTypes.addDeviceAsync.request>): Generator {
    try {
        const access_token = getToken();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = yield call(api.addDevices, action.payload, access_token as string);

        if (response) yield put(deviceActionTypes.addDeviceAsync.success(response));
    } catch (error) {
        console.log(error);
        yield put(deviceActionTypes.addDeviceAsync.failure(Error("${error}")));
    }
}

function* getMyDevices() {
    yield takeLatest(deviceActionTypes.fetchDeviceAsync.request, myDevicesRequest);
}

function* addDevice() {
    yield takeLatest(deviceActionTypes.addDeviceAsync.request, addDeviceRequest);
}

export default function* devicesaga() {
    yield all([fork(getMyDevices), fork(addDevice)]);
}
