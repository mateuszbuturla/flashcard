import React from "react"

import './testResult.sass';

const TestResult = ({ correctAnswers, incorrectAnswers, dictionary }) => {
    return (
        <div className="dictionaryResult">
            <p className="dictionaryResult__header">Wynik:</p>
            <p className="dictionaryResult__result dictionaryResult__result--green">Poprawne: {correctAnswers}</p>
            <p className="dictionaryResult__result dictionaryResult__result--red">Nieprawidłowe: {incorrectAnswers}</p>
            <p className="dictionaryResult__result">{Math.floor((correctAnswers * 100) / (correctAnswers + incorrectAnswers))}%</p>
        </div>
    )
}

export default TestResult