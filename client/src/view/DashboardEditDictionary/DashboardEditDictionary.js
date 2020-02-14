import React from 'react';

import EditDictionaryField from '../../components/DashboardEditDictionary/DashboardEditDictionaryField';

import './dashboardEditDictionary.sass';

class DashboardEditDictionary extends React.Component {

    state = {
        dictionary: null
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

    render() {
        const { dictionary } = this.state;
        let words = null;
        if (dictionary !== null) {
            const vocabulary = dictionary.vocabulary;
            words = vocabulary.map((word, index) => <EditDictionaryField key={index} pl={word.pl} en={word.en} />)
        }

        return (
            <div className="dashboard-edit-dictionary">
                {
                    dictionary !== null &&
                    <div className="dashboard-edit-dictionary__container">
                        {words}
                    </div>
                }
            </div>
        );
    }
}

export default DashboardEditDictionary;
