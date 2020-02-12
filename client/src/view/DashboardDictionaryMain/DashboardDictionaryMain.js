import React from 'react';

import './dashboardDictionaryMain.sass'

class DashboardDictionaryMain extends React.Component {

    state = {
        dictionary: null,
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
        return (
            <div className="dashboard-dictionary-main">
                <div className="dictionary-main-flashcards">
                    <div className="dictionary-main-flashcards__container">
                        {
                            dictionary !== null &&
                            <>
                                <p className="dictionary-main-flashcards__first">{dictionary.vocabulary[flashcardsId].en}</p>
                                <p className="dictionary-main-flashcards__second">{dictionary.vocabulary[flashcardsId].pl}</p>
                            </>
                        }
                    </div>
                    <div className="dictionary-main-flashcards__nav">
                        <button className="dictionary-main-flashcard__button" onClick={() => this.changeFlashCardId('subtract')}>{'<'}</button>
                        {
                            dictionary !== null &&
                            <>
                                {flashcardsId + 1}/{dictionary.vocabulary.length}
                            </>
                        }
                        <button className="dictionary-main-flashcard__button" onClick={() => this.changeFlashCardId('add')}>{'>'}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardDictionaryMain;
