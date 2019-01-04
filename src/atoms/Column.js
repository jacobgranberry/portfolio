import styled, {css} from 'styled-components';

const Column = styled.div`

    flex: 0 0 auto;

    ${props => props.centered && css`
        text-align: center;
    `}

    ${props => props.colmd3 && css`
        @media (min-width: 64em) {
            flex-basis: 33.33%;
            max-width: 33.33%;
        }
    `}

    ${props => props.colmd6 && css`
        @media (min-width: 64em) {
            flex-basis: 50%;
            max-width: 50%;
        }
    `}

    ${props => props.colsm12 && css`
        flex-basis: 100%;
        max-width: 100%;
    `}

    ${props => props.first && css`
        @media (max-width: 64em) {
            order: 1;
        }
    `}

    ${props => props.second && css`
    @media (max-width: 64em) {
        order: 2;
    }

`}
`

export default Column;