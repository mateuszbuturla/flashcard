import React from "react"

const WordResult = ({ secondLanguage, dictionary, currentVocabulary, lastAnswerCorrect, nextWord }) => {
    return (
        <div className="dictionary-word-result">
            <p className="dictionary-word-result__word-in-second-language">
                {
                    secondLanguage === 'en' ?
                        dictionary.vocabulary[currentVocabulary].en
                        :
                        dictionary.vocabulary[currentVocabulary].pl
                }
            </p>
            <p className="dictionary-word-result__word-in-translate-language">
                {
                    secondLanguage === 'en' ?
                        dictionary.vocabulary[currentVocabulary].pl
                        :
                        dictionary.vocabulary[currentVocabulary].en
                }
            </p>
            <p className={`dictionary-word-result__status  ${lastAnswerCorrect === true && 'dictionary-word-result__status--correct'
                }
                                                            `}>
                {
                    lastAnswerCorrect === true ?
                        'Dobrze'
                        :
                        'Źle'
                }
            </p>
            <button onClick={nextWord.bind(this)} className="dictionary-word-result__button">
                Następne słowo
            </button>
        </div>
    )
}

export default WordResult