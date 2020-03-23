import React from "react"

import Word from './Word/Word';

import './testResult.sass';

const TestResult = ({ correctAnswers, incorrectAnswers, dictionary }) => {
    let correct = null;
    let inCorrect = null;
    if (correctAnswers.length > 0)
        correct = correctAnswers.map((element, index) => <Word correct={true} index={index + 1} secondLanguage={element.en} translation={element.pl} />)
    if (incorrectAnswers.length > 0)
        inCorrect = incorrectAnswers.map((element, index) => <Word correct={false} index={index + 1} secondLanguage={element.en} translation={element.pl} />)

    return (
        <>
            <div className="dictionaryResult">
                <p className="dictionaryResult__header">Wynik:</p>
                <p className="dictionaryResult__result dictionaryResult__result--green">Poprawne: {correctAnswers.length}</p>
                <p className="dictionaryResult__result dictionaryResult__result--red">Nieprawidłowe: {incorrectAnswers.length}</p>
                <p className="dictionaryResult__result">{Math.floor((correctAnswers.length * 100) / (correctAnswers.length + incorrectAnswers.length))}%</p>
            </div>
            <div class="break"></div>
            <div className="dictionaryResult__wordsContainer">
                {correct}
            </div>
            <div class="break"></div>
            <div className="dictionaryResult__wordsContainer dictionaryResult__wordsContainer--marginBottom">
                {inCorrect}
            </div>
        </>
    )
}

export default TestResult