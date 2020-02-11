import React from 'react';

import './dashboardNav.sass';

class DashboardNav extends React.Component {

    render() {
        return (
            <>
                <nav className="dashboard-nav">
                    <p className="dashboard-nav__logo">Logo</p>
                    <p className="dashboard-nav__username">Nazwa uzytkownika</p>
                </nav>
            </>
        );
    }
}

export default DashboardNav;
