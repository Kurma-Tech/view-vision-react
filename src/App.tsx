import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { HomeContainer } from './routes/home';
import * as actionTypes from '../src/shared/auth/actions/actions';
import { LandingContainer } from './routes/landing';
import { AuthMainStateType } from '../src/shared/auth/types';


type Props = {
    authenticate: typeof actionTypes.fetchAuthAsync.request;
};

const AppRef = (props: Props) => {
    useEffect(() => {
        console.log("here");

        props.authenticate();
    }, []);
    return (
        <>
            <Switch>
                <Route path="/home" render={() => <HomeContainer />}></Route>
                <Route path="/" render={() => <LandingContainer />}></Route>
            </Switch>
        </>
    );
};

const dispatchToProps = {
    authenticate: actionTypes.fetchAuthAsync.request,
};

export const App = connect(undefined, dispatchToProps)(AppRef);
