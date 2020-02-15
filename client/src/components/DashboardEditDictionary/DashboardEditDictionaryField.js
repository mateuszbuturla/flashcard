import React from 'react';

import BinIcon from '../../img/bin.png';

import './dashboardEditDictionaryField.sass';

class DashboardNav extends React.Component {

    render() {
        const { pl, en, handleWordChange, id, removeWord } = this.props;
        return (
            <div className="edit-dictionary-field">
                <div className="edit-citionary-field__content">
                    <input type="text" value={en} className="edit-dictionary-field__word" onChange={e => handleWordChange(e)} id={id} data-language="en" placeholder="Angielski" />
                    -
                    <input type="text" value={pl} className="edit-dictionary-field__word" onChange={e => handleWordChange(e)} id={id} data-language="pl" placeholder="Polski" />
                </div>
                <img src={BinIcon} alt="bin" className="edit-dictionary-field__bin" onClick={removeWord} />
            </div>
        );
    }
}

export default DashboardNav;
