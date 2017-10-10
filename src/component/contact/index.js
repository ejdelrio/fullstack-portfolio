import './_contact.scss';
import React from 'react';
import superagent from 'superagent';

import * as util from '../../lib/util.js';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      sender: '',
      subject: '',
      body: '',
      nameError: '',
      senderError: '',
      bodyError: '',
      subjectError: '',
      error: false,
    }
    this.onChange = this.onChange.bind(this);
    this.errorCheck = this.errorCheck.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  onChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  }
  errorCheck() {
    let [{name, subject, body, sender}] = [this.state];
    var nameError, subjectError, bodyError, senderError, error;
    nameError = name === '' ? 'inputError' : '';
    bodyError = body === '' ? 'inputError' : '';
    subjectError = subject === '' ? 'inputError' : '';
    senderError = sender === '' ? 'inputError' : '';

    error = !nameError || !bodyError || !subjectError || !senderError ?
    false: true;
    this.setState({
      nameError,
      bodyError,
      subjectError,
      senderError,
      error
    });
  }
  compileMessage() {

  }

  sendMessage(e) {
    e.preventDefault();
    let to = 'edwinjdelrio@gmail.com';

    this.errorCheck();
    if(this.state.error) return undefined;

    let data = this.compileMessage();


  }
  render() {
    return(
      <section id='contact' className={this.props.className}>
        <button onClick={this.props.close}>✖</button>
        <form onSubmit={this.sendMessage}>
          <input
            type='text'
            className={this.state.nameError}
            name='name'
            placeholder='Pleas Enter Your Name.'
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            type='text'
            name='sender'
            className={this.state.senderError}
            placeholder='Please Enter Your Email'
            value={this.state.sender}
            onChange={this.onChange}
          />
          <input
            type='text'
            name='subject'
            className={this.state.subjectError}
            placeholder='Please Enter a Subject'
            value={this.state.subject}
            onChange={this.onChange}
          />
          <textarea
            name='body'
            type='text'
            className={this.state.bodyError}
            placeholder='Write Message Here'
            value={this.body}
            onChange={this.onChange}
          ></textarea>
          <button type='submit'>Send Message</button>
        </form>
        {util.renderIf(this.state.error,
          <p>Please Fill Out All Fields!!</p>
        )}
      </section>
    )
  }
}

export default Contact;
