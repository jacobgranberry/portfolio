import styled from 'styled-components';
import colors from '../theme/colors';

const FormInput = styled.input`
  background-color: ${colors.white};
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 1px 1px rgba(black, 0.1);
  padding: 12px;
  margin: 16px;

  &:focus {
    border: 1px solid ${colors.red};
    outline: none;
  }
`
export default FormInput;