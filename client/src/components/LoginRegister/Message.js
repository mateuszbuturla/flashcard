import React from "react"

const Message = ({ message }) => {
    return (
        <>
            {message !== '' &&
                <p className="login-register__message">
                    {message}
                </p>
            }
        </>
    )
}

export default Message