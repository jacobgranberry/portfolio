import React from 'react';
import Box from '../atoms/Box';
import Section from '../atoms/Section';
import Container from '../atoms/Container';
import Nav from '../organisms/Nav';

const Home = () => (
    <>
    <Section>
        <Box>
            <Container>
                <Nav />
            </Container>
        </Box>
    </Section>
    <Section light>

    </Section>
    </>
);

export default Home;