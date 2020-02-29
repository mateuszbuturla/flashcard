import React from "react"
import styled from 'styled-components';

const ErrorLabel = styled.div`
    width: 90%;
    color: #d11b1b;
    font-size: 13px;
`;

const ErrorInputValid = ({ valid, message }) => {
    return (
        <>
            {
                valid === false &&
                <ErrorLabel>
                    <p>{message}</p>
                </ErrorLabel>
            }
        </>
    )
}

export default ErrorInputValid