import React from "react"

const Word = ({ correct, secondLanguage, translation, index }) => {
    if (correct)
        return (
            <div style={{ color: 'green' }}>
                {index}. {secondLanguage} - {translation}
            </div>
        )
    else
        return (
            <div style={{ color: 'red' }}>
                {index}. {secondLanguage} - {translation}
            </div>
        )
}

export default Word