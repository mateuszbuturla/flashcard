import React from 'react';
import { Link } from 'react-router-dom';

import './loginRegister.sass';

class LoginRegister extends React.Component {

    state = {
        currentForm: 'login'
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
    }

    submitRegisterForm(e) {
        e.preventDefault();
    }

    render() {
        const { currentForm } = this.state;

        return (
            <>
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
                        <form onSubmit={this.submitLoginForm.bind(this)} className={`login-register-form${currentForm === 'login' ? ' login-register-form--active' : ''}`}>
                            <input type="text" id="login-login" placeholder="Nazwa użytkownika" className="login-register-form__input" />
                            <input type="password" id="login-password" placeholder="Hasło" className="login-register-form__input" />
                            <input type="submit" value="Zaloguj się" className="login-register-form__submit" />
                        </form>
                        <form onSubmit={this.submitRegisterForm.bind(this)} className={`login-register-form${currentForm === 'register' ? ' login-register-form--active' : ''}`}>
                            <input type="text" id="register-login" placeholder="Nazwa użytkownika" className="login-register-form__input" />
                            <input type="password" id="register-password" placeholder="Hasło" className="login-register-form__input" />
                            <input type="repeatPassword" id="register-repeat-password" placeholder="Powtórz hasło" className="login-register-form__input" />
                            <input type="submit" value="Zarejestuj się" className="login-register-form__submit" />
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
