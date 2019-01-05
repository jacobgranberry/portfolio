import React from "react";
import axios from "axios";
import FormWrapper from '../atoms/FormWrapper';
import FormInput from '../atoms/FormInput';
import FormTextArea from '../atoms/FormTextArea';


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", surname: "", email: "", message: ""};
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
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <FormWrapper onSubmit={this.handleForm}>
        <label htmlFor="name">Name</label>
        <FormInput type="text" id="name" name="name" onChange={this.handleFields} />

        <label htmlFor="surname">Surname</label>
        <FormInput type="text" id="surname" name="surname" onChange={this.handleFields} />

        <label htmlFor="email">Email</label>
        <FormInput type="email" id="email" name="email" onChange={this.handleFields} />

        <label htmlFor="message">Your Message</label>
        <FormTextArea name="message" id="message" onChange={this.handleFields}></FormTextArea>

        <button type="submit">Send</button>
      </FormWrapper>
    );
  }
}

export default Form;