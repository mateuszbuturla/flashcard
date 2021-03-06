import React from 'react';
import { Link } from 'react-router-dom';

import LogoutIcon from '../../img/LogoutIcon.png';
import SettingIcon from '../../img/SettingIcon.png';

import './dashboardNav.sass';

import Logo from '../../img/logo.png';

class DashboardNav extends React.Component {

    state = {
        showUserBox: false
    }

    onClickShowUserBoxButton() {
        const { showUserBox } = this.state;
        this.setState({ showUserBox: !showUserBox })
    }

    render() {
        const { logout, user } = this.props;
        const { showUserBox } = this.state;
        return (
            <>
                <nav className="dashboard-nav">
                    <div className="nav__logo" >
                        <img src={Logo} alt="logo" />
                        <p>FlashCards</p>
                    </div>
                    <p className="dashboard-nav__username" onClick={this.onClickShowUserBoxButton.bind(this)}>
                        {user.login}
                        <div className={`user-box-nav${showUserBox === true ? ' user-box-nav--active' : ''}`}>
                            <Link to='/dashboard/setting' className="user-box-nav__button">
                                <img src={SettingIcon} alt="logout icon" className="user-box-nav__icon" />
                                Ustawienia
                            </Link>
                            <button className="user-box-nav__button" onClick={logout}>
                                <img src={LogoutIcon} alt="logout icon" className="user-box-nav__icon" />
                                Wyloguj
                            </button>
                        </div>
                    </p>
                </nav>
            </>
        );
    }
}

export default DashboardNav;
