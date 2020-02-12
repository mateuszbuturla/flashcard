import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const KitContainer = styled.div`
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 5px 2px #bababa;
    width: 90%;
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
    margin-right: 20px;
    ::before
    {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 25px;
        background: linear-gradient(165deg, rgba(92, 30, 219, 1),rgba(21, 117, 191, 1));
        opacity: 0;
        transition: 1s;
    }
    :hover
    {
        ::before {
            opacity: 1;
        }
    }

    @media (min-width: 630px) 
    {
        width: 40%;
    }
`;

const Name = styled.p`
    font-size: 25px;
    font-weight: bold
`;

const Count = styled.p`
    font-size: 20px;
    margin-top: 5px
`;

const Owner = styled.p`
    font-size: 18px;
    margin-top: 35px
`;

class DashboardKit extends React.Component {

    render() {
        const { dictionary, owner } = this.props;
        return (
            <KitContainer>
                <Link to={`/dashboard/dictionary/main/${dictionary._id}`} style={{ textDecoration: 'none', color: '#000' }}>
                    <Name>{dictionary.name}</Name>
                    <Count>{dictionary.vocabulary.length} pojęć</Count>
                    <Owner>{owner}</Owner>
                </Link>
            </KitContainer>
        );
    }
}

export default DashboardKit;
