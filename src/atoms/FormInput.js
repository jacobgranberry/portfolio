import styled from 'styled-components';
import colors from '../theme/colors';

const FormInput = styled.input`
  background-color: ${colors.white};
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  margin: 16px;
  outline: 0;

  &:focus {
    border: 2px solid ${colors.blue};
  }
`
export default FormInput;