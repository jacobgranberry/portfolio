import React from 'react';
import styled from 'styled-components';

import Row from '../atoms/Row';
import Column from '../atoms/Column';
import ProfileImage from '../atoms/ProfileImage';
import Text from '../atoms/Text';

const ProfileWrapper = styled.div`

`

const Profile = () => (
    <>
    <ProfileWrapper>
        <Row>
            <Column centered colmd6 colsm12>
                <ProfileImage />
                {/* <SocialIcons /> */}
            </Column>
            <Column colmd6 colsm12>
                <Text regular>
                I’ ve worked across the stack in Javascript, from front-end technologies like React, Redux, and Angular, to server - side Node / Express servers, MySql databases, and RESTful APIs. I have a passion
                for engineering solutions to smart and satisfying user experiences.  I enjoy optimizing and tinkering with applications until they are just right.
                <br/>
                <br/>
                I have a background in art and believe it formed the foundation from which I have built strong engineering skills, and also effectively closes the gap that sometimes exists between designers and engineers.
                </Text>
            </Column>
        </Row>
    </ProfileWrapper>
    </>
)

export default Profile;