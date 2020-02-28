import React from "react"
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="home-nav">
            <Link to='/login'>
                <button className="home-nav__button">Zaloguj się</button>
            </Link>
            <Link to='/register'>
                <button className="home-nav__button home-nav__button--gradient">Zarejestruj się</button>
            </Link>
        </nav>
    )
}

export default Nav