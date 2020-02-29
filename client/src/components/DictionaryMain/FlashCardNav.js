import React from "react"

const FlashCardNav = ({ changeFlashCardId, flashcardsId, dictionary }) => {
    return (
        <div className="dictionary-main-flashcards__nav">
            <button className="dictionary-main-flashcard__button" onClick={() => changeFlashCardId('subtract')}>{'<'}</button>
            {flashcardsId + 1}/{dictionary.vocabulary.length}
            <button className="dictionary-main-flashcard__button" onClick={() => changeFlashCardId('add')}>{'>'}</button>
        </div>
    )
}

export default FlashCardNav