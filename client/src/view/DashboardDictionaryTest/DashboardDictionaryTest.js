import React from 'react';

class DashboardDictionaryTest extends React.Component {

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
                        <>
                            {
                                dictionary.vocabulary.length > 0 ?
                                    <div className="dashboard-dictionary-test">
                                        {
                                            finishResult === true ?
                                                <>
                                                    <p>Wynik:</p>
                                                    <p>Poprawne: {correctAnswers}</p>
                                                    <p>Nieprawidłowe: {incorrectAnswers}</p>
                                                    <p>{correctAnswers / dictionary.vocabulary.length * 100}%</p>
                                                </>
                                                :
                                                <>
                                                    {
                                                        showWordResult === false ?
                                                            <>
                                                                <p>
                                                                    {
                                                                        secondLanguage === 'en' ?
                                                                            dictionary.vocabulary[currentVocabulary].en
                                                                            :
                                                                            dictionary.vocabulary[currentVocabulary].pl
                                                                    }
                                                                </p>
                                                                <form onSubmit={this.submitTranslateForm.bind(this)}>
                                                                    <input type="text"
                                                                        placeholder="Tłumaczenie"
                                                                        value={answerInput}
                                                                        onChange={this.handleInputChange.bind(this)}
                                                                        id="answerInput"
                                                                    />
                                                                    <input type="submit" value="Zatwierdź" />
                                                                </form>
                                                            </>
                                                            :
                                                            <>
                                                                <p>
                                                                    {
                                                                        secondLanguage === 'en' ?
                                                                            dictionary.vocabulary[currentVocabulary].en
                                                                            :
                                                                            dictionary.vocabulary[currentVocabulary].pl
                                                                    }
                                                                </p>
                                                                <p className="word-result__status">
                                                                    {
                                                                        lastAnswerCorrect === true ?
                                                                            'Dobrze'
                                                                            :
                                                                            'Źle'
                                                                    }
                                                                </p>
                                                                <button onClick={this.nextWord.bind(this)}>
                                                                    Następne słowo
                                                    </button>
                                                            </>
                                                    }
                                                </>
                                        }
                                    </div>
                                    :
                                    <p className="dashboard__announcement">Nie posiadasz jeszcze rzadnych słówek w tym zbiorze</p>
                            }
                        </>
                        :
                        <>
                            <p className="dashboard__announcement">Taki słownik nie istnieje lub nie należy do Ciebie</p>
                        </>
                }
            </>
        );
    }
}

export default DashboardDictionaryTest;
