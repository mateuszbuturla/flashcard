import React from "react"

import girlImg from '../../img/girlHeader.png';

const Header = () => {
    return (
        <header className="home-header">
            <div className="home-header__text">
                <h1 className="home-header__h1">Chcesz poprawić swój Angielski, ale nie wiesz jak? W takim razie dobrze trafiłeś!</h1>
            </div>
            <div className="home-header__img-container">
                <img className="home-header__img" src={girlImg} alt="girl" />
            </div>
        </header>
    )
}

export default Header