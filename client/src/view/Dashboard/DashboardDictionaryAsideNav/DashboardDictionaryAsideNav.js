import React from 'react';
import { NavLink } from 'react-router-dom';

import ArrowIcon from '../../../img/arrow_back.png';

class DashboardDictionaryAsideNav extends React.Component {

    state = {
        dictionary: undefined,
    }

    componentDidMount() {
        const { config } = this.props;
        const id = this.props.match.params.id;

        try {
            fetch(`${config.api}/api/dictionary/getone/${id}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    this.setState({ dictionary: r.dictionary })
                })
        }
        catch {

        }
    }

    removeDictionary() {
        const { config, hideAsideNav, user } = this.props;
        const id = this.props.match.params.id;
        try {
            this.props.history.push('/dashboard');
            fetch(`${config.api}/api/dictionary/delete/${id}/${user._id}/${user.login}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    if (r.status === 'correct') {
                        hideAsideNav();
                    }
                })
        }
        catch {

        }
    }

    render() {
        const id = this.props.match.params.id;
        const { dictionary } = this.state;
        const { hideAsideNav, changeLanguage, secondLanguage } = this.props;
        return (
            <>
                <NavLink to="/dashboard" className="aside-nav__link" activeClassName="aside-nav__link--active" onClick={hideAsideNav} exact>
                    <img src={ArrowIcon} alt="Home" className="aside-nav__link-icon" />
                    Powrót
                </NavLink>
                <h2 className="aside-nav__header">{dictionary !== undefined && dictionary.name}</h2>
                <ul className="aside-nav__list">
                    Ucz się
                    <li className="aside-nav__list-element">
                        <NavLink to={`/dashboard/dictionary/main/${id}`} className="aside-nav__link" activeClassName="aside-nav__link--active" onClick={hideAsideNav} exact>
                            Fiszki
                        </NavLink>
                    </li>
                    <li className="aside-nav__list-element">
                        <NavLink to={`/dashboard/dictionary/test/${id}`} className="aside-nav__link" activeClassName="aside-nav__link--active" onClick={hideAsideNav} exact>
                            Sprawdź się
                        </NavLink>
                    </li>
                    <li className="aside-nav__list-element">
                        <p className="aside-nav__link" onClick={changeLanguage}>
                            Przełącz na
                            {
                                secondLanguage === 'en' ? ' Polski' : ' Angielski'
                            }
                        </p>
                    </li>
                </ul>
                <ul className="aside-nav__list">
                    Edytuj
                    <li className="aside-nav__list-element">
                        <p className="aside-nav__link" onClick={this.removeDictionary.bind(this)}>
                            Usuń zbiór
                        </p>
                    </li>
                    <li className="aside-nav__list-element">
                        <NavLink to={`/dashboard/dictionary/edit/${id}`} className="aside-nav__link" activeClassName="aside-nav__link--active" onClick={hideAsideNav} exact>
                            Dodaj pojęcia
                        </NavLink>
                    </li>
                </ul>
            </>
        );
    }
}

export default DashboardDictionaryAsideNav;
