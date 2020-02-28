import React from "react"

import flashcardsImg from '../../img/flashcardsImg.png';
import testsImg from '../../img/testImg.png';
import grammarImg from '../../img/grammarImg.png';

const Main = () => {
    return (
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
    )
}

export default Main