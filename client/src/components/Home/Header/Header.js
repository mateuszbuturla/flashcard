import React from "react"

import girlImg from '../../../img/girlHeader.png';

import './header.sass';

const Header = () => {
    return (
        <header className="homeHeader">
            <div className="homeHeader__text">
                <h1 className="homeHeader__h1">Stwórz własne fiszki!</h1>
                <p className="homeHeader__p">Ucz się oraz sledź swoje postępy w nauce!</p>
            </div>
            <div className="homeHeader__imgContainer">
                <img className="homeHeader__img" src={girlImg} alt="girl" />
            </div>
        </header>
    )
}

export default Header