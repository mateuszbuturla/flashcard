import React from "react"
import { Link } from 'react-router-dom';

import './nav.sass';

const Nav = () => {
    return (
        <nav className="logoutNav">
            <Link to='/login'>
                <button className="logoutNav__button">Zaloguj się</button>
            </Link>
            <Link to='/register'>
                <button className="logoutNav__button logoutNav__button--gradient">Zarejestruj się</button>
            </Link>
        </nav>
    )
}

export default Nav