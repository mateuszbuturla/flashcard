import React from 'react';

import PasswordValidation from '../../validation/PasswordValidation';
import RepeatPasswordValidation from '../../validation/RepeatPasswordValidation';

import Message from '../Message';
import ErrorInputValid from '../ErrorInputValid';

class ChangePassword extends React.Component {

    state = {
        newPassword: '',
        newPasswordRepeat: '',
        password: '',
        newPasswordValid: true,
        newPasswordRepeatValid: true,
        passwordValid: true,
        message: ''
    }

    async validInput(inputId, inputValue) {
        switch (inputId) {
            case 'newPassword':
                const { newPasswordRepeat } = this.state;
                this.setState({ newPasswordValid: PasswordValidation(inputValue) })
                this.setState({ newPasswordRepeatValid: RepeatPasswordValidation(inputValue, newPasswordRepeat) })
                break;
            case 'newPasswordRepeat':
                const { newPassword } = this.state;
                this.setState({ newPasswordRepeatValid: RepeatPasswordValidation(inputValue, newPassword) })
                break;
            case 'password':
                this.setState({ passwordValid: inputValue.length > 0 ? true : false })
                break;
            default:
                break;
        }
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
        this.validInput(e.target.id, e.target.value);
    }

    submitChangePasswordForm(e) {
        e.preventDefault();
        const { newPassword, password, newPasswordValid, newPasswordRepeatValid, passwordValid } = this.state;
        const { config, user } = this.props;

        if (newPasswordValid && newPasswordRepeatValid && passwordValid) {
            try {
                fetch(`${config.api}/api/user/changepassword/${user._id}/${password}/${newPassword}`, { method: 'POST' })
                    .then(r => r.json())
                    .then(r => {
                        if (r.status === 'correct') {
                            this.setState({ message: 'Hasło zostało zmienione', newPassword: '', newPasswordRepeat: '', password: '' })
                        }
                        else if (r.status === 'incorrect') {
                            this.setState({ message: 'Nie prawidłowe dane', password: '' })
                        }
                    })
            }
            catch {
                this.setState({ message: 'Wystąpił problem po stronie serwera proszę spróbować ponownie później' })
            }
        }
    }

    render() {
        const { newPassword, newPasswordRepeat, password, message, newPasswordValid, newPasswordRepeatValid, passwordValid } = this.state;

        return (
            <form className="form" onSubmit={this.submitChangePasswordForm.bind(this)}>
                <h2 className="form__header">Zmiana hasła</h2>
                <Message message={message} />
                <input type="password"
                    placeholder="Nowe hasło"
                    className="form__input"
                    value={newPassword}
                    onChange={this.handleInputChange.bind(this)}
                    id="newPassword"
                />
                <ErrorInputValid valid={newPasswordValid} message="Za krótkie hasło" />
                <input type="password"
                    placeholder="Powtórz hasło"
                    className="form__input"
                    value={newPasswordRepeat}
                    onChange={this.handleInputChange.bind(this)}
                    id="newPasswordRepeat"
                />
                <ErrorInputValid valid={newPasswordRepeatValid} message="Hasła nie są identyczne" />
                <input type="password"
                    placeholder="Hasło"
                    className="form__input"
                    value={password}
                    onChange={this.handleInputChange.bind(this)}
                    id="password"
                />
                <ErrorInputValid valid={passwordValid} message="To pole nie może być puste" />
                <input type="submit"
                    className="form__submit button button--gradient"
                    value="Zapisz zmiany"
                />
            </form>
        );
    }
}

export default ChangePassword;
