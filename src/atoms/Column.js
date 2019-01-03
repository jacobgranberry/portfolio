import styled, {css} from 'styled-components';

const Column = styled.div`
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
`

export default Column;