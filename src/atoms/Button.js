import styled from 'styled-components';
import colors from '../theme/colors';

const Button = styled.button`
  display: block;
  color: ${colors.dark};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.dark};
  border-radius: 3px;
  text-align: center;
`;

export default Button;