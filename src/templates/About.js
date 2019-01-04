import React from 'react';

import Section from '../atoms/Section';
import Box from '../atoms/Box';
import Container from '../atoms/Container';
import Nav from '../molecules/Nav';
import { TitleH1, TitleH2 } from '../atoms/Title';
import Profile from '../molecules/Profile';


const About = () => (
    <>
    <Section full>
        <Box>
            <Container>
                <Nav />
                <TitleH1>About Me</TitleH1>
                <Profile/>
            </Container>
        </Box>
    </Section>
    </>
);

export default About;