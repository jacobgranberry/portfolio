import styled from 'styled-components';
import colors from '../theme/colors';

const FormTextArea = styled.textarea`
    background-color: ${colors.white};
    width: 100%;
    border-radius: 8px;
    padding: 12px;
    margin: 16px;
    min-height: 150px;
    -webkit-appearance: none;
    outline: 0;
    resize: none;
    display: block;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;

  &:focus {
    border: 2px solid ${colors.blue};
  }
`
export default FormTextArea;