import React from 'react';

import './dashboardCreateKit.sass';

class DashboardCreateKit extends React.Component {

    state = {
        name: ''
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    submitCreateKitForm(e) {
        e.preventDefault();
    }

    render() {
        const { name } = this.state;

        return (
            <div className="dashboard-create-kit">
                <h2 className="dashboard-create-kit__header">Twoje zestawy</h2>
                <form onSubmit={this.submitCreateKitForm.bind(this)} className="dashboard-create-kit__form">
                    <input type="text" value={name} onChange={this.handleInputChange.bind(this)} className="dashboard-create-kit__input" placeholder="Nazwa zbioru" id="name" />
                    <input type="submit" value="Stwórz zestaw" className="dashboard-create-kit__submit" />
                </form>
            </div>
        );
    }
}

export default DashboardCreateKit;
