import React from 'react';
import Box from '../atoms/Box';
import Section from '../atoms/Section';
import Container from '../atoms/Container';
import Nav from '../organisms/Nav';
import Header from '../atoms/Header';

const Home = () => (
    <>
    <Section>
        <Box>
            <Container>
                <Nav />
                <Header>
                    <span>J</span>
                    <span>A</span>
                    <span>C</span>
                    <span>O</span>
                    <span>B</span>
                </Header>
                <Header granberry>
                    <span>G</span>
                    <span>R</span>
                    <span>A</span>
                    <span>N</span>
                    <span>B</span>
                    <span>E</span>
                    <span>R</span>
                    <span>R</span>
                    <span>Y</span>
                </Header>
            </Container>
        </Box>
    </Section>
    <Section light>

    </Section>
    </>
);

export default Home;