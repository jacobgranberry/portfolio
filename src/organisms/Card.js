import React, { Component } from 'react';
import Row from '../atoms/Row';
import Column from '../atoms/Column';
import Header from '../atoms/Header';
import TechList from '../atoms/TechList';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Image from '../atoms/Image';

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
`

class Card extends Component  {

    render() {
        const { name, description, image } = this.props;
        const items = Object.values(this.props.techs);

        return (
            <CardWrapper>
                <Row>
                    <Column colmd6 colsm12>
                        <Header card>{name}</Header>
                        <TechList>{items.map(tech =>
                            tech
                        ).join(' / ')}</TechList>
                        <Text regular>{description}</Text>
                        <Button>Visit Website</Button>
                    </Column>

                    <Column colmd6 colsm12>
                        <ImgWrapper>
                            <Image src={image} alt={name}/>
                        </ImgWrapper>
                    </Column>
                </Row>
            </CardWrapper>
        )
    }
}


export default Card;