import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '../../../img/home.png';
import PlusIcon from '../../../img/plus.png';

class DashboardMainAsideNav extends React.Component {

    render() {
        const { hideAsideNav } = this.props;
        return (
            <>
                <NavLink to="/dashboard" className="aside-nav__link" activeClassName="aside-nav__link--active" onClick={hideAsideNav} exact>
                    <img src={HomeIcon} alt="Home" className="aside-nav__link-icon" />
                    Strona główna
                </NavLink>
                <NavLink to="/dashboard/createkit" className="aside-nav__link" activeClassName="aside-nav__link--active" onClick={hideAsideNav} exact>
                    <img src={PlusIcon} alt="Home" className="aside-nav__link-icon" />
                    Stwórz
                </NavLink>
            </>
        );
    }
}

export default DashboardMainAsideNav;
