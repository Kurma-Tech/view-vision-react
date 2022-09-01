import { createAsyncAction, ActionType } from 'typesafe-actions';
import { UserAuthInfo } from '../types/userAuthInfo';
import * as dataTypes from '../types';

/*
 *  THE FOLLOWING CODES DENOTES TO DO ASYNC ACTIONS
 */
export const fetchLoginAsync = createAsyncAction(
    '@AUTH/LOGIN_REQUEST',
    '@AUTH/LOGIN_SUCCESS',
    '@AUTH/LOGIN_FAILURE',
    '@AUTH/LOGIN_CANCEL',
)<dataTypes.LoginDetails, UserAuthInfo, Error, string>();

export const fetchRegisterAsync = createAsyncAction(
    '@AUTH/REGISTER_REQUEST',
    '@AUTH/REGISTER_SUCCESS',
    '@AUTH/REGISTER_FAILURE',
    '@AUTH/REGISTER_CANCEL',
)<dataTypes.RegisterDetails, UserAuthInfo, Error, string>();

export const fetchBusinessRegisterAsync = createAsyncAction(
    '@AUTH/BUSINESS_REGISTER_REQUEST',
    '@AUTH/BUSINESS_REGISTER_SUCCESS',
    '@AUTH/BUSINESS_REGISTER_FAILURE',
    '@AUTH/BUSINESS_REGISTER_CANCEL',
)<dataTypes.RegisterDetails, UserAuthInfo, Error, string>();

export const fetchAuthAsync = createAsyncAction(
    '@AUTH/AUTH_REQUEST',
    '@AUTH/AUTH_SUCCESS',
    '@AUTH/AUTH_FAILURE',
    '@AUTH/AUTH_CANCEL',
)<undefined, UserAuthInfo, Error, string>();

export const fetchLogoutAsync = createAsyncAction(
    '@AUTH/LOGOUT_REQUEST',
    '@AUTH/LOGOUT_SUCCESS',
    '@AUTH/LOGOUT_FAILURE',
    '@AUTH/LOGOUT_CANCEL',
)<undefined, boolean, Error, string>();

export type authActionTypes = ActionType<
    typeof fetchLoginAsync | typeof fetchRegisterAsync | typeof fetchAuthAsync | typeof fetchLogoutAsync
>;
