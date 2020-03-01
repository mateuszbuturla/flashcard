import React from "react"

import ErrorInputValid from '../ErrorInputValid';

const DictionaryCreateForm = ({ submitCreateKitForm, name, handleInputChange, nameValid }) => {
    return (
        <form onSubmit={submitCreateKitForm.bind(this)} className="form">
            <input
                type="text"
                value={name}
                onChange={handleInputChange.bind(this)}
                className="form__input"
                placeholder="Nazwa zbioru"
                id="name"
            />
            <ErrorInputValid valid={nameValid} message="To pole jest wymagane" />
            <input type="submit" value="Stwórz zestaw" className="form__submit button button--gradient" />
        </form>
    )
}

export default DictionaryCreateForm