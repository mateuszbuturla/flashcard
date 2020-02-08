import React from 'react';
import { Link } from 'react-router-dom';

import './home.sass';

import girlImg from '../../img/girlHeader.png';
import flashcardsImg from '../../img/flashcardsImg.png';
import testsImg from '../../img/testImg.png';
import grammarImg from '../../img/grammarImg.png';

class App extends React.Component {

    render() {
        return (
            <>
                <nav className="home-nav">
                    <Link to='/login'>
                        <button className="home-nav__button">Zaloguj się</button>
                    </Link>
                    <Link to='/register'>
                        <button className="home-nav__button home-nav__button--gradient">Zarejestruj się</button>
                    </Link>
                </nav>

                <header className="home-header">
                    <div className="home-header__text">
                        <h1 className="home-header__h1">Chcesz poprawić swój Angielski, ale nie wiesz jak? W takim razie dobrze trafiłeś!</h1>
                    </div>
                    <div className="home-header__img-container">
                        <img className="home-header__img" src={girlImg} alt="girl" />
                    </div>
                </header>

                <section className="home-section">
                    <div className="offer">
                        <img className="offer__img" src={flashcardsImg} alt="flashcards" />
                        <p className="offer__description">Fiszki</p>
                    </div>
                    <div className="offer">
                        <img className="offer__img" src={testsImg} alt="flashcards" />
                        <p className="offer__description">Testy</p>
                    </div>
                    <div className="offer">
                        <img className="offer__img" src={grammarImg} alt="flashcards" />
                        <p className="offer__description">Gramatyka</p>
                    </div>
                </section>

                <footer className="home-footer">
                    Mateusz Buturla 2020
                </footer>
            </>
        );
    }
}

export default App;
