import React from "react"

const LatelyIncorrect = ({ words }) => {
    const incorrectWords = words.map((element, index) => <div>{index}. {element.en} - {element.pl}</div>)
    return (
        <>
            {incorrectWords}
        </>
    )
}

export default LatelyIncorrect