import axios, { AxiosResponse } from 'axios';
import { DeviceInfo } from '../types';


export function getMyDevices(access_token: string) {
    return axios.get('http://178.79.174.245/device/', {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${access_token}`
        }
    });
}

export function addDevices(deviceInfo: DeviceInfo, access_token: string) {
    return axios.post('http://178.79.174.245/device/', {
        ...deviceInfo,
        username: deviceInfo.userName,
        deviceType_id: 1
    }, {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${access_token}`
        }
    });
}
