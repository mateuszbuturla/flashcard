import React from "react"

import ErrorInputValid from '../ErrorInputValid';

const LoginForm = ({ submitLoginForm, currentForm, handleInputChange, loginLogin, loginLoginValid, loginPassword, loginPasswordValid }) => {
    return (
        <form onSubmit={submitLoginForm.bind(this)} className={`form form--shadowNone${currentForm === 'login' ? '' : ' form--none'}`}>
            <input
                type="text"
                id="loginLogin"
                placeholder="Nazwa użytkownika"
                className="form__input"
                onChange={handleInputChange.bind(this)}
                value={loginLogin}
            />
            <ErrorInputValid valid={loginLoginValid} message="To pole jest wymagane" />
            <input
                type="password"
                id="loginPassword"
                placeholder="Hasło"
                className="form__input"
                onChange={handleInputChange.bind(this)}
                value={loginPassword}
            />
            <ErrorInputValid valid={loginPasswordValid} message="To pole jest wymagane" />
            <input
                type="submit"
                value="Zaloguj się"
                className="form__submit button button--gradient"
            />
        </form>
    )
}

export default LoginForm