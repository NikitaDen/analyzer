import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getUser, userLoginThunkCreator} from "../../redux/account-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import './login.scss';
import Loader from "../Loader/Loader";
import {
    infoSelector,
    isAuthSelector,
    isLoadingSelector,
    isLoginLoadingSelector
} from "../../selectors/account-selectors";
import Intro from "../Intro/Intro";

type Props = {
    isAuth: boolean,
    isLoading: boolean,
    isLoginLoading: boolean,
    info: string,
    userLoginThunkCreator: (email: string, password: string) => void,
    getUser: () => void,
    history: Array<string>
}

const Login: React.FC<Props> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        props.getUser();
    }, []);

    const onLoginClick = () => {
        props.userLoginThunkCreator(email, password);
    };

    const onRegisterClick = () => {
        props.history.push('register');
    };


    if (!props.isAuth) {
        return (
            <>
                {
                    props.isLoginLoading ? <Loader/> : <form className={'login'}>
                        <h3>Login</h3>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div>
                            <button className={'button'} onClick={onLoginClick}>Sign In</button>
                            or
                            <button className={'button'} onClick={onRegisterClick}>Sign Up</button>
                        </div>
                        <p className={'error-message'}>{props.info === 'ok' ? null : props.info}</p>
                    </form>
                }
                <Intro/>
            </>
        )
    }

    return <Redirect to={'/history'}/>

};

const mapStateToProps = (store: any) => ({
    isAuth: isAuthSelector(store),
    isLoading: isLoadingSelector(store),
    isLoginLoading: isLoginLoadingSelector(store),
    info: infoSelector(store),
});

export default compose(
    connect(mapStateToProps, {userLoginThunkCreator, getUser}),
    withRouter
)(Login);