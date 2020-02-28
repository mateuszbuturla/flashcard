import React from "react"

const SelectFormButton = ({ changeForm, currentForm }) => {
    return (
        <div className="select-form-input">
            <button id="login" onClick={changeForm.bind(this)} className={`select-form-input__button${currentForm === 'login' ? ' select-form-input__button--active' : ''}`}>Logowanie</button>
            <button id="register" onClick={changeForm.bind(this)} className={`select-form-input__button${currentForm === 'register' ? ' select-form-input__button--active' : ''}`}>Rejestracja</button>
        </div>
    )
}

export default SelectFormButton