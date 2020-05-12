import React from "react"

import ErrorInputValid from '../ErrorInputValid';

const RegisterForm = ({ submitRegisterForm, currentForm, handleInputChange, registerLogin, registerLoginValid, registerPassword, registerPasswordValid, registerRepeatPassword, registerRepeatPasswordValid }) => {
    document.title = 'Fiszki - Rejestracja'
    return (
        <form onSubmit={submitRegisterForm.bind(this)} className={`form form--shadowNone${currentForm === 'register' ? '' : ' form--none'}`}>
            <input
                type="text"
                id="registerLogin"
                placeholder="Nazwa użytkownika"
                className="form__input"
                onChange={handleInputChange.bind(this)}
                value={registerLogin}
            />
            <ErrorInputValid valid={registerLoginValid} message="Za krótka nazwa użytkownika" />
            <input
                type="password"
                id="registerPassword"
                placeholder="Hasło"
                className="form__input"
                onChange={handleInputChange.bind(this)}
                value={registerPassword}
            />
            <ErrorInputValid valid={registerPasswordValid} message="Za krótkie hasło" />
            <input
                type="password"
                id="registerRepeatPassword"
                placeholder="Powtórz hasło"
                className="form__input"
                onChange={handleInputChange.bind(this)}
                value={registerRepeatPassword}
            />
            <ErrorInputValid valid={registerRepeatPasswordValid} message="Podane hasła nie są identyczne" />
            <input
                type="submit"
                value="Zarejestuj się"
                className="form__submit button button--gradient"
            />
        </form>
    )
}

export default RegisterForm