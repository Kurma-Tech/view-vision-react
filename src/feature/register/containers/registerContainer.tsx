import React, { useState } from 'react';
import {
    Typography,
    Button,
    Container,
    CssBaseline,
    Avatar,
    TextField,
    FormControlLabel,
    Grid,
    Link,
    Checkbox,
    MuiThemeProvider,
    Tabs,
    Tab,
} from '@material-ui/core';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { connect } from 'react-redux';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { fetchRegisterAsync, fetchBusinessRegisterAsync } from '../../../shared/auth/actions/actions';
import { AuthModule } from '../../../shared/auth/module/module';
import { useStyles } from '../../../shared/auth/styles/auth';
import { authTheme } from '../../../shared/auth/styles/authTheme';

interface RegisterProps {
    register: typeof fetchRegisterAsync.request;
    businessRegister: typeof fetchBusinessRegisterAsync.request;
}

function Register(props: RegisterProps) {
    const classes = useStyles();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [phone, setphone] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [value, setValue] = useState(0);

    const handleTabs = (e: any, val: any) => {
        setValue(val);
    };

    const onChangeFirstname = (e: any) => {
        const firstname = e.target.value;
        setFirstname(firstname);
    };

    const onChangeLastname = (e: any) => {
        const lastname = e.target.value;
        setLastname(lastname);
    };

    const onChangeEmail = (e: any) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangeBusinessName = (e: any) => {
        const businessName = e.target.value;
        setBusinessName(businessName);
    };
    const onChangePhone = (e: any) => {
        const phoneDetails = e.target.value;
        setphone(phoneDetails);
    };
    const onChangeStreetAddress = (e: any) => {
        const streetAddress = e.target.value;
        setStreetAddress(streetAddress);
    };

    const onChangePassword = (e: any) => {
        const password = e.target.value;
        setPassword(password);
    };

    return (
        <React.Fragment>
            <MuiThemeProvider theme={authTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h5" variant="h6">
                            Sign Up
                        </Typography>
                        <form className={classes.form} noValidate>
                            <div>
                                <Tabs
                                    value={value}
                                    onChange={handleTabs}
                                    className={classes.tabs}
                                    TabIndicatorProps={{
                                        style: {
                                            display: 'none',
                                        },
                                    }}
                                    style={{ height: '32px' }}
                                    variant="fullWidth"
                                >
                                    <Tab
                                        label="Personal"
                                        className={classes.tab}
                                        style={{
                                            backgroundColor: value == 0 ? 'var(--main-bg-color)' : 'transparent',
                                            color: value == 0 ? 'white' : 'var(--main-bg-color)',
                                        }}
                                    />
                                    <Tab
                                        label="Business"
                                        className={classes.tab}
                                        style={{
                                            backgroundColor: value == 1 ? 'var(--main-bg-color)' : 'transparent',
                                            color: value == 1 ? 'white' : 'var(--main-bg-color)',
                                        }}
                                    />
                                </Tabs>

                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label={firstname ? '' : 'First Name'}
                                            value={firstname}
                                            name="firstName"
                                            autoComplete="off"
                                            autoFocus
                                            InputProps={{
                                                className: classes.multilineColor,
                                            }}
                                            InputLabelProps={{ shrink: false }}
                                            onChange={onChangeFirstname}
                                            className={classes.textfield}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label={lastname ? '' : 'Last Name'}
                                            value={lastname}
                                            name="lastName"
                                            autoComplete="off"
                                            autoFocus
                                            onChange={onChangeLastname}
                                            className={classes.textfield}
                                            InputProps={{
                                                className: classes.multilineColor,
                                            }}
                                            InputLabelProps={{ shrink: false }}
                                        />
                                    </Grid>
                                </Grid>
                                {value == 1 ? (
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        id="businessName"
                                        label={businessName ? '' : 'Business Name'}
                                        name="businessName"
                                        value={businessName}
                                        autoComplete="off"
                                        autoFocus
                                        onChange={onChangeBusinessName}
                                        InputProps={{
                                            className: classes.multilineColor,
                                        }}
                                        className={classes.textfield}
                                        InputLabelProps={{ shrink: false }}
                                    />
                                ) : (
                                    <></>
                                )}
                                {value == 1 ? (
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        id="phone"
                                        label={phone ? '' : 'Phone'}
                                        name="phone"
                                        value={phone}
                                        // type="number"
                                        autoComplete="off"
                                        autoFocus
                                        onChange={onChangePhone}
                                        InputProps={{
                                            className: classes.multilineColor,
                                        }}
                                        className={classes.textfield}
                                        InputLabelProps={{ shrink: false }}
                                    />
                                ) : (
                                    <></>
                                )}
                                {value == 1 ? (
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        id="streetAddress"
                                        label={streetAddress ? '' : 'Street Address'}
                                        name="streetAddress"
                                        value={streetAddress}
                                        autoComplete="off"
                                        autoFocus
                                        onChange={onChangeStreetAddress}
                                        InputProps={{
                                            className: classes.multilineColor,
                                        }}
                                        className={classes.textfield}
                                        InputLabelProps={{ shrink: false }}
                                    />
                                ) : (
                                    <> </>
                                )}
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label={email ? '' : 'Email address'}
                                    name="email"
                                    value={email}
                                    autoComplete="off"
                                    autoFocus
                                    onChange={onChangeEmail}
                                    InputProps={{
                                        className: classes.multilineColor,
                                    }}
                                    className={classes.textfield}
                                    InputLabelProps={{ shrink: false }}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    value={password}
                                    label={password ? '' : 'Password'}
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    color="primary"
                                    onChange={onChangePassword}
                                    InputProps={{
                                        className: classes.multilineColor,
                                    }}
                                    className={classes.textfield}
                                    InputLabelProps={{ shrink: false }}
                                />
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disableElevation={true}
                                    onClick={() => {
                                        if (value == 0) {
                                            props.register({
                                                firstname: firstname,
                                                lastname: lastname,
                                                email: email,
                                                password: password,
                                            });
                                        } else {
                                            props.businessRegister({
                                                firstname: firstname,
                                                lastname: lastname,
                                                email: email,
                                                password: password,
                                                business_name: businessName,
                                                phone: phone,
                                                street_address: streetAddress,
                                            });
                                        }
                                    }}
                                >
                                    Register
                                </Button>
                                <Grid container alignItems="center">
                                    <Grid item xs={12} sm container justify="center">
                                        <Link href="/login" variant="body2" color="textSecondary">
                                            Already have an account?{' '}
                                            <span className={classes.signRegisterColor}>Sign In</span>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </form>
                    </div>
                </Container>
            </MuiThemeProvider>
        </React.Fragment>
    );
}

const dispatchToProps = {
    register: fetchRegisterAsync.request,
    businessRegister: fetchBusinessRegisterAsync.request,
};

const ConnectedRegister = connect(undefined, dispatchToProps)(Register);

export const RegisterContainer = () => (
    <DynamicModuleLoader modules={[AuthModule]}>
        <ConnectedRegister></ConnectedRegister>
    </DynamicModuleLoader>
);
