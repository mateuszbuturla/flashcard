import React from 'react';

import Message from '../../components/Message';
import EditDictionaryField from '../../components/DashboardEditDictionary/DashboardEditDictionaryField';

import './dictionaryEdit.sass';

class DictionaryEdit extends React.Component {

    state = {
        dictionary: null,
        words: [],
        message: ''
    }

    componentDidMount() {
        document.title = 'Fiszki - Edytuj słownik'
        const { config } = this.props;
        const id = this.props.match.params.id;

        fetch(`${config.api}/api/dictionary/getone/${id}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                this.setState({ dictionary: r.dictionary, words: r.dictionary.vocabulary })
            })
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

    removeWord(index) {
        const { words } = this.state;
        let newWords = words;
        newWords.splice(index, 1)
        this.setState({ words: newWords })
    }

    saveDictionary() {
        const { config, user } = this.props;
        const { words } = this.state;
        const id = this.props.match.params.id;

        fetch(`${config.api}/api/dictionary/edit/${id}/${JSON.stringify(words)}/${user._id}/${user.login}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                if (r.status === 'correct') {
                    this.setState({ message: 'Twój zbiór został zaktualizowany' })
                }
                else if (r.status === 'incorrect') {
                    this.setState({ message: 'Wystąpił błąd' })
                }
            })
    }

    render() {
        const { dictionary, words, message } = this.state;
        let _words = null;
        if (dictionary !== null) {
            _words = words.map((word, index) => <EditDictionaryField key={index} pl={word.pl} en={word.en} id={index} handleWordChange={this.handleWordChange.bind(this)} removeWord={() => this.removeWord(index)} />)
        }

        return (
            <div className="editDictionary">
                <Message message={message} />
                {
                    dictionary !== null &&
                    <>
                        <div className="editDictionary__container">
                            {_words}
                        </div>
                        <button className="button" onClick={this.createNewWord.bind(this)}>Dodaj pojęcie</button>
                        <br />
                        <button className="button button--gradient" onClick={this.saveDictionary.bind(this)}>Zapisz</button>
                    </>
                }
            </div>
        );
    }
}

export default DictionaryEdit;
