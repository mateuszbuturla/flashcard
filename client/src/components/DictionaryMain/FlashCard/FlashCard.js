import React from "react"

import './flashCard.sass';

const FlashCard = ({ secondLanguage, dictionary, flashcardsId }) => {
    return (
        <div className="flashcards__container">
            {
                secondLanguage === 'en' ?
                    <>
                        <p className="flashcards__first">{dictionary.vocabulary[flashcardsId].en}</p>
                        <p className="flashcards__second">{dictionary.vocabulary[flashcardsId].pl}</p>
                    </>
                    :
                    <>
                        <p className="flashcards__first">{dictionary.vocabulary[flashcardsId].pl}</p>
                        <p className="flashcards__second">{dictionary.vocabulary[flashcardsId].en}</p>
                    </>
            }

        </div>
    )
}

export default FlashCard