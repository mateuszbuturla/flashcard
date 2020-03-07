import React from "react"
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: block;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px 2px #bababa;
    padding: 20px;
    margin-top: 10px;
`;

const Word = ({ correct, secondLanguage, translation, index }) => {
    if (correct)
        return (
            <Container style={{ color: 'green' }}>
                {index}. {secondLanguage} - {translation}
            </Container>
        )
    else
        return (
            <Container style={{ color: 'red' }}>
                {index}. {secondLanguage} - {translation}
            </Container>
        )
}

export default Word