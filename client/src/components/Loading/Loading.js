import React from "react"
import styled from "styled-components";

import Logo from '../../img/logoBlack.png';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const LogoImg = styled.img`
    width: 100px;
`;

const LoadingP = styled.p`
    font-size: 30px;
    width: 100%;
    text-align: center;
    margin-top: 20px
`;

const Loading = () => {
    return (
        <Container>
            <LogoImg src={Logo} alt="Loading icon" />
            <LoadingP>Ładowanie...</LoadingP>
        </Container>
    )
}

export default Loading;