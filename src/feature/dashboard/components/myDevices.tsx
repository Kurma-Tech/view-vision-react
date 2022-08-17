import React, { useEffect } from 'react';
import { Typography, Grid, Button, GridList, ImageList, ImageListItem, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { Add } from '@material-ui/icons'
import { DeviceContainer } from '../containers/deviceContainer';
import { fetchDeviceAsync } from '../actions/actions'
import { DeviceModule } from '../module/module';
import { DeviceInfo, DeviceListState, DeviceState } from '../types';

interface MyDevicesProps {
    deviceList: Array<DeviceInfo>;
    fetchMyDevices: typeof fetchDeviceAsync.request;
}

function MyDevices(props: MyDevicesProps) {
    const { deviceList } = props;

    useEffect(() => {
        props.fetchMyDevices();
    }, []);

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="h5">
                        My Devices
                    </Typography>
                </Grid>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
                    <Button variant="contained" color="primary" href='/home/dashboard/device/add'><Add /> Add Devices</Button>
                </Grid>
            </Grid>
            <Box pt={5}></Box>
            <ImageList cols={3} gap={12}>
                {deviceList.map((item, i) =>
                    <ImageListItem>
                        <DeviceContainer address={item.address} password={item.password} port={item.port} userName={item.userName} deviceName={item.deviceName} />
                    </ImageListItem>)
                }
            </ImageList>
        </React.Fragment>
    );
}

const mapStateToProps = (state: DeviceState) => {
    return {
        deviceList: state.deviceListState.myDevices,
    };
};

const dispatchToProps = {
    fetchMyDevices: fetchDeviceAsync.request,
};

const ConnectedMyDevices = connect(mapStateToProps, dispatchToProps)(MyDevices);

export const MyDevicesComponent = () => (
    <DynamicModuleLoader modules={[DeviceModule]}>
        <ConnectedMyDevices></ConnectedMyDevices>
    </DynamicModuleLoader>
);
