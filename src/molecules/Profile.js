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
        <Row style={{marginBottom: 64}}>
            <Column centered colmd6 colsm12>
                <ProfileImage />
            </Column>
            <Column colmd6 colsm12>
                <Text regular>
                I’ ve worked across the stack in Javascript, from front-end technologies like React, Redux, and Angular, to server - side Node / Express servers, MySql databases, and RESTful APIs. I have a passion
                for engineering solutions to smart and satisfying user experiences.  I enjoy optimizing and tinkering with applications until they are just right.
                <br/>
                <br/>
                I have a background in art and believe it formed the foundation from which I have built strong engineering skills, and also effectively closes the gap that sometimes exists between designers and engineers.
                <br/>
                <br/>
                I also founded a popular fan project called WesterosCraft, a Minecraft server building the world of Game of Thrones. It has been in numerous publications, holds a Guinness World Record, exhibited in museums, and continues to impress and innovate in the community-driven video game space. When I'm not managing that, I'm reading a good book, walking the dogs with my wife or drinking a good beer.
                </Text>
            </Column>
        </Row>
    </ProfileWrapper>
    </>
)

export default Profile;