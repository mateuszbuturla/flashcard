import React from "react"

const RegisterForm = ({ submitRegisterForm, currentForm, handleInputChange, registerLogin, registerLoginValid, registerPassword, registerPasswordValid, registerRepeatPassword, registerRepeatPasswordValid }) => {
    return (
        <form onSubmit={submitRegisterForm.bind(this)} className={`login-register-form${currentForm === 'register' ? ' login-register-form--active' : ''}`}>
            <input
                type="text"
                id="registerLogin"
                placeholder="Nazwa użytkownika"
                className="login-register-form__input"
                onChange={handleInputChange.bind(this)}
                value={registerLogin}
            />
            {
                registerLoginValid === false &&
                <div className="login-register__error">
                    <p>Za krótka nazwa użytkownika</p>
                </div>
            }
            <input
                type="password"
                id="registerPassword"
                placeholder="Hasło"
                className="login-register-form__input"
                onChange={handleInputChange.bind(this)}
                value={registerPassword}
            />
            {
                registerPasswordValid === false &&
                <div className="login-register__error">
                    <p className="login-register__error">Za krótkie hasło</p>
                </div>
            }
            <input
                type="password"
                id="registerRepeatPassword"
                placeholder="Powtórz hasło"
                className="login-register-form__input"
                onChange={handleInputChange.bind(this)}
                value={registerRepeatPassword}
            />
            {
                registerRepeatPasswordValid === false &&
                <div className="login-register__error">
                    <p className="login-register__error">Podane hasła nie są identyczne</p>
                </div>
            }
            <input
                type="submit"
                value="Zarejestuj się"
                className="login-register-form__submit"
            />
        </form>
    )
}

export default RegisterForm