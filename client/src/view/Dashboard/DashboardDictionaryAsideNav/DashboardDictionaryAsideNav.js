import React from 'react';
import { NavLink } from 'react-router-dom';

class DashboardDictionaryAsideNav extends React.Component {

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
                        <p className="aside-nav__link">
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
