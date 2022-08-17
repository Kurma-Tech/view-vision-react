import axios, { AxiosResponse } from 'axios';
import { DeviceInfo } from '../types';


export function getMyDevices(access_token: string) {
    return axios.get('http://212.71.254.160/device/', {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${access_token}`
        }
    });
}

export function addDevices(deviceInfo: DeviceInfo, access_token: string) {
    return axios.post('http://212.71.254.160/device/', {
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
