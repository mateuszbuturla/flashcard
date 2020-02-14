import React from 'react';

import BinIcon from '../../img/bin.png';

import './dashboardEditDictionaryField.sass';

class DashboardNav extends React.Component {

    render() {
        const { pl, en, handleWordChange, id } = this.props;
        return (
            <div className="edit-dictionary-field">
                <div className="edit-citionary-field__content">
                    <input type="text" value={en} className="edit-dictionary-field__word" onChange={e => handleWordChange(e)} id={id} data-language="en" />
                    -
                    <input type="text" value={pl} className="edit-dictionary-field__word" onChange={e => handleWordChange(e)} id={id} data-language="pl" />
                </div>
                <img src={BinIcon} alt="bin" className="edit-dictionary-field__bin" />
            </div>
        );
    }
}

export default DashboardNav;
