import React from "react"

const DictionaryCreateForm = ({ submitCreateKitForm, name, handleInputChange, nameValid }) => {
    return (
        <form onSubmit={submitCreateKitForm.bind(this)} className="dashboard-create-kit__form">
            <input
                type="text"
                value={name}
                onChange={handleInputChange.bind(this)}
                className="dashboard-create-kit__input"
                placeholder="Nazwa zbioru"
                id="name"
            />
            {
                nameValid === false &&
                <div className="dashboard-create-kit__error">
                    <p>To pole jest wymagane</p>
                </div>
            }
            <input type="submit" value="Stwórz zestaw" className="dashboard-create-kit__submit" />
        </form>
    )
}

export default DictionaryCreateForm