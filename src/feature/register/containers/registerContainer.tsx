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
} from '@material-ui/core';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { connect } from 'react-redux';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { fetchRegisterAsync } from '../../../shared/auth/actions/actions';
import { AuthModule } from '../../../shared/auth/module/module';
import { useStyles } from '../../../shared/auth/styles/auth';
import { authTheme } from '../../../shared/auth/styles/authTheme';

interface RegisterProps {
    register: typeof fetchRegisterAsync.request;
}

function Register(props: RegisterProps) {
    const classes = useStyles();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h5" variant="h5">
                            Sign Up
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        name="firstName"
                                        autoComplete="off"
                                        autoFocus
                                        onChange={onChangeFirstname}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="off"
                                        autoFocus
                                        onChange={onChangeLastname}
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="off"
                                autoFocus
                                onChange={onChangeEmail}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                color="primary"
                                onChange={onChangePassword}
                            />
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}

                                onClick={() => {
                                    props.register(
                                        {
                                            firstname: firstname,
                                            lastname: lastname,
                                            email: email,
                                            password: password,
                                        }
                                    )
                                }}
                            >
                                Register
                            </Button>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm container justify="center">
                                    <Link href="/login" variant="body2" color="textPrimary">
                                        Already have an account? Login
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </MuiThemeProvider>
        </React.Fragment>
    );
}

const dispatchToProps = {
    register: fetchRegisterAsync.request,
};

const ConnectedRegister = connect(undefined, dispatchToProps)(Register);

export const RegisterContainer = () => (
    <DynamicModuleLoader modules={[AuthModule]}>
        <ConnectedRegister></ConnectedRegister>
    </DynamicModuleLoader>
);
