import React, { useState } from 'react';
import { Typography, Grid, Button, GridList, Container, TextField, Box, colors } from '@material-ui/core';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import { Add } from '@material-ui/icons'
import * as actionTypes from '../actions/actions';
import { DeviceContainer } from '../containers/deviceContainer';
import { connect } from 'react-redux';
import { DeviceState } from '../types';

interface MyDevicesProps {
    addDevice: typeof actionTypes.addDeviceAsync.request;
    addDeviceSuccess: boolean;
}

export function AddDevice(props: MyDevicesProps) {
    const [address, setAddress] = useState("");
    const [deviceName, setDeviceName] = useState("");
    const [port, setPort] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeDeviceName = (e: any) => {
        const deviceName = e.target.value;
        setDeviceName(deviceName);
    };
    const onChangeAddress = (e: any) => {
        const address = e.target.value;
        setAddress(address);
    };
    const onChangePort = (e: any) => {
        const port = e.target.value;
        setPort(port);
    };
    const onChangeUsername = (e: any) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };
    return (!props.addDeviceSuccess) ? (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="h5">
                        Add Device
                    </Typography>
                </Grid>
                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'end' }}>
                </Grid>
            </Grid>
            <Box pt={5}></Box>
            <Container maxWidth="sm" style={{ backgroundColor: colors.grey[50] }}>
                <form noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="deviceName"
                        label="Device Name"
                        name="deviceName"
                        autoComplete="off"
                        autoFocus
                        onChange={onChangeDeviceName}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="IP Address"
                        name="address"
                        autoComplete="off"
                        autoFocus
                        onChange={onChangeAddress}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="port"
                        label="Port"
                        name="port"
                        autoComplete="off"
                        autoFocus
                        onChange={onChangePort}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="off"
                        autoFocus
                        onChange={onChangeUsername}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="off"
                        autoFocus
                        onChange={onChangePassword}
                    />
                    <Box pb={3}></Box>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            props.addDevice(
                                {
                                    address: address,
                                    port: port,
                                    userName: username,
                                    password: password,
                                    deviceName: deviceName,
                                }
                            )
                        }}
                    >
                        Add Device
                    </Button>
                </form>
            </Container>

        </React.Fragment>
    ) : <Redirect to={{ pathname: '/' }} />;
}

const mapStateToProps = (state: DeviceState) => {
    return {
        addDeviceSuccess: state.deviceListState.deviceAddSuccess,
    };
};

const dispatchToProps = {
    addDevice: actionTypes.addDeviceAsync.request,
};

export const AddDeviceComponent = connect(mapStateToProps, dispatchToProps)(AddDevice);

// export const MyDevicesComponent = () => (
//     <DynamicModuleLoader modules={[DeviceModule]}>
//         <ConnectedMyDevices></ConnectedMyDevices>
//     </DynamicModuleLoader>
// );
