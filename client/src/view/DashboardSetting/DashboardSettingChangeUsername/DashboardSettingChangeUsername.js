import React from 'react';
import styled from 'styled-components';

import UsernameValidation from '../../../validation/UsernameValidation';

const Form = styled.form`
    margin-top: 20px;
    width: 90%;
    max-width: 300px;
    box-shadow: 0px 0px 5px 2px #bababa;
    padding: 30px 20px;
    box-sizing: border-box;
    margin-bottom: 30px;
`;

const H2 = styled.h2`
    font-size: 25px;
    margin-bottom: 20px
`;

const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #000000;
    font-size: 20px;
    width: 90%;
    margin-bottom: 20px;
`;

const Button = styled.input`
    padding: 10px 40px;
    border: 0;
    border-radius: 100px;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(165deg, rgba(92, 30, 219, 1),rgba(21, 117, 191, 1));
    :focus,
    :active {
       outline: 0;
    }
`;

const Message = styled.p`
    margin-bottom: 20px;
`;

const ErrorLabel = styled.div`
    margin-bottom: 20px;
    margin-top: -20px;
    color: #d11b1b;
`;

class DashboardSettingChangeUsername extends React.Component {

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
        try {
            if (username) {
                fetch(`${config.api}/api/user/usernameisexist/${username}`, { method: 'POST' })
                    .then(r => r.json())
                    .then(r => {
                        this.setState({ newUsernameIsExistValid: !r.exist })
                    })
            }
        }
        catch {
            this.setState({ message: 'Wystąpił problem po stronie serwera proszę spróbować ponownie później' })
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
            try {
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
            catch {
                this.setState({ message: 'Wystąpił problem po stronie serwera proszę spróbować ponownie później' })
            }
        }
    }

    render() {
        const { newUsername, password, message, passwordValid, newUsernameValid, newUsernameIsExistValid } = this.state;

        return (
            <Form onSubmit={this.submitChangeUsernameForm.bind(this)}>
                <H2>Zmiana nazwy użytkownika</H2>
                {message !== '' && <Message>{message}</Message>}
                <Input type="text"
                    placeholder="Nowa nazwa"
                    value={newUsername}
                    onChange={this.handleInputChange.bind(this)}
                    id="newUsername"
                />
                {
                    newUsernameValid === false &&
                    <ErrorLabel>
                        <p>Za krótkia nazwa użytkownika</p>
                    </ErrorLabel>
                }
                {
                    newUsernameIsExistValid === false &&
                    <ErrorLabel>
                        <p>Podana nazwa użytkownika jest zajęta</p>
                    </ErrorLabel>
                }
                <Input type="password"
                    placeholder="Hasło"
                    value={password}
                    onChange={this.handleInputChange.bind(this)}
                    id="password"
                />
                {
                    passwordValid === false &&
                    <ErrorLabel>
                        <p>To pole nie może być puste</p>
                    </ErrorLabel>
                }
                <Button type="submit"
                    value="Zapisz zmiany"
                />
            </Form>
        );
    }
}

export default DashboardSettingChangeUsername;
