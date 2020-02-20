import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import DashboardSettingChangeUsername from './DashboardSettingChangeUsername/DashboardSettingChangeUsername';
import DashboardSettingChangePassword from './DashboardSettingChangePassword/DashboardSettingChangePassword';

import './dashboardSetting.sass';

class DashboardSetting extends React.Component {

    render() {
        const { user, config } = this.props;

        return (
            <div className="dashboard-setting">
                <h2 className="dashboard-setting__header">Witaj {user.login}</h2>
                <Link to='/dashboard/setting/changeusername'>
                    <p>Zmień nazwę użytkownika</p>
                </Link>
                <Link to='/dashboard/setting/changepassword'>
                    <p>Zmień hasło</p>
                </Link>
                <Switch>
                    <Route path='/dashboard/setting/changeusername' component={props =>
                        <DashboardSettingChangeUsername {...props} config={config} user={user} />
                    } exact />
                    <Route path='/dashboard/setting/changepassword' component={props =>
                        <DashboardSettingChangePassword {...props} config={config} user={user} />} exact />
                </Switch>
            </div>
        );
    }
}

export default DashboardSetting;
