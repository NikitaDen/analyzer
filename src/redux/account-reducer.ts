import {authAPI, baseURL, refreshToken} from "../api/api";
import {getExpenses} from "./history-reducer";
import axios from "axios";
import {ActionCreator} from "./interfaces";
import { Dispatch } from "redux";

const USER_LOGIN = 'USER_LOGIN';
const GET_USER = 'GET_USER';
const SHOW_LOADING = 'SHOW_LOADING';
const LOGIN_LOADING = 'LOGIN_LOADING';
const INFO = 'INFO';

type InitialState = {
    isAuth: boolean,
    isLoading: boolean,
    isLoginLoading: boolean,
    info: string,
}

const initialState: InitialState = {
    isAuth: !!localStorage.getItem('isAuth') || false,
    isLoading: false,
    isLoginLoading: false,
    info: '',
};

const accountReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case INFO:
            return {
                ...state,
                info: action.info,
            };
        case LOGIN_LOADING:
            return {
                ...state,
                isLoginLoading: action.isLoading,
            };
        case USER_LOGIN: {
            localStorage.setItem('isAuth', JSON.stringify(action.isAuth));
            return {...state, isAuth: action.isAuth};
        }
        case GET_USER: {
            const isAuth = JSON.parse(localStorage.getItem('isAuth') || '[]') || false;
            return {...state, isAuth};
        }
        default:
            return state;
    }
};

export const userLogin = (isAuth: boolean): ActionCreator<typeof USER_LOGIN> => ({type: USER_LOGIN, isAuth});
export const setInfo = (info: string): ActionCreator<typeof INFO> => ({type: INFO, info});
export const getUser = (): ActionCreator<typeof GET_USER> => ({type: GET_USER});
export const showLoading = (isLoading: boolean): ActionCreator<typeof SHOW_LOADING> => ({type: SHOW_LOADING, isLoading});
export const loginLoading = (isLoading: boolean): ActionCreator<typeof LOGIN_LOADING> => ({type: LOGIN_LOADING, isLoading});

export const userLoginThunkCreator = (email: string, password: string) => async (dispatch: Dispatch) => {
    dispatch(loginLoading(true));

    try {
        const response = await axios.post(`${baseURL}/user/login`, {email, password}, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.data) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            dispatch(loginLoading(false));
            dispatch(userLogin(true));
        }
    } catch (e) {
        dispatch(loginLoading(false));
        dispatch(userLogin(false));
        dispatch(setInfo(e.response.data));
    }
};

export const userRegisterThunkCreator = (name: string, email: string, password: string) => async (dispatch: Dispatch) => {
    dispatch(loginLoading(true));

    try {
        const response = await authAPI.register(name, email, password);
        if (response.data) {
            dispatch(loginLoading(false));
            dispatch(userLogin(false));
            dispatch(setInfo('ok'));
        }
    } catch (e) {
        dispatch(loginLoading(false));
        dispatch(setInfo(e.response.data));
    }
};

export const userLogoutThunkCreator = () => async (dispatch: Dispatch) => {
    dispatch(userLogin(false));
    dispatch(getExpenses([]));

    try {
        await axios.post(`${baseURL}/user/logout`, {}, {
            headers: {
                'token': `${localStorage.getItem('token')}`
            }
        });

        localStorage.setItem('token', '');
        localStorage.setItem('refreshToken', '');
    } catch (e) {
        await refreshToken('/user/logout', {}, axios.post, dispatch);

        localStorage.setItem('token', '');
        localStorage.setItem('refreshToken', '');
    }
};

export default accountReducer;