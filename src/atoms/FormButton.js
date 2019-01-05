import styled from 'styled-components';
import colors from '../theme/colors';

const FormButton = styled.button`
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
  transition: all 0.1s ease;

  &:hover {
    background-color: ${colors.dark};
    color: ${colors.white};
  }
`

export default FormButton;