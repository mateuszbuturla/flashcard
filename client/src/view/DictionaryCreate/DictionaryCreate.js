import React from 'react';

import DashboardMessage from '../../components/Message';
import DictionaryCreateForm from '../../components/DictionaryCreate/DictionaryCreateForm';

import './dictionaryCreate.sass';

class DictionaryCreate extends React.Component {

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
    }

    render() {
        const { name, nameValid, message } = this.state;

        return (
            <div className="createDictionary">
                <h2 className="createDictionary__header">Stwórz zestaw</h2>
                <DashboardMessage message={message} />
                <DictionaryCreateForm
                    submitCreateKitForm={this.submitCreateKitForm.bind(this)}
                    name={name}
                    handleInputChange={this.handleInputChange.bind(this)}
                    nameValid={nameValid}
                />
            </div>
        );
    }
}

export default DictionaryCreate;
