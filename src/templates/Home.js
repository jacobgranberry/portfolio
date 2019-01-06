import React from 'react';
import styled from 'styled-components';
import Box from '../atoms/Box';
import Section from '../atoms/Section';
import Container from '../atoms/Container';
import Nav from '../molecules/Nav';
import Footer from '../molecules/Footer';
import Header from '../atoms/Header';
import Text from '../atoms/Text';
import ColoredSpan from '../atoms/ColoredSpan';
import Card from '../organisms/Card';
import MobileNav from '../organisms/MobileNav';

import data from "../data.js";

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const InlineSpan = styled.span`
    display: inline;
`

const Spacer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    height: 100%;
`

const Home = () => (
    <>
    <Section fixed>
        <Box>
            <Container>
                <Spacer>
                    <MobileNav />
                    <Nav />
                    <ContentWrapper>
                        <Header jacob>
                            <InlineSpan>J</InlineSpan>
                            <InlineSpan>A</InlineSpan>
                            <InlineSpan>C</InlineSpan>
                            <InlineSpan>O</InlineSpan>
                            <InlineSpan>B</InlineSpan>
                        </Header>
                        <Header granberry>
                            <InlineSpan>G</InlineSpan>
                            <InlineSpan>R</InlineSpan>
                            <InlineSpan>A</InlineSpan>
                            <InlineSpan>N</InlineSpan>
                            <InlineSpan>B</InlineSpan>
                            <InlineSpan>E</InlineSpan>
                            <InlineSpan>R</InlineSpan>
                            <InlineSpan>R</InlineSpan>
                            <InlineSpan>Y</InlineSpan>
                        </Header>
                    </ContentWrapper>
                        <Text><ColoredSpan>Front-end Engineer</ColoredSpan> from Austin, Texas.</Text>
                </Spacer>
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