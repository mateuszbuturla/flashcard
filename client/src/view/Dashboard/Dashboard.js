import React from 'react';
import Cookies from 'universal-cookie';
import { NavLink, Switch, Route } from 'react-router-dom';

import DashboardNav from '../../components/DashboardNav/DashboardNav';
import DashboardMain from '../DashboardMain/DashboardMain';
import DashboardCreateKit from '../DashboardCreateKit/DashboardCreateKit';
import DashboardDictionaryMain from '../DashboardDictionaryMain/DashboardDictionaryMain';

import './dashboard.sass';

import HomeIcon from '../../img/home.png';
import PlusIcon from '../../img/plus.png';

class Dashboard extends React.Component {

    state = {
        asideNavOpen: false,
    }

    logout() {
        const cookies = new Cookies();
        cookies.remove('user');
        this.props.history.push('/');
    }

    onClickAsideNavButton(e) {
        e.preventDefault();
        const { asideNavOpen } = this.state;
        this.setState({ asideNavOpen: !asideNavOpen });
    }

    render() {
        const { asideNavOpen } = this.state;
        const { config, user } = this.props;
        return (
            <>
                <DashboardNav />

                <section className="dashboard">
                    <aside className={`aside-nav${asideNavOpen === true ? ' aside-nav--active' : ''}`}>
                        <div className="aside-nav__container">
                            <div className="aside-nav__links-container">
                                <NavLink to="/dashboard" className="aside-nav__link" activeClassName="aside-nav__link--active" exact>
                                    <img src={HomeIcon} alt="Home" className="aside-nav__link-icon" />
                                    Strona główna
                                </NavLink>
                                <NavLink to="/dashboard/createkit" className="aside-nav__link" activeClassName="aside-nav__link--active" exact>
                                    <img src={PlusIcon} alt="Home" className="aside-nav__link-icon" />
                                    Stwórz
                                </NavLink>
                            </div>
                            <p className="aside-nav__footer">Mateusz Buturla 2020</p>
                        </div>
                        <button className="aside-nav__open-button" onClick={this.onClickAsideNavButton.bind(this)}></button>
                    </aside>

                    <div className="dashboard__main">
                        <Switch>
                            <Route path='/dashboard/dictionary/main/:id' component={props => <DashboardDictionaryMain {...props} config={config} user={user} />} exact />
                            <Route path='/dashboard' component={props => <DashboardMain {...props} config={config} user={user} />} exact />
                            <Route path='/dashboard/createkit' component={props => <DashboardCreateKit {...props} config={config} user={user} />} exact />
                        </Switch>
                    </div>
                    {/* <button onClick={this.logout.bind(this)}>Wyloguj</button> */}
                </section>
            </>
        );
    }
}

export default Dashboard;
