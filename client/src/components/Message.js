import React from "react"
import styled from 'styled-components';

const P = styled.p`
    margin-top: 20px;
`;

const Message = ({ message }) => {
    return (
        <>
            {message !== '' &&
                <P>{message}</P>
            }
        </>
    )
}

export default Message