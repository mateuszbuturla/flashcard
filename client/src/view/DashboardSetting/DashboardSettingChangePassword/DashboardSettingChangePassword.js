import React from 'react';
import styled from 'styled-components';

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

class DashboardSettingChangePassword extends React.Component {

    state = {
        newPassword: '',
        newPasswordRepeat: '',
        password: ''
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        const { newPassword, newPasswordRepeat, password } = this.state;

        return (
            <Form className="change-username-form">
                <H2>Zmiana hasła</H2>
                <Input type="password"
                    placeholder="Nowe hasło"
                    value={newPassword}
                    onChange={this.handleInputChange.bind(this)}
                    id="newPassword"
                />
                <Input type="password"
                    placeholder="Powtórz hasło"
                    value={newPasswordRepeat}
                    onChange={this.handleInputChange.bind(this)}
                    id="newPasswordRepeat"
                />
                <Input type="password"
                    placeholder="Hasło"
                    value={password}
                    onChange={this.handleInputChange.bind(this)}
                    id="password"
                />
                <Button type="submit"
                    value="Zapisz zmiany"
                />
            </Form>
        );
    }
}

export default DashboardSettingChangePassword;
