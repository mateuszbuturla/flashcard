import React from 'react';
import Cookies from 'universal-cookie';
import { NavLink, Switch, Route } from 'react-router-dom';

import DashboardNav from '../../components/DashboardNav/DashboardNav';
import DashboardMain from '../DashboardMain/DashboardMain';
import DashboardMainAsideNav from './DashboardMainAsideNav/DashboardMainAsideNav';
import DashboardCreateKit from '../DashboardCreateKit/DashboardCreateKit';
import DashboardDictionaryMain from '../DashboardDictionaryMain/DashboardDictionaryMain';
import DashboardEditDictionary from '../DashboardEditDictionary/DashboardEditDictionary';
import DashboardDictionaryAsideNav from './DashboardDictionaryAsideNav/DashboardDictionaryAsideNav';

import ArrowIcon from '../../img/ArrowIcon.png';

import './dashboard.sass';

class Dashboard extends React.Component {

    state = {
        asideNavOpen: false,
    }

    logout() {
        const { getUser } = this.props;
        const cookies = new Cookies();
        cookies.remove('user');
        getUser();
        this.props.history.push('/')
    }

    onClickAsideNavButton(e) {
        e.preventDefault();
        const { asideNavOpen } = this.state;
        this.setState({ asideNavOpen: !asideNavOpen });
    }

    hideAsideNav() {
        this.setState({ asideNavOpen: false });
    }

    render() {
        const { asideNavOpen } = this.state;
        const { config, user } = this.props;
        return (
            <>
                <DashboardNav logout={this.logout.bind(this)} user={user} />

                <section className="dashboard">
                    <aside className={`aside-nav${asideNavOpen === true ? ' aside-nav--active' : ''}`}>
                        <div className="aside-nav__container">
                            <div className="aside-nav__links-container">
                                <Switch>
                                    <Route path='/dashboard/dictionary/edit/:id' component={props => <DashboardDictionaryAsideNav {...props} config={config} hideAsideNav={this.hideAsideNav.bind(this)} user={user} />} />
                                    <Route path='/dashboard/dictionary/main/:id' component={props => <DashboardDictionaryAsideNav {...props} config={config} hideAsideNav={this.hideAsideNav.bind(this)} user={user} />} />
                                    <Route path='/dashboard/dictionary/test/:id' component={props => <DashboardDictionaryAsideNav {...props} config={config} hideAsideNav={this.hideAsideNav.bind(this)} user={user} />} />
                                    <Route path='/dashboard' component={props => <DashboardMainAsideNav {...props} config={config} hideAsideNav={this.hideAsideNav.bind(this)} />} />
                                </Switch>
                            </div>
                            <p className="aside-nav__footer">Mateusz Buturla 2020</p>
                        </div>
                        <button className="aside-nav__open-button" onClick={this.onClickAsideNavButton.bind(this)}><img src={ArrowIcon} alt="arrow icon" className="aside-nav__button-arrow-icon" /></button>
                    </aside>

                    <div className="dashboard__main">
                        <Switch>
                            <Route path='/dashboard/dictionary/edit/:id' component={props => <DashboardEditDictionary {...props} config={config} user={user} />} exact />
                            <Route path='/dashboard/dictionary/main/:id' component={props => <DashboardDictionaryMain {...props} config={config} user={user} />} exact />
                            <Route path='/dashboard' component={props => <DashboardMain {...props} config={config} user={user} />} exact />
                            <Route path='/dashboard/createkit' component={props => <DashboardCreateKit {...props} config={config} user={user} />} exact />
                        </Switch>
                    </div>
                </section>
            </>
        );
    }
}

export default Dashboard;
