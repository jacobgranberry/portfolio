import styled from 'styled-components';
import profilepicture from '../images/profile.jpg';

const ProfileImage = styled.img`
    background-image: url(${profilepicture});
    background-repeat: none;
    background-size: cover;
    background-position: center;
`

export default ProfileImage