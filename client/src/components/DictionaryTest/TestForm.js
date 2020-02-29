import React from "react"

const TestForm = ({ secondLanguage, dictionary, currentVocabulary, submitTranslateForm, handleInputChange, answerInput }) => {
    return (
        <div className="dictionary-test">
            <p className="dictionary-test__word">
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
                    className="dictionary-test__answer-input"
                />
                <input type="submit"
                    value="Zatwierdź"
                    className="dictionary-test__submit"
                />
            </form>
        </div>
    )
}

export default TestForm