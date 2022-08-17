import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../shared/auth/actions/actions';
import { AuthState } from '../shared/auth/types';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { LoginContainer } from '../feature/login/containers/loginContainer';
import { RegisterContainer } from '../feature/register/containers/registerContainer';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: "#010000",
        width: '100%',
        minHeight: '100vh',
        display: 'grid',
        margin: 0,
        placeItems: 'center center',
    },
}));

type LandingProps = {
    name: string;
    isLoggedIn: boolean;
    login: typeof actionTypes.fetchLoginAsync.request;
}

const Landing = (props: LandingProps) => {
    const { isLoggedIn } = props;
    const match = useRouteMatch();
    const classes = useStyles();

    return (!isLoggedIn) ? (
        <div className={classes.container}>
            <CssBaseline />
            <Switch>
                <Redirect exact from="/" to="login" />
                <Route exact path={`${match.url}login`} render={() => <LoginContainer />} />
                <Route exact path={`${match.url}register`} render={() => <RegisterContainer />} />
            </Switch>
        </div>
    ) : (
        <Redirect to={{ pathname: '/home' }} />
    );
};

const mapStateToProps = (state: AuthState) => {
    return {
        isLoggedIn: state.authState.isLoggedIn,
        name: state.authState.name,
    };
};

const dispatchToProps = {
    login: actionTypes.fetchLoginAsync.request,
};

export const LandingContainer = connect(mapStateToProps, dispatchToProps)(Landing);
