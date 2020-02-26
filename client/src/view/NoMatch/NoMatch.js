import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
    text-align:center
`;
const H2 = styled.h2`
    font-size: 110px;
    color: #FF0000;
    margin-top: 10vh;
`;
const P = styled.p`
    font-size: 30px;
    margin-top: 30px;
`;

class NoMatch extends React.Component {

    render() {
        return (
            <>
                <Section>
                    <H2>404</H2>
                    <P>Podana strona nie istnieje lub została przeniesiona</P>
                </Section>

                <footer className="home-footer">
                    Mateusz Buturla 2020
                </footer>
            </>
        );
    }
}

export default NoMatch;
