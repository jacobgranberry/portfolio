import styled from 'styled-components';
import colors from '../theme/colors';

const TechList = styled.div`
    color: ${colors.red};
    display: flex;
    flex-direction: row;
    font-size: 24px;
    padding: 0 24px;

    @media (max-width: 48em) {
        font-size: 20px;
    }
`

export default TechList;