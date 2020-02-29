import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import ChangeUsername from '../../components/ChangeUsername/ChangeUsername';
import ChangePassword from '../../components/ChangePassword/ChangePassword';

import './dashboardSetting.sass';

class DashboardSetting extends React.Component {

    render() {
        const { user, config } = this.props;

        return (
            <div className="dashboard-setting">
                <h2 className="dashboard-setting__header">Witaj {user.login}</h2>
                <Link to='/dashboard/setting/changeusername' className="dashboard-setting__link">
                    <p>Zmień nazwę użytkownika</p>
                </Link>
                <Link to='/dashboard/setting/changepassword' className="dashboard-setting__link">
                    <p>Zmień hasło</p>
                </Link>
                <Switch>
                    <Route path='/dashboard/setting/changeusername' component={props =>
                        <ChangeUsername {...props} config={config} user={user} />
                    } exact />
                    <Route path='/dashboard/setting/changepassword' component={props =>
                        <ChangePassword {...props} config={config} user={user} />
                    } exact />
                </Switch>
            </div>
        );
    }
}

export default DashboardSetting;
