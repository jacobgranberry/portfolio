import styled, { css } from 'styled-components';
import colors from '../theme/colors';

const Button = styled.a`
  display: block;
  color: ${colors.dark};
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
  margin: 24px;
  padding: 12px 24px;
  border: 2px solid ${colors.gray};
  text-align: center;
  cursor: pointer;
  text-decoration: none;

  ${props =>  props.footerbutton && css`
      border: 2px solid ${colors.red};
      font-size: 26px;
      color: ${colors.white};
      width: 350px;
      padding: 32px;
  `}
`;

export default Button;