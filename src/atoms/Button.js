import styled from 'styled-components';
import colors from '../theme/colors';

const Button = styled.a`
  display: block;
  color: ${colors.dark};
  background-color: ${colors.white};
  font-size: 20px;
  font-weight: 500;
  margin: 24px;
  padding: 12px 24px;
  border: 2px solid ${colors.gray};
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`;

export default Button;