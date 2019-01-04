import React, { Component } from 'react';
import Row from '../atoms/Row';
import Column from '../atoms/Column';
import Header from '../atoms/Header';
import TechList from '../atoms/TechList';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

import styled from 'styled-components';
import colors from '../theme/colors';

const CardWrapper = styled.div`
    background-color: ${colors.white};
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    margin: 64px 32px;
`

const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 24px;

    @media (max-width: 64em) {
        height: 350px;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

class Card extends Component  {

    render() {
        const { name, description, image, url } = this.props;
        const items = Object.values(this.props.techs);

        const imgStyle = {
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%",
            border: `1px solid ${colors.gray}`
        }

        return (
            <CardWrapper>
                <Row>
                    <Column second colmd6 colsm12>
                        <Header card>{name}</Header>
                        <TechList>{items.map(tech =>
                            tech
                        ).join(' / ')}</TechList>
                        <Text regular>{description}</Text>
                        <ButtonWrapper>
                            <Button href={url}>Visit Website</Button>
                        </ButtonWrapper>
                    </Column>

                    <Column first colmd6 colsm12>
                        <ImgWrapper>
                            <div style={imgStyle}></div>
                        </ImgWrapper>
                    </Column>
                </Row>
            </CardWrapper>
        )
    }
}


export default Card;