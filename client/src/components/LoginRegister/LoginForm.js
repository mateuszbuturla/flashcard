import React from "react"

const LoginForm = ({ submitLoginForm, currentForm, handleInputChange, loginLogin, loginLoginValid, loginPassword, loginPasswordValid }) => {
    return (
        <form onSubmit={submitLoginForm.bind(this)} className={`login-register-form${currentForm === 'login' ? ' login-register-form--active' : ''}`}>
            <input
                type="text"
                id="loginLogin"
                placeholder="Nazwa użytkownika"
                className="login-register-form__input"
                onChange={handleInputChange.bind(this)}
                value={loginLogin}
            />
            {
                loginLoginValid === false &&
                <div className="login-register__error">
                    <p>To pole jest wymagane</p>
                </div>
            }
            <input
                type="password"
                id="loginPassword"
                placeholder="Hasło"
                className="login-register-form__input"
                onChange={handleInputChange.bind(this)}
                value={loginPassword}
            />
            {
                loginPasswordValid === false &&
                <div className="login-register__error">
                    <p>To pole jest wyamagane</p>
                </div>
            }
            <input
                type="submit"
                value="Zaloguj się"
                className="login-register-form__submit"
            />
        </form>
    )
}

export default LoginForm