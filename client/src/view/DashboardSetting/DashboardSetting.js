import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import DashboardSettingChangeUsername from './DashboardSettingChangeUsername/DashboardSettingChangeUsername';
import DashboardSettingChangePassword from './DashboardSettingChangePassword/DashboardSettingChangePassword';

import './dashboardSetting.sass';

class DashboardSetting extends React.Component {

    render() {

        return (
            <div className="dashboard-setting">
                <h2 className="dashboard-setting__header">Witaj</h2>
                <Link to='/dashboard/setting/changeusername'>
                    <p>Zmień nazwę użytkownika</p>
                </Link>
                <Link to='/dashboard/setting/changepassword'>
                    <p>Zmień hasło</p>
                </Link>
                <Switch>
                    <Route path='/dashboard/setting/changeusername' component={DashboardSettingChangeUsername} exact />
                    <Route path='/dashboard/setting/changepassword' component={DashboardSettingChangePassword} exact />
                </Switch>
            </div>
        );
    }
}

export default DashboardSetting;
