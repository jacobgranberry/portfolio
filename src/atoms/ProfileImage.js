import styled from 'styled-components';
import colors from '../theme/colors';
import profilepicture from '../images/profile.jpg';

const ProfileImage = styled.img`
    background-image: url(${profilepicture});
    background-repeat: none;
    background-size: cover;
    background-position: center;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    border: 5px solid ${colors.blue};
`

export default ProfileImage