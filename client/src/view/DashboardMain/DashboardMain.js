import React from 'react';
import Cookies from 'universal-cookie';

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

        try {
            fetch(`${config.api}/api/dictionary/get/${user._id}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    this.setState({ dictionaries: r.dictionaries, userName: r.userName })
                })
        }
        catch {

        }
    }

    render() {
        const { dictionaries, userName } = this.state;
        let _dictionaries = null;
        if (dictionaries !== null)
            _dictionaries = dictionaries.map(dictionary => <Kit key={dictionary._id} dictionary={dictionary} owner={userName} />)

        return (
            <div className="dashboard-main">
                <h2 className="dashboard-main__header">Twoje zestawy</h2>
                {
                    dictionaries !== null &&
                    <>
                        {
                            dictionaries.length === 0 && <p className="dashboard-main__no-dictionaries">Nie posiadasz jeszcze żadnych zbiorów słówek</p>
                        }
                    </>
                }
                <div className="dashboard-main__kit-container">
                    {_dictionaries}
                </div>
            </div>
        );
    }
}

export default DashboardMain;
