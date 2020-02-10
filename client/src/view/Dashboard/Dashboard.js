import React from 'react';
import Cookies from 'universal-cookie';

class Dashboard extends React.Component {

    logout() {
        const cookies = new Cookies();
        cookies.remove('user');
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <section className="dashboard">
                    <button onClick={this.logout.bind(this)}>Wyloguj</button>
                </section>
            </>
        );
    }
}

export default Dashboard;
