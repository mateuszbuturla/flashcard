import React from "react";
import styled from 'styled-components';

const Announcement = styled.p`
    padding: 30px 5vw 0px 5vw;
    font-size: 20px;
`;

const DashboardAnnouncement = ({ message }) => {
    return (
        <Announcement>{message}</Announcement>
    )
}

export default DashboardAnnouncement