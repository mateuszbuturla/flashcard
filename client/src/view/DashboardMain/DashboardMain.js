import React from 'react';
import Cookies from 'universal-cookie';

import Kit from '../../components/DashboardKit/DashboardKit';

import './dashboardMain.sass';

class DashboardMain extends React.Component {

    logout() {
        const cookies = new Cookies();
        cookies.remove('user');
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="dashboard-main">
                <h2 className="dashboard-main__header">Twoje zestawy</h2>
                <div className="dashboard-main__kit-container">
                    <Kit name={'Slownik 1'} vocabularyCount={76} owner={'admin'} />
                    <Kit name={'Slownik 1'} vocabularyCount={76} owner={'admin'} />
                    <Kit name={'Slownik 1'} vocabularyCount={76} owner={'admin'} />
                    <Kit name={'Slownik 1'} vocabularyCount={76} owner={'admin'} />
                </div>
            </div>
        );
    }
}

export default DashboardMain;
