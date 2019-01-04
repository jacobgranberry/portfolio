import React from 'react';

import Section from '../atoms/Section';
import BoxAlt from '../atoms/BoxAlt';
import Container from '../atoms/Container';
import Nav from '../molecules/Nav';
import { TitleH1, TitleH2 } from '../atoms/Title';
import Profile from '../molecules/Profile';
import Footer from '../molecules/Footer';


const About = () => (
    <>
    <Section full>
        <BoxAlt>
            <Container>
                <Nav />
                <TitleH1>About Me</TitleH1>
                <Profile/>
            </Container>
        </BoxAlt>
    </Section>
    <Footer />
    </>
);

export default About;