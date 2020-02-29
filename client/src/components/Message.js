import React from "react"

const DashboardMessage = ({ message }) => {
    return (
        <>
            {message !== '' &&
                <p className="dashboard__message">{message}</p>
            }
        </>
    )
}

export default DashboardMessage