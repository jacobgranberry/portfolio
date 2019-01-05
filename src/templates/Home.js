import React from 'react';
import Box from '../atoms/Box';
import Section from '../atoms/Section';
import Container from '../atoms/Container';
import Nav from '../molecules/Nav';
import Footer from '../molecules/Footer';
import Header from '../atoms/Header';
import Text from '../atoms/Text';
import ColoredSpan from '../atoms/ColoredSpan';
import Card from '../organisms/Card';

import data from "../data.js";

const Home = () => (
    <>
    <Section fixed>
        <Box>
            <Container>
                <Nav />
                <Header jacob>
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
                <Text><ColoredSpan>Front-end Engineer</ColoredSpan> from Austin, Texas.</Text>
            </Container>
        </Box>
    </Section>
        <Container>
        <section id="projects">
        <Text semibold
              centered
              style={{marginTop: 90}}>Featured Projects</Text>
        {data.map(project =>
            <Card
                key={project.key}
                name={project.name}
                techs={project.techs}
                description={project.description}
                image={project.image}
                url={project.url}
                github={project.github}
            />
        )}
        </section>
        </Container>
        <Footer />
    </>
);

export default Home;