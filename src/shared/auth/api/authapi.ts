import axios, { AxiosResponse } from 'axios';
import mockAdapter from 'axios-mock-adapter';
import * as dataTypes from '../types';

// MOCKING SHOULD BE REMOVED AFTER API IMPLEMENTATION
// This sets the mock adapter on the default instance
// const mock = new mockAdapter(axios);

// mock.onPost('/login').reply(200, {
//     name: 'Sujan',
//     isLoggedIn: true,
// });

// mock.onPost('/logout').reply(200, {
//     isLoggedOut: true,
// });

// Mocking ends here
// userdetail: dataTypes.LoginDetails
export function login(userdetail: dataTypes.LoginDetails) {
    console.log(userdetail.email)
    return axios.post('http://178.79.174.245/auth/login/',
        {
            email: userdetail.email,
            password: userdetail.password,
        }, {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }
    });
}

export function register(userdetail: dataTypes.RegisterDetails) {
    console.log(userdetail.email)
    return axios.post('http://178.79.174.245/auth/register/',
        {
            first_name: userdetail.firstname,
            last_name: userdetail.lastname,
            email: userdetail.email,
            password: userdetail.password,
        }, {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }
    });
}

export function logout() {
    return axios.post('/logout');
}
