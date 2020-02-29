import React from "react"

const TestResult = ({ correctAnswers, incorrectAnswers, dictionary }) => {
    return (
        <div className="dictionary-test-result">
            <p className="dictionary-test-result__header">Wynik:</p>
            <p className="dictionary-test-result__result dictionary-test-result__result--green">Poprawne: {correctAnswers}</p>
            <p className="dictionary-test-result__result dictionary-test-result__result--red">Nieprawidłowe: {incorrectAnswers}</p>
            <p className="dictionary-test-result__result">{correctAnswers / dictionary.vocabulary.length * 100}%</p>
        </div>
    )
}

export default TestResult