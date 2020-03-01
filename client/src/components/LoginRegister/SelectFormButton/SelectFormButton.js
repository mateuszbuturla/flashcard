import React from "react"

import './selectFormButton.sass';

const SelectFormButton = ({ changeForm, currentForm }) => {
    return (
        <div className="toggleButton">
            <button
                id="login"
                onClick={changeForm.bind(this)}
                className={`toggleButton__button${currentForm === 'login' ? ' toggleButton__button--active' : ''}`}>
                Logowanie
            </button>
            <button
                id="register"
                onClick={changeForm.bind(this)}
                className={`toggleButton__button${currentForm === 'register' ? ' toggleButton__button--active' : ''}`}>
                Rejestracja
            </button>
        </div>
    )
}

export default SelectFormButton