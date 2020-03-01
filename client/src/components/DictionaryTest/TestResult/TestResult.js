import React from "react"

import './testResult.sass';

const TestResult = ({ correctAnswers, incorrectAnswers, dictionary }) => {
    return (
        <div className="dictionaryResult">
            <p className="dictionaryResult__header">Wynik:</p>
            <p className="dictionaryResult__result dictionaryResult__result--green">Poprawne: {correctAnswers}</p>
            <p className="dictionaryResult__result dictionaryResult__result--red">Nieprawidłowe: {incorrectAnswers}</p>
            <p className="dictionaryResult__result">{correctAnswers / dictionary.vocabulary.length * 100}%</p>
        </div>
    )
}

export default TestResult