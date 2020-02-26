import React from 'react';

import './dashboardCreateKit.sass';

class DashboardCreateKit extends React.Component {

    state = {
        name: '',
        nameValid: true,
        message: ''
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value, nameValid: e.target.value === '' ? false : true });
    }

    submitCreateKitForm(e) {
        e.preventDefault();
        const { nameValid, name } = this.state;
        const { config, user } = this.props;
        if (nameValid) {
            this.setState({ nameValid: true })
            try {
                fetch(`${config.api}/api/dictionary/create/${name}/${user._id}/${user.login}`, { method: 'POST' })
                    .then(r => r.json())
                    .then(r => {
                        if (r.status === 'correct') {
                            this.setState({ message: 'Twój zestaw został dodany', name: '' })
                        }
                        else if (r.status === 'incorrect') {
                            this.setState({ message: 'Nie prawidłowa nazwa' })
                        }
                    })
            }
            catch {
                this.setState({ message: 'Wystąpił błąd spróbuj ponownie później' })
            }
        }
    }

    render() {
        const { name, nameValid, message } = this.state;

        return (
            <div className="dashboard-create-kit">
                <h2 className="dashboard-create-kit__header">Stwórz zestaw</h2>
                {message !== '' && <p className="dashboard-create-kit__message">{message}</p>}
                <form onSubmit={this.submitCreateKitForm.bind(this)} className="dashboard-create-kit__form">
                    <input
                        type="text"
                        value={name}
                        onChange={this.handleInputChange.bind(this)}
                        className="dashboard-create-kit__input"
                        placeholder="Nazwa zbioru"
                        id="name"
                    />
                    {
                        nameValid === false &&
                        <div className="dashboard-create-kit__error">
                            <p>To pole jest wymagane</p>
                        </div>
                    }
                    <input type="submit" value="Stwórz zestaw" className="dashboard-create-kit__submit" />
                </form>
            </div>
        );
    }
}

export default DashboardCreateKit;
