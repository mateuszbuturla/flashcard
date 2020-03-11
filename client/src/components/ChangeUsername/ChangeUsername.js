import React from 'react';

import UsernameValidation from '../../validation/UsernameValidation';

import Message from '../../components/Message';
import ErrorInputValid from '../../components/ErrorInputValid';

class ChangeUsername extends React.Component {

    state = {
        newUsername: '',
        password: '',
        newUsernameValid: true,
        newUsernameIsExistValid: true,
        passwordValid: true,
        message: ''
    }

    async validInput(inputId, inputValue) {
        switch (inputId) {
            case 'newUsername':
                this.setState({ newUsernameValid: UsernameValidation(inputValue) })
                this.validUserNameIsExist(inputValue)
                break;
            case 'password':
                this.setState({ passwordValid: inputValue.length > 0 ? true : false })
                break;
            default:
                break;
        }
    }

    validUserNameIsExist(username) {
        const { config } = this.props;
        if (username) {
            fetch(`${config.api}/api/user/usernameisexist/${username}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    this.setState({ newUsernameIsExistValid: !r.exist })
                })
        }
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
        this.validInput(e.target.id, e.target.value)
    }

    submitChangeUsernameForm(e) {
        e.preventDefault();
        const { newUsername, password, newUsernameIsExistValid, newUsernameValid, passwordValid } = this.state;
        const { config, user } = this.props;

        if (newUsernameValid && passwordValid && newUsernameIsExistValid) {
            fetch(`${config.api}/api/user/changeusername/${user._id}/${password}/${newUsername}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    if (r.status === 'correct') {
                        this.setState({ message: 'Nazwa uytkownika została zmieniona', newUsername: '', password: '' })
                    }
                    else if (r.status === 'incorrect') {
                        this.setState({ message: 'Nie prawidłowe dane', password: '' })
                    }
                })
        }
    }

    render() {
        const { newUsername, password, message, passwordValid, newUsernameValid, newUsernameIsExistValid } = this.state;

        return (
            <form className="form" onSubmit={this.submitChangeUsernameForm.bind(this)}>
                <h2 className="form__header">Zmiana nazwy użytkownika</h2>
                <Message message={message} />
                <input type="text"
                    placeholder="Nowa nazwa"
                    className="form__input"
                    value={newUsername}
                    onChange={this.handleInputChange.bind(this)}
                    id="newUsername"
                />
                <ErrorInputValid valid={newUsernameValid} message="Za krótkia nazwa użytkownika" />
                <ErrorInputValid valid={newUsernameIsExistValid} message="Podana nazwa użytkownika jest zajęta" />
                <input type="password"
                    placeholder="Hasło"
                    className="form__input"
                    value={password}
                    onChange={this.handleInputChange.bind(this)}
                    id="password"
                />
                <ErrorInputValid valid={passwordValid} message="To pole nie może być puste" />
                <input
                    type="submit"
                    className="form__submit button button--gradient"
                    value="Zapisz zmiany"
                />
            </form>
        );
    }
}

export default ChangeUsername;
