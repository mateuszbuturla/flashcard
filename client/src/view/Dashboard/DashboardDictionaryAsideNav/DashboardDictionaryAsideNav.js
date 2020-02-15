import React from 'react';
import { NavLink } from 'react-router-dom';

class DashboardDictionaryAsideNav extends React.Component {

    removeDictionary() {
        const { config } = this.props;
        const id = this.props.match.params.id;
        try {
            fetch(`${config.api}/api/dictionary/delete/${id}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    if (r.status === 'correct') {
                        this.props.history.push('/dashboard');
                    }
                })
        }
        catch {

        }
    }

    render() {
        const id = this.props.match.params.id;
        return (
            <>
                <NavLink to="/dashboard" className="aside-nav__link" activeClassName="aside-nav__link--active" exact>
                    Powrót
                </NavLink>
                <h2 className="aside-nav__header">Angielski Słówka</h2>
                <ul className="aside-nav__list">
                    Ucz się
                    <li className="aside-nav__list-element">
                        <NavLink to={`/dashboard/dictionary/main/${id}`} className="aside-nav__link" activeClassName="aside-nav__link--active" exact>
                            Fiszki
                        </NavLink>
                    </li>
                    <li className="aside-nav__list-element">
                        <NavLink to={`/dashboard/dictionary/test/${id}`} className="aside-nav__link" activeClassName="aside-nav__link--active" exact>
                            Sprawdź się
                        </NavLink>
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
                        <NavLink to={`/dashboard/dictionary/edit/${id}`} className="aside-nav__link" activeClassName="aside-nav__link--active" exact>
                            Dodaj pojęcia
                        </NavLink>
                    </li>
                </ul>
            </>
        );
    }
}

export default DashboardDictionaryAsideNav;
