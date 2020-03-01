import React from "react"

import './wordResult.sass';

const WordResult = ({ secondLanguage, dictionary, currentVocabulary, lastAnswerCorrect, nextWord }) => {
    return (
        <div className="dictionaryWordResult">
            <p className="dictionaryWordResult__second">
                {
                    secondLanguage === 'en' ?
                        dictionary.vocabulary[currentVocabulary].en
                        :
                        dictionary.vocabulary[currentVocabulary].pl
                }
            </p>
            <p className="dictionaryWordResult__translate">
                {
                    secondLanguage === 'en' ?
                        dictionary.vocabulary[currentVocabulary].pl
                        :
                        dictionary.vocabulary[currentVocabulary].en
                }
            </p>
            <p className={`dictionaryWordResult__status  ${lastAnswerCorrect === true && 'dictionaryWordResult__status--correct'
                }
                                                            `}>
                {
                    lastAnswerCorrect === true ?
                        'Dobrze'
                        :
                        'Źle'
                }
            </p>
            <button onClick={nextWord.bind(this)} className="dictionaryWordResult__button">
                Następne słowo
            </button>
        </div>
    )
}

export default WordResult