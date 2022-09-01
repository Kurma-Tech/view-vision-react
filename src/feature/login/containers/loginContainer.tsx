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
import { fetchLoginAsync } from '../../../shared/auth/actions/actions';
import { AuthModule } from '../../../shared/auth/module/module';
import { useStyles } from '../../../shared/auth/styles/auth';
import { authTheme } from '../../../shared/auth/styles/authTheme';
import { LoginDetails } from '../../../shared/auth/types/authDetails';

interface LoginProps {
    login: typeof fetchLoginAsync.request;
}

function Login(props: LoginProps) {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                        <Typography component="h5" variant="h6">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
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
                                InputLabelProps={{ shrink: false }}
                                onChange={onChangeEmail}
                                className={classes.textfield}
                                InputProps={{
                                    className: classes.multilineColor,
                                }}
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
                                className={classes.textfield}
                                InputLabelProps={{ shrink: false }}
                                InputProps={{
                                    className: classes.multilineColor,
                                }}
                            />
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                disableElevation={true}
                                color="primary"
                                className={classes.submit}
                                onClick={() => {
                                    props.login({
                                        email: email,
                                        password: password,
                                    });
                                }}
                            >
                                Sign In
                            </Button>
                            <Grid container alignItems="center">
                                <Grid item xs={12} sm container justify="center">
                                    <Link href="/register" variant="body2" color="textSecondary">
                                        Don't have an account?{' '}
                                        <span className={classes.signRegisterColor}>Sign Up</span>
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
    login: fetchLoginAsync.request,
};

const ConnectedLogin = connect(undefined, dispatchToProps)(Login);

export const LoginContainer = () => (
    <DynamicModuleLoader modules={[AuthModule]}>
        <ConnectedLogin></ConnectedLogin>
    </DynamicModuleLoader>
);
