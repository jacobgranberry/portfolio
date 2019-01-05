import React from "react";
import axios from "axios";
import FormWrapper from '../atoms/FormWrapper';
import FormInput from '../atoms/FormInput';
import FormTextArea from '../atoms/FormTextArea';
import FormLabel from '../atoms/FormLabel';
import FormButton from '../atoms/FormButton';
import { TitleH2 } from '../atoms/Title';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  padding: 64px 16px;
`


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", email: "", message: "", submitted: false};
  }

  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/vnEuGAcQIzI",
      this.state,
      {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      e.preventDefault();
      this.setState({ submitted: true })
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {

    const { submitted } = this.state;

    if (submitted) {
      return (
        <TitleWrapper>
          <TitleH2>Thanks!</TitleH2>
          <TitleH2>I'll reach out to you soon!</TitleH2>
        </TitleWrapper>
      )
    } else {
      return (
        <FormWrapper onSubmit={this.handleForm}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput type="text" id="name" name="name" onChange={this.handleFields} />

          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" name="email" onChange={this.handleFields} />

          <FormLabel htmlFor="message">Your Message</FormLabel>
          <FormTextArea required name="message" id="message" onChange={this.handleFields}></FormTextArea>

          <FormButton type="submit">Send</FormButton>
        </FormWrapper>
      );
    }

  }
}

export default Form;