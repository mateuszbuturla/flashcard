import React from 'react';
import Cookies from 'universal-cookie';

import Message from '../../components/Message';
import Kit from '../../components/DashboardKit/DashboardKit';

import './dashboardMain.sass';

class DashboardMain extends React.Component {

    state = {
        dictionaries: null,
        userName: ''
    }

    logout() {
        const cookies = new Cookies();
        cookies.remove('user');
        this.props.history.push('/');
    }

    componentDidMount() {
        const { user, config } = this.props;

        fetch(`${config.api}/api/dictionary/get/${user._id}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                this.setState({ dictionaries: r.dictionaries, userName: r.userName })
            })
    }

    render() {
        const { dictionaries, userName } = this.state;
        let _dictionaries = null;
        if (dictionaries !== null)
            _dictionaries = dictionaries.map(dictionary => <Kit key={dictionary._id} dictionary={dictionary} owner={userName} />)

        return (
            <div className="dashboardMain">
                <h2 className="dashboardMain__header">Twoje zestawy</h2>
                {
                    dictionaries !== null &&
                    <>
                        {
                            dictionaries.length === 0 &&
                            <Message message="Nie posiadasz jeszcze żadnych zbiorów słówek" />
                        }
                    </>
                }
                <div className="dashboardMain__dictionaryContainer">
                    {_dictionaries}
                </div>
            </div>
        );
    }
}

export default DashboardMain;
