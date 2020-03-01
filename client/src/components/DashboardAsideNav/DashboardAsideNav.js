import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '../../img/home.png';
import PlusIcon from '../../img/plus.png';

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
            </>
        );
    }
}

export default DashboardAsideNav;
