import React from "react"

import girlImg from '../../../img/girlHeader.png';

import './header.sass';

const Header = () => {
    return (
        <header className="homeHeader">
            <div className="homeHeader__text">
                <h1 className="homeHeader__h1">Chcesz poprawić swój Angielski, ale nie wiesz jak? W takim razie dobrze trafiłeś!</h1>
            </div>
            <div className="homeHeader__imgContainer">
                <img className="homeHeader__img" src={girlImg} alt="girl" />
            </div>
        </header>
    )
}

export default Header