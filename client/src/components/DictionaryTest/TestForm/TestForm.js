import React from "react"

import './testForm.sass';

const TestForm = ({ secondLanguage, dictionary, currentVocabulary, submitTranslateForm, handleInputChange, answerInput }) => {
    return (
        <div className="dictionaryTest">
            <p className="dictionaryTest__word">
                {
                    secondLanguage === 'en' ?
                        dictionary.vocabulary[currentVocabulary].en
                        :
                        dictionary.vocabulary[currentVocabulary].pl
                }
            </p>
            <form onSubmit={submitTranslateForm.bind(this)}>
                <input type="text"
                    placeholder="Tłumaczenie"
                    value={answerInput}
                    onChange={handleInputChange.bind(this)}
                    id="answerInput"
                    className="dictionaryTest__answerInput"
                />
                <input type="submit"
                    value="Zatwierdź"
                    className="dictionaryTest__submit"
                />
            </form>
        </div>
    )
}

export default TestForm