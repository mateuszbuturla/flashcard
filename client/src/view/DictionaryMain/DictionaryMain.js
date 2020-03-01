import React from 'react';

import FlashCard from '../../components/DictionaryMain/FlashCard/FlashCard';
import FlashCardNav from '../../components/DictionaryMain/FlashCardNav/FlashCardNav';
import DashboardAnnouncement from '../../components/DashboardAnnouncement';

import './dictionaryMain.sass'

class DictionaryMain extends React.Component {

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
                                    <div className="dictionaryMain">
                                        <div className="flashcards">
                                            <FlashCard
                                                secondLanguage={secondLanguage}
                                                dictionary={dictionary}
                                                flashcardsId={flashcardsId}
                                            />

                                            <FlashCardNav
                                                changeFlashCardId={this.changeFlashCardId.bind(this)}
                                                flashcardsId={flashcardsId}
                                                dictionary={dictionary}
                                            />
                                        </div>
                                    </div>
                                    :
                                    <DashboardAnnouncement message="Nie posiadasz jeszcze rzadnych słówek w tym zbiorze" />
                            }
                        </>
                        :
                        <DashboardAnnouncement message="Taki słownik nie istnieje lub nie należy do Ciebie" />
                }
            </>
        );
    }
}

export default DictionaryMain;
