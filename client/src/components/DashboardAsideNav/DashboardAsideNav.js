import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '../../img/home.png';
import PlusIcon from '../../img/plus.png';
import SettingsIcon from '../../img/SettingIcon.png';

class DashboardAsideNav extends React.Component {

    render() {
        const { hideAsideNav } = this.props;
        return (
            <>
                <NavLink to="/dashboard" className="asideNav__link" activeClassName="asideNav__link--active" onClick={hideAsideNav} exact>
                    <img src={HomeIcon} alt="Home" className="asideNav__linkIcon" />
                    Strona główna
                </NavLink>
                <NavLink to="/dashboard/createkit" className="asideNav__link" activeClassName="asideNav__link--active" onClick={hideAsideNav} exact>
                    <img src={PlusIcon} alt="Home" className="asideNav__linkIcon" />
                    Stwórz
                </NavLink>
                <NavLink to="/dashboard/setting" className="asideNav__link" activeClassName="asideNav__link--active" onClick={hideAsideNav} exact>
                    <img src={SettingsIcon} alt="Home" className="asideNav__linkIcon" />
                    Ustawienia
                </NavLink>
            </>
        );
    }
}

export default DashboardAsideNav;
