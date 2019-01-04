import React from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';
import profilepicture from '../images/profile.jpg';

const ProfileImageWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height:100%;
`

const ProfileImageContainer = styled.img`
    background-image: url(${profilepicture});
    background-repeat: none;
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    border: 5px solid ${colors.blue};

    @media (max-width: 48em) {
        height:200px;
        width: 200px;
    }
`

const ProfileImage = () => (
    <ProfileImageWrapper>
        <ProfileImageContainer />
    </ProfileImageWrapper>
)

export default ProfileImage