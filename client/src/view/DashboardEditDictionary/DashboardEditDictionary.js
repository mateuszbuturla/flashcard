import React from 'react';

import EditDictionaryField from '../../components/DashboardEditDictionary/DashboardEditDictionaryField';

import './dashboardEditDictionary.sass';

class DashboardEditDictionary extends React.Component {

    state = {

    }


    render() {
        return (
            <div className="dashboard-edit-dictionary">
                <div className="dashboard-edit-dictionary__container">
                    <EditDictionaryField pl="pl" en="en" />
                </div>
            </div>
        );
    }
}

export default DashboardEditDictionary;
