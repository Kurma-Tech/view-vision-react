import { DeviceInfo } from './deviceInfo';

export interface DeviceList {
    myDevices: Array<DeviceInfo>;
    deviceAddSuccess: boolean;
}

export type DeviceListState = Readonly<DeviceList>;
