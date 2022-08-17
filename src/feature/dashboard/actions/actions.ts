import { createAsyncAction, ActionType } from 'typesafe-actions';
import { DeviceInfo } from '../types/deviceInfo';

/*
 *  THE FOLLOWING CODES DENOTES TO DO ASYNC ACTIONS
 */
export const fetchDeviceAsync = createAsyncAction(
    '@DEVICE/MYDEVICE_REQUEST',
    '@DEVICE/MYDEVICE_SUCCESS',
    '@DEVICE/MYDEVICE_FAILURE',
    '@DEVICE/MYDEVICE_CANCEL',
)<undefined, Array<DeviceInfo>, Error, string>();

export const addDeviceAsync = createAsyncAction(
    '@DEVICE/ADDDEVICE_REQUEST',
    '@DEVICE/ADDDEVICE_SUCCESS',
    '@DEVICE/ADDDEVICE_FAILURE',
    '@DEVICE/ADDDEVICE_CANCEL',
)<DeviceInfo, boolean, Error, string>();

export type deviceActionTypes = ActionType<typeof fetchDeviceAsync | typeof addDeviceAsync>;
