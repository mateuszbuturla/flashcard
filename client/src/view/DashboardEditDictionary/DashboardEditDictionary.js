import React from 'react';

import EditDictionaryField from '../../components/DashboardEditDictionary/DashboardEditDictionaryField';

import './dashboardEditDictionary.sass';

class DashboardEditDictionary extends React.Component {

    state = {
        dictionary: null,
        words: []
    }

    componentDidMount() {
        const { config } = this.props;
        const id = this.props.match.params.id;

        try {
            fetch(`${config.api}/api/dictionary/getone/${id}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    this.setState({ dictionary: r.dictionary, words: r.dictionary.vocabulary })
                })
        }
        catch {

        }
    }

    handleWordChange(e) {
        const { words } = this.state;
        const language = e.target.dataset.language;
        let newWords = words;
        if (language === 'pl')
            newWords[e.target.id].pl = e.target.value;
        else if (language === 'en')
            newWords[e.target.id].en = e.target.value;
        this.setState({ words: newWords })
    }

    createNewWord() {
        const { words } = this.state;
        let newWords = words;
        newWords.push({ en: '', pl: '' })
        this.setState({ words: newWords })
    }

    render() {
        const { dictionary, words } = this.state;
        let _words = null;
        if (dictionary !== null) {
            _words = words.map((word, index) => <EditDictionaryField key={index} pl={word.pl} en={word.en} id={index} handleWordChange={this.handleWordChange.bind(this)} />)
        }

        return (
            <div className="dashboard-edit-dictionary">
                {
                    dictionary !== null &&
                    <>
                        <div className="dashboard-edit-dictionary__container">
                            {_words}
                        </div>
                        <button className="dashboard-edit-dictionary__add-button" onClick={this.createNewWord.bind(this)}>Dodaj pojęcie</button>
                    </>
                }
            </div>
        );
    }
}

export default DashboardEditDictionary;
