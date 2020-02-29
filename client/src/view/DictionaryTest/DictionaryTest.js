import React from 'react';

import TestResult from '../../components/DictionaryTest/TestResult';
import TestForm from '../../components/DictionaryTest/TestForm';
import WordResult from '../../components/DictionaryTest/WordResult';
import DashboardAnnouncement from '../../components/DashboardAnnouncement';

import './dictionaryTest.sass';

class DictionaryTest extends React.Component {

    state = {
        dictionary: undefined,
        currentVocabulary: 0,
        answerInput: '',
        showWordResult: false,
        lastAnswerCorrect: false,
        correctAnswers: 0,
        incorrectAnswers: 0,
        finishResult: false
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    componentDidMount() {
        const { config } = this.props;
        const id = this.props.match.params.id;

        try {
            fetch(`${config.api}/api/dictionary/getone/${id}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    this.setState({ dictionary: r.dictionary })
                })
        }
        catch {

        }
    }

    submitTranslateForm(e) {
        e.preventDefault();
        const { dictionary, answerInput, currentVocabulary, lastAnswerCorrect } = this.state;
        const { secondLanguage } = this.props;
        if (answerInput) {
            if (secondLanguage === 'en') {
                if (answerInput.toLowerCase() === dictionary.vocabulary[currentVocabulary].pl.toLowerCase()) {
                    this.setState(prevState => {
                        return { correctAnswers: prevState.correctAnswers + 1, lastAnswerCorrect: true }
                    })
                }
                else {
                    this.setState(prevState => {
                        return { incorrectAnswers: prevState.incorrectAnswers + 1, lastAnswerCorrect: false }
                    })
                }
            }
            else if (secondLanguage === 'pl') {
                if (answerInput.toLowerCase() === dictionary.vocabulary[currentVocabulary].en.toLowerCase()) {
                    this.setState(prevState => {
                        return { correctAnswers: prevState.correctAnswers + 1, lastAnswerCorrect: true }
                    })
                }
                else {
                    this.setState(prevState => {
                        return { incorrectAnswers: prevState.incorrectAnswers + 1, lastAnswerCorrect: false }
                    })
                }
            }
            this.setState({ showWordResult: true, answerInput: '' })
        }
    }

    nextWord() {
        this.setState(prevState => {
            if (prevState.currentVocabulary < prevState.dictionary.vocabulary.length - 1) {
                return { currentVocabulary: prevState.currentVocabulary + 1, showWordResult: false }
            }
            else {
                return { finishResult: true }
            }
        })
    }

    render() {
        const { dictionary, currentVocabulary, answerInput, showWordResult, lastAnswerCorrect, finishResult, correctAnswers, incorrectAnswers } = this.state;
        const { secondLanguage } = this.props;
        return (
            <>
                {
                    dictionary !== undefined ?
                        <div className="dashboard-dictionary-test">
                            {
                                dictionary.vocabulary.length > 0 ?
                                    <>
                                        {
                                            finishResult === true ?
                                                <TestResult
                                                    correctAnswers={correctAnswers}
                                                    incorrectAnswers={incorrectAnswers}
                                                    dictionary={dictionary}
                                                />
                                                :
                                                <>
                                                    {
                                                        showWordResult === false ?
                                                            <TestForm
                                                                secondLanguage={secondLanguage}
                                                                dictionary={dictionary}
                                                                currentVocabulary={currentVocabulary}
                                                                submitTranslateForm={this.submitTranslateForm.bind(this)}
                                                                handleInputChange={this.handleInputChange.bind(this)}
                                                                answerInput={answerInput}
                                                            />
                                                            :
                                                            <WordResult
                                                                secondLanguage={secondLanguage}
                                                                dictionary={dictionary}
                                                                currentVocabulary={currentVocabulary}
                                                                lastAnswerCorrect={lastAnswerCorrect}
                                                                nextWord={this.nextWord.bind(this)}
                                                            />
                                                    }
                                                </>
                                        }
                                    </>
                                    :
                                    <DashboardAnnouncement message="Nie posiadasz jeszcze rzadnych słówek w tym zbiorze" />
                            }
                        </div>
                        :
                        <DashboardAnnouncement message="Taki słownik nie istnieje lub nie należy do Ciebie" />
                }
            </>
        );
    }
}

export default DictionaryTest;
