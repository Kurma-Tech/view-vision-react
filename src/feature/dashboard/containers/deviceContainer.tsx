import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
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

    const goHome = (url: string) => {
        history.push({
            pathname: '/home/dashboard/device/stream',
            state: { streamUrl: url }
        });
    };

    async function handleViewStream() {
        try {
            setIsLoading(true);
            const response = await axios.post('http://139.162.230.224/test', {
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
            setIsLoading(false);
            goHome(response.data.data.streamUrl);
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
