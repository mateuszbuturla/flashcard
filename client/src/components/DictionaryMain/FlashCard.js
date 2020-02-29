import React from "react"

const FlashCard = ({ secondLanguage, dictionary, flashcardsId }) => {
    return (
        <div className="dictionary-main-flashcards__container">
            {
                secondLanguage === 'en' ?
                    <>
                        <p className="dictionary-main-flashcards__first">{dictionary.vocabulary[flashcardsId].en}</p>
                        <p className="dictionary-main-flashcards__second">{dictionary.vocabulary[flashcardsId].pl}</p>
                    </>
                    :
                    <>
                        <p className="dictionary-main-flashcards__first">{dictionary.vocabulary[flashcardsId].pl}</p>
                        <p className="dictionary-main-flashcards__second">{dictionary.vocabulary[flashcardsId].en}</p>
                    </>
            }

        </div>
    )
}

export default FlashCard