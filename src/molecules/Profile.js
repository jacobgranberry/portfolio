import React from 'react';
import styled from 'styled-components';

import Row from '../atoms/Row';
import Column from '../atoms/Column';
import ProfileImage from '../atoms/ProfileImage';

const ProfileWrapper = styled.div`

`

const Profile = () => (
    <>
    <ProfileWrapper>
        <Row>
            <Column colmd6 colsm12>
                <ProfileImage />
            </Column>
            <Column colmd6 colsm12>
            </Column>
        </Row>
    </ProfileWrapper>
    </>
)

export default Profile;