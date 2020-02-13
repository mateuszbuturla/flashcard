import React from 'react';

import BinIcon from '../../img/bin.png';

import './dashboardEditDictionaryField.sass';

class DashboardNav extends React.Component {

    render() {
        const { pl, en } = this.props;
        return (
            <div className="edit-dictionary-field">
                <div className="edit-citionary-field__content">
                    <p className="edit-dictionary-field__word">{en}-</p>
                    <p className="edit-dictionary-field__word">{pl}</p>
                </div>
                <img src={BinIcon} alt="bin" className="edit-dictionary-field__bin" />
            </div>
        );
    }
}

export default DashboardNav;
