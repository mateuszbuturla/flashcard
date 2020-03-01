import React from "react"

import './flashCardNav.sass';

const FlashCardNav = ({ changeFlashCardId, flashcardsId, dictionary }) => {
    return (
        <div className="flashcardsNav">
            <button className="flashcardsNav__button" onClick={() => changeFlashCardId('subtract')}>{'<'}</button>
            {flashcardsId + 1}/{dictionary.vocabulary.length}
            <button className="flashcardsNav__button" onClick={() => changeFlashCardId('add')}>{'>'}</button>
        </div>
    )
}

export default FlashCardNav