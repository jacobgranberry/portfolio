import React from 'react';
import Row from '../atoms/Row';
import Column from '../atoms/Column';
import Header from '../atoms/Header';
import TechList from '../atoms/TechList';
import Text from '../atoms/Text';
import styled from 'styled-components';
import colors from '../theme/colors';

const CardWrapper = styled.div`
    background-color: ${colors.white};
    box-shadow: 5px 10px #888888;
    margin: 64px 32px;
`

class Card extends React.Component  {

    render() {
        const items = Object.values(this.props.techs);

        return (
            <CardWrapper>
                <Row>
                    <Column colmd6 colsm12>
                        <Header card>{this.props.name}</Header>
                        <TechList>{items.map(tech =>
                            tech
                        ).join(' / ')}</TechList>
                        <Text regular>{this.props.description}</Text>
                    </Column>

                    <Column colmd6 colsm12>
                    </Column>
                </Row>
            </CardWrapper>
        )
    }
}


export default Card;