import React from 'react';
import Cookies from 'universal-cookie';
import { Switch, Route } from 'react-router-dom';

import DashboardAsideNav from '../../components/DashboardAsideNav/DashboardAsideNav';
import DictionaryAsideNav from '../../components/DictionaryAsideNav/DictionaryAsideNav';

import DashboardNav from '../../components/DashboardNav/DashboardNav';
import DashboardMain from '../DashboardMain/DashboardMain';
import DictionaryCreate from '../DictionaryCreate/DictionaryCreate';
import DictionaryMain from '../DictionaryMain/DictionaryMain';
import DictionaryTest from '../DictionaryTest/DictionaryTest';
import DictionaryEdit from '../DictionaryEdit/DictionaryEdit';
import DashboardSetting from '../DashboardSetting/DashboardSetting';

import ArrowIcon from '../../img/ArrowIcon.png';

import './dashboard.sass';

class Dashboard extends React.Component {

    state = {
        asideNavOpen: false,
        secondLanguage: 'en'
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

    changeSecondLanguage() {
        const { secondLanguage } = this.state;
        if (secondLanguage === 'pl')
            this.setState({ secondLanguage: 'en' })
        else if (secondLanguage === 'en')
            this.setState({ secondLanguage: 'pl' })
    }

    render() {
        const { asideNavOpen, secondLanguage } = this.state;
        const { config, user } = this.props;
        return (
            <>
                <DashboardNav logout={this.logout.bind(this)} user={user} />

                <section className="dashboard">
                    <aside className={`asideNav${asideNavOpen === true ? ' asideNav--active' : ''}`}>
                        <div className="asideNav__container">
                            <div className="asideNav__linksContainer">
                                <Switch>
                                    <Route
                                        path='/dashboard/dictionary/edit/:id'
                                        component={props =>
                                            <DictionaryAsideNav {...props}
                                                config={config}
                                                hideAsideNav={this.hideAsideNav.bind(this)}
                                                user={user}
                                                changeLanguage={this.changeSecondLanguage.bind(this)}
                                                secondLanguage={secondLanguage}
                                            />
                                        }
                                    />
                                    <Route path='/dashboard/dictionary/main/:id'
                                        component={props => <DictionaryAsideNav {...props}
                                            config={config}
                                            hideAsideNav={this.hideAsideNav.bind(this)}
                                            user={user}
                                            changeLanguage={this.changeSecondLanguage.bind(this)}
                                            secondLanguage={secondLanguage}
                                        />
                                        }
                                    />
                                    <Route
                                        path='/dashboard/dictionary/test/:id'
                                        component={props => <DictionaryAsideNav {...props}
                                            config={config}
                                            hideAsideNav={this.hideAsideNav.bind(this)}
                                            user={user}
                                            changeLanguage={this.changeSecondLanguage.bind(this)}
                                            secondLanguage={secondLanguage}
                                        />
                                        }
                                    />
                                    <Route path='/dashboard' component={props => <DashboardAsideNav {...props} config={config} hideAsideNav={this.hideAsideNav.bind(this)} />} />
                                </Switch>
                            </div>
                            <p className="asideNav__footer">Mateusz Buturla 2020</p>
                        </div>
                        <button className="asideNav__openButton" onClick={this.onClickAsideNavButton.bind(this)}><img src={ArrowIcon} alt="arrow icon" className="asideNav__buttonArrowIcon" /></button>
                    </aside>

                    <div className="dashboard__main">
                        <Switch>
                            <Route path='/dashboard/setting' component={props => <DashboardSetting {...props} config={config} user={user} />} />
                            <Route path='/dashboard/dictionary/test/:id' component={props => <DictionaryTest {...props} config={config} user={user} secondLanguage={secondLanguage} />} exact />
                            <Route path='/dashboard/dictionary/edit/:id' component={props => <DictionaryEdit {...props} config={config} user={user} />} exact />
                            <Route path='/dashboard/dictionary/main/:id' component={props => <DictionaryMain {...props} config={config} user={user} secondLanguage={secondLanguage} />} exact />
                            <Route path='/dashboard' component={props => <DashboardMain {...props} config={config} user={user} />} exact />
                            <Route path='/dashboard/createkit' component={props => <DictionaryCreate {...props} config={config} user={user} />} exact />
                        </Switch>
                    </div>
                </section>
            </>
        );
    }
}

export default Dashboard;
