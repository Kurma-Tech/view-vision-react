import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import * as actionTypes from '../actions/actions';
import * as api from '../api/authapi';
import { setToken, getToken, removeToken } from '../services/authService';

function* loginRequest(action: ReturnType<typeof actionTypes.fetchLoginAsync.request>): Generator {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = yield call(api.login, action.payload);
        const responseData = {
            ...response.data,
            isLoggedIn: true,
            name: '',
            access_token: response.data.access,
        };
        console.log(responseData);
        setToken(response.data.access as string);
        if (response) yield put(actionTypes.fetchLoginAsync.success(responseData));
    } catch (error) {
        console.log(error);
        yield put(actionTypes.fetchLoginAsync.failure(Error('${error}')));
    }
}

function* registerRequest(action: ReturnType<typeof actionTypes.fetchRegisterAsync.request>): Generator {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = yield call(api.register, action.payload);
        const responseData = {
            ...response.data,
            isLoggedIn: true,
            name: '',
            access_token: response.data.access,
        };
        console.log(responseData);
        setToken(response.data.access as string);
        if (response) yield put(actionTypes.fetchRegisterAsync.success(responseData));
    } catch (error) {
        console.log(error);
        yield put(actionTypes.fetchRegisterAsync.failure(Error('${error}')));
    }
}

function* businessRegisterRequest(
    action: ReturnType<typeof actionTypes.fetchBusinessRegisterAsync.request>,
): Generator {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = yield call(api.businessRegister, action.payload);
        const responseData = {
            ...response.data,
            isLoggedIn: true,
            name: '',
            access_token: response.data.access,
        };
        console.log(responseData);
        setToken(response.data.access as string);
        if (response) yield put(actionTypes.fetchRegisterAsync.success(responseData));
    } catch (error) {
        console.log(error);
        yield put(actionTypes.fetchRegisterAsync.failure(Error('${error}')));
    }
}

function* authenticateRequest(action: ReturnType<typeof actionTypes.fetchAuthAsync.request>): Generator {
    try {
        const token = getToken();

        if (token) {
            const responseData = {
                access_token: token,
                isLoggedIn: true,
                name: '',
            };
            yield put(actionTypes.fetchAuthAsync.success(responseData));
        }
    } catch (error) {
        console.log(error);
        yield put(actionTypes.fetchAuthAsync.failure(Error('${error}')));
    }
}

function* logoutRequest() {
    try {
        removeToken();
        // yield call(api.logout);
        yield put(actionTypes.fetchLogoutAsync.success(true));
    } catch (e) {
        yield put(actionTypes.fetchLogoutAsync.failure(Error('${e}')));
    }
}

function* login() {
    yield takeLatest(actionTypes.fetchLoginAsync.request, loginRequest);
}

function* register() {
    yield takeLatest(actionTypes.fetchRegisterAsync.request, registerRequest);
}

function* businessRegister() {
    yield takeLatest(actionTypes.fetchBusinessRegisterAsync.request, businessRegisterRequest);
}

function* logout() {
    yield takeLatest(actionTypes.fetchLogoutAsync.request, logoutRequest);
}

function* authenticate() {
    yield takeLatest(actionTypes.fetchAuthAsync.request, authenticateRequest);
}

export default function* authsaga() {
    yield all([fork(login), fork(logout), fork(register), fork(authenticate), fork(businessRegister)]);
}
