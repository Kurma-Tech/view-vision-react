import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardContent, CardActions, colors, Box } from '@material-ui/core';
import { DeviceInfo } from '../types';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        backgroundColor: colors.grey[100],
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export const DeviceContainer = (device: DeviceInfo) => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);

    let history = useHistory();

    const goStreamPage = (url1?: string, url2?: string, url3?: string, url4?: string) => {
        history.push({
            pathname: '/home/dashboard/device/stream',
            state: { streamUrl1: url1, streamUrl2: url2, streamUrl3: url3, streamUrl4: url4, }
        });
    };

    async function handleViewStream() {
        try {
            setIsLoading(true);
            var response1 = null;
            var response2 = null;
            var response3 = null;
            var response4 = null;
            try {
                response1 = await axios.post('http://139.162.230.224/test', {
                    address: device.address.toString(),
                    port: device.port.toString(),
                    username: device.userName.toString(),
                    password: device.password.toString(),
                    channel: "102"
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                });
            } catch (error) {
                console.log(error);
            }
            try {
                response2 = await axios.post('http://139.162.230.224/test', {
                    address: device.address.toString(),
                    port: device.port.toString(),
                    username: device.userName.toString(),
                    password: device.password.toString(),
                    channel: "202"
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                });
            } catch (error) {
                console.log(error);
            }
            try {
                response3 = await axios.post('http://139.162.230.224/test', {
                    address: device.address.toString(),
                    port: device.port.toString(),
                    username: device.userName.toString(),
                    password: device.password.toString(),
                    channel: "302"
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                });
            } catch (error) {
                console.log(error);
            }
            try {
                response4 = await axios.post('http://139.162.230.224/test', {
                    address: device.address.toString(),
                    port: device.port.toString(),
                    username: device.userName.toString(),
                    password: device.password.toString(),
                    channel: "402"
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    }
                });
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);
            goStreamPage(response1?.data.data.streamUrl, response2?.data.data.streamUrl, response3?.data.data.streamUrl, response4?.data.data.streamUrl);
        } catch (error) {
            setIsLoading(false);
        }


    }
    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardContent>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {device.deviceName}
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Active
                        </Typography>
                    </Box>
                    <Typography variant="h5" component="h2">
                        {device.address}:{device.port}
                    </Typography>
                    <Typography color="textSecondary">
                        Description
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color='primary' disabled={isLoading} onClick={() => {
                        handleViewStream();
                    }}>{(isLoading) ? "Starting" : "View Stream"}</Button>
                    <Button size="small" color='default'>Share</Button>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}
