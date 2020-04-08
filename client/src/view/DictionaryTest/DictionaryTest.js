import React from 'react';

import TestResult from '../../components/DictionaryTest/TestResult/TestResult';
import TestForm from '../../components/DictionaryTest/TestForm/TestForm';
import WordResult from '../../components/DictionaryTest/WordResult/WordResult';
import DashboardAnnouncement from '../../components/DashboardAnnouncement';

import './dictionaryTest.sass';

class DictionaryTest extends React.Component {

    state = {
        dictionary: undefined,
        currentVocabulary: 0,
        answerInput: '',
        showWordResult: false,
        lastAnswerCorrect: false,
        vocabulary: [],
        correctAnswers: [],
        incorrectAnswers: [],
        dictionaryIsEmpty: true,
        finishResult: false
    }

    handleInputChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    componentDidMount() {
        const { config } = this.props;
        const id = this.props.match.params.id;

        fetch(`${config.api}/api/dictionary/getone/${id}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                this.setState({
                    dictionary: r.dictionary,
                    vocabulary: r.dictionary.vocabulary,
                    dictionaryIsEmpty: r.dictionary.vocabulary.length > 0 ? false : true,
                    currentVocabulary: Math.floor(Math.random() * r.dictionary.vocabulary.length)
                })
            })
    }

    submitTranslateForm(e) {
        e.preventDefault();
        const { answerInput, currentVocabulary, lastAnswerCorrect, vocabulary, correctAnswers, incorrectAnswers } = this.state;
        const { secondLanguage } = this.props;
        if (answerInput) {
            if (secondLanguage === 'en') {
                if (answerInput.toLowerCase() === vocabulary[currentVocabulary].pl.toLowerCase()) {
                    let newCorrectAnswers = correctAnswers;
                    newCorrectAnswers.push(vocabulary[currentVocabulary]);
                    this.setState({ correctAnswers: newCorrectAnswers, lastAnswerCorrect: true })
                }
                else {
                    let newIncorrectAnswers = incorrectAnswers;
                    newIncorrectAnswers.push(vocabulary[currentVocabulary]);
                    this.setState({ incorrectAnswers: newIncorrectAnswers, lastAnswerCorrect: false })
                }
            }
            else if (secondLanguage === 'pl') {
                if (answerInput.toLowerCase() === vocabulary[currentVocabulary].en.toLowerCase()) {
                    this.setState(prevState => {
                        let newCorrectAnswers = prevState.correctAnswers.push(vocabulary[currentVocabulary]);
                        return { correctAnswers: newCorrectAnswers, lastAnswerCorrect: true }
                    })
                }
                else {
                    this.setState(prevState => {
                        let newIncorrectAnswers = prevState.correctAnswers.push(vocabulary[currentVocabulary]);
                        return { incorrectAnswers: newIncorrectAnswers, lastAnswerCorrect: false }
                    })
                }
            }
            this.setState({ showWordResult: true, answerInput: '' })
        }
    }

    nextWord() {
        const { vocabulary, currentVocabulary } = this.state;
        if (vocabulary.length - 1 > 0) {
            let newVocavulary = vocabulary;
            newVocavulary.splice(currentVocabulary, 1);
            this.setState({ showWordResult: false, vocabulary: newVocavulary, currentVocabulary: Math.floor(Math.random() * newVocavulary.length) })
        }
        else {
            this.setState({ finishResult: true })
            this.saveResult();
        }
    }

    saveResult() {
        const { correctAnswers, incorrectAnswers } = this.state;
        const { config } = this.props;
        const id = this.props.match.params.id;
        fetch(`${config.api}/api/result/add/${id}/${JSON.stringify(correctAnswers)}/${JSON.stringify(incorrectAnswers)}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => console.log(r))
    }

    render() {
        document.title = 'Fiszki - Test'
        const { dictionary, currentVocabulary, answerInput, showWordResult, lastAnswerCorrect, finishResult, correctAnswers, incorrectAnswers, dictionaryIsEmpty } = this.state;
        const { secondLanguage } = this.props;
        return (
            <>
                {
                    dictionary !== undefined ?
                        <div className="dictionaryTestContainer">
                            {
                                dictionaryIsEmpty === false ?
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
