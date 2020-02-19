import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import DashboardSettingChangeUsername from './DashboardSettingChangeUsername/DashboardSettingChangeUsername';

import './dashboardSetting.sass';

class DashboardSetting extends React.Component {

    render() {

        return (
            <div className="dashboard-setting">
                <h2 className="dashboard-setting__header">Witaj</h2>
                <Link to='/dashboard/setting/changeusername'>
                    <p>Zmień nazwę użytkownika</p>
                </Link>
                <Switch>
                    <Route path='/dashboard/setting/changeusername' component={DashboardSettingChangeUsername} exact />
                </Switch>
            </div>
        );
    }
}

export default DashboardSetting;
