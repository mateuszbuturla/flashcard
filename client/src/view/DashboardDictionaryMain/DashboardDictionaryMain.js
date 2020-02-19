import React from 'react';

import './dashboardDictionaryMain.sass'

class DashboardDictionaryMain extends React.Component {

    state = {
        dictionary: undefined,
        flashcardsId: 0
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

    changeFlashCardId(action) {
        const { flashcardsId, dictionary } = this.state;
        if (action === 'add') {
            if (flashcardsId < dictionary.vocabulary.length - 1)
                this.setState({ flashcardsId: flashcardsId + 1 })
        }
        else if (action === 'subtract') {
            if (flashcardsId > 0)
                this.setState({ flashcardsId: flashcardsId - 1 })
        }
    }

    render() {
        const { dictionary, flashcardsId } = this.state;
        const { secondLanguage } = this.props;
        return (
            <>
                {
                    dictionary !== undefined ?
                        <>
                            {
                                dictionary.vocabulary.length > 0 ?
                                    <div className="dashboard-dictionary-main">
                                        <div className="dictionary-main-flashcards">
                                            <div className="dictionary-main-flashcards__container">
                                                {
                                                    secondLanguage === 'en' ?
                                                        <>
                                                            <p className="dictionary-main-flashcards__first">{dictionary.vocabulary[flashcardsId].en}</p>
                                                            <p className="dictionary-main-flashcards__second">{dictionary.vocabulary[flashcardsId].pl}</p>
                                                        </>
                                                        :
                                                        <>
                                                            <p className="dictionary-main-flashcards__first">{dictionary.vocabulary[flashcardsId].pl}</p>
                                                            <p className="dictionary-main-flashcards__second">{dictionary.vocabulary[flashcardsId].en}</p>
                                                        </>
                                                }

                                            </div>

                                            <div className="dictionary-main-flashcards__nav">
                                                <button className="dictionary-main-flashcard__button" onClick={() => this.changeFlashCardId('subtract')}>{'<'}</button>
                                                {flashcardsId + 1}/{dictionary.vocabulary.length}
                                                <button className="dictionary-main-flashcard__button" onClick={() => this.changeFlashCardId('add')}>{'>'}</button>
                                            </div>

                                        </div>
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

export default DashboardDictionaryMain;
