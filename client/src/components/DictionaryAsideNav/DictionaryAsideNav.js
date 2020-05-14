import React from 'react';
import { NavLink } from 'react-router-dom';

import ArrowIcon from '../../img/arrow_back.png';

class DictionaryAsideNav extends React.Component {

    state = {
        dictionary: undefined,
    }

    componentDidMount() {
        const { config } = this.props;
        const id = this.props.match.params.id;

        fetch(`${config.api}/api/dictionary/getone/${id}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                this.setState({ dictionary: r.dictionary })
            })
    }

    removeDictionary() {
        const { config, hideAsideNav, user } = this.props;
        const id = this.props.match.params.id;
        this.props.history.push('/dashboard');
        fetch(`${config.api}/api/dictionary/delete/${id}/${user._id}/${user.login}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                if (r.status === 'correct') {
                    hideAsideNav();
                }
            })
    }

    render() {
        const id = this.props.match.params.id;
        const { dictionary } = this.state;
        const { hideAsideNav, changeLanguage, secondLanguage } = this.props;
        return (
            <>
                <NavLink to="/dashboard" className="asideNav__link" activeClassName="asideNav__link--active" onClick={hideAsideNav} exact>
                    <img src={ArrowIcon} alt="Home" className="asideNav__linkIcon" />
                    Powrót
                </NavLink>
                <h2 className="asideNav__header">{dictionary !== undefined && dictionary.name}</h2>
                <ul className="asideNav__list">
                    Ucz się
                    <li className="asideNav__listElement">
                        <NavLink to={`/dashboard/dictionary/main/${id}`} className="asideNav__link" activeClassName="asideNav__link--active" onClick={hideAsideNav} exact>
                            Fiszki
                        </NavLink>
                    </li>
                    <li className="asideNav__listElement">
                        <NavLink to={`/dashboard/dictionary/test/${id}`} className="asideNav__link" activeClassName="asideNav__link--active" onClick={hideAsideNav} exact>
                            Sprawdź się
                        </NavLink>
                    </li>
                    <li className="asideNav__listElement">
                        <p className="asideNav__link" onClick={changeLanguage}>
                            Przełącz na
                            {
                                secondLanguage === 'en' ? ' Definicja' : ' Pojęcie'
                            }
                        </p>
                    </li>
                </ul>
                <ul className="asideNav__list">
                    Edytuj
                    <li className="asideNav__listElement">
                        <p className="asideNav__link" onClick={this.removeDictionary.bind(this)}>
                            Usuń zbiór
                        </p>
                    </li>
                    <li className="asideNav__listElement">
                        <NavLink to={`/dashboard/dictionary/edit/${id}`} className="asideNav__link" activeClassName="asideNav__link--active" onClick={hideAsideNav} exact>
                            Dodaj pojęcia
                        </NavLink>
                    </li>
                </ul>
            </>
        );
    }
}

export default DictionaryAsideNav;
