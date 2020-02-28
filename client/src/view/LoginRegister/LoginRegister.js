import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import Nav from '../../components/Home/Nav';
import SelectFormButton from '../../components/LoginRegister/SelectFormButton';
import Message from '../../components/LoginRegister/Message';
import LoginForm from '../../components/LoginRegister/LoginForm';
import RegisterForm from '../../components/LoginRegister/RegisterForm';
import Footer from '../../components/FullWidthFooter/Footer';

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
                <Nav />
                <section className="login-register">
                    <div className="login-register-form-container">
                        <SelectFormButton changeForm={this.changeForm.bind(this)} currentForm={currentForm} />
                        <Message message={message} />
                        <LoginForm
                            submitLoginForm={this.submitLoginForm.bind(this)}
                            currentForm={currentForm}
                            handleInputChange={this.handleInputChange.bind(this)}
                            loginLogin={loginLogin}
                            loginLoginValid={loginLoginValid}
                            loginPassword={loginPassword}
                            loginPasswordValid={loginPasswordValid}
                        />
                        <RegisterForm
                            submitRegisterForm={this.submitRegisterForm.bind(this)}
                            currentForm={currentForm}
                            handleInputChange={this.handleInputChange.bind(this)}
                            registerLogin={registerLogin}
                            registerLoginValid={registerLoginValid}
                            registerPassword={registerPassword}
                            registerPasswordValid={registerPasswordValid}
                            registerRepeatPassword={registerRepeatPassword}
                            registerRepeatPasswordValid={registerRepeatPasswordValid}
                        />
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}

export default LoginRegister;
