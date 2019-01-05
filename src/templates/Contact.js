import React from 'react';

import Section from '../atoms/Section';
import BoxAlt from '../atoms/BoxAlt';
import Container from '../atoms/Container';
import Nav from '../molecules/Nav';
import { TitleH1 } from '../atoms/Title';
import Form from '../organisms/Form';
import Footer from '../molecules/Footer';

const Contact = () => (
    <>
    <Section full>
        <BoxAlt>
            <Container>
                <Nav />
                <TitleH1>Contact Me</TitleH1>
                <Form/>
            </Container>
        </BoxAlt>
    </Section>
    <Footer />
    </>
);

export default Contact;