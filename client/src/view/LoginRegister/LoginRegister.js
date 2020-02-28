import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import LoginForm from '../../components/LoginRegister/LoginForm';

import './loginRegister.sass';

class LoginRegister extends React.Component {

    state = {
        currentForm: 'login',
        registerLogin: '',
        registerPassword: '',
        registerRepeatPassword: '',
        registerLoginValid: true,
        registerPasswordValid: true,
        registerRepeatPasswordValid: true,
        loginLogin: '',
        loginPassword: '',
        loginLoginValid: true,
        loginPasswordValid: true,
        message: ''
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    componentDidMount() {
        const { form } = this.props;
        this.setState({ currentForm: form })
    }

    changeForm(e) {
        e.preventDefault();
        this.setState({ currentForm: e.target.id })
    }

    submitLoginForm(e) {
        e.preventDefault();
        const cookies = new Cookies();
        const { loginLogin, loginPassword } = this.state;
        const { config, getUser } = this.props;
        let loginValid = true, passwordValid = true;

        if (loginLogin === '')
            loginValid = false;

        if (loginPassword === '')
            passwordValid = false;

        this.setState({ loginLoginValid: loginValid, loginPasswordValid: passwordValid });

        if (loginValid && passwordValid) {
            try {
                fetch(`${config.api}/api/user/auth/${loginLogin}/${loginPassword}`, { method: 'POST' })
                    .then(r => r.json())
                    .then(r => {
                        if (r.status === 'correct') {
                            cookies.set('user', r.user);
                            getUser();
                        }
                        else if (r.status === 'incorrect') {
                            this.setState({ message: 'Nie prawidłowe dane logowania', loginPassword: '' })
                        }
                    })
            }
            catch {
                this.setState({ message: 'Wystąpił błąd spróbuj ponownie później' })
            }
        }
    }

    submitRegisterForm(e) {
        e.preventDefault();
        const { registerLogin, registerPassword, registerRepeatPassword } = this.state;
        const { config } = this.props;
        let loginValid = true, passwordValid = true, passwordRepeatValid = true;

        if (registerLogin.length < 5)
            loginValid = false;

        if (registerPassword.length < 8)
            passwordValid = false;

        if (registerPassword !== registerRepeatPassword)
            passwordRepeatValid = false;

        this.setState({ registerLoginValid: loginValid, registerPasswordValid: passwordValid, registerRepeatPasswordValid: passwordRepeatValid })
        if (loginValid && passwordValid && passwordRepeatValid) {
            try {
                fetch(`${config.api}/api/user/register/${registerLogin}/${registerPassword}`, { method: 'POST' })
                    .then(r => r.json())
                    .then(r => {
                        if (r.status === 'correct') {
                            this.setState({ message: 'Twoje konto zostało zarejestrowane', registerLogin: '', registerPassword: '', registerRepeatPassword: '' })
                        }
                        else if (r.status === 'incorrect') {
                            this.setState({ message: 'Nie prawidłowe dane rejestracji' })
                        }
                    })
            }
            catch {
                this.setState({ message: 'Wystąpił błąd spróbuj ponownie później' })
            }
        }
    }

    render() {
        const { currentForm, registerLogin, registerPassword, registerRepeatPassword, registerLoginValid, registerPasswordValid, registerRepeatPasswordValid, loginLogin, loginPassword, loginLoginValid, loginPasswordValid, message } = this.state;
        const { user } = this.props;

        return (
            <>
                {
                    user !== undefined &&
                    <Redirect to='/dashboard' />
                }
                <nav className="home-nav">
                    <Link to='/login'>
                        <button className="home-nav__button">Zaloguj się</button>
                    </Link>
                    <Link to='/register'>
                        <button className="home-nav__button home-nav__button--gradient">Zarejestruj się</button>
                    </Link>
                </nav>

                <section className="login-register">
                    <div className="login-register-form-container">
                        <div className="select-form-input">
                            <button id="login" onClick={this.changeForm.bind(this)} className={`select-form-input__button${currentForm === 'login' ? ' select-form-input__button--active' : ''}`}>Logowanie</button>
                            <button id="register" onClick={this.changeForm.bind(this)} className={`select-form-input__button${currentForm === 'register' ? ' select-form-input__button--active' : ''}`}>Rejestracja</button>
                        </div>

                        {message !== '' && <p className="login-register__message">{message}</p>}

                        <LoginForm
                            submitLoginForm={this.submitLoginForm.bind(this)}
                            currentForm={currentForm}
                            handleInputChange={this.handleInputChange.bind(this)}
                            loginLogin={loginLogin}
                            loginLoginValid={loginLoginValid}
                            loginPassword={loginPassword}
                            loginPasswordValid={loginPasswordValid}
                        />

                        <form onSubmit={this.submitRegisterForm.bind(this)} className={`login-register-form${currentForm === 'register' ? ' login-register-form--active' : ''}`}>
                            <input
                                type="text"
                                id="registerLogin"
                                placeholder="Nazwa użytkownika"
                                className="login-register-form__input"
                                onChange={this.handleInputChange.bind(this)}
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
                                onChange={this.handleInputChange.bind(this)}
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
                                onChange={this.handleInputChange.bind(this)}
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
                    </div>
                </section>

                <footer className="home-footer">
                    Mateusz Buturla 2020
                </footer>
            </>
        );
    }
}

export default LoginRegister;
