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
      req: false,
      errorMessage: '',
      errorColor: 'red'
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
    let {name, subject, body, sender} = this.state;
    var nameError, subjectError, bodyError, senderError, error;
    var errorMessage = 'Please Complete All Forms!!';

    return new Promise((resolve, reject) => {
      nameError = !name ? 'inputError' : '';
      bodyError = !body ? 'inputError' : '';
      subjectError = !subject ? 'inputError' : '';
      senderError = !sender ? 'inputError' : '';

      if(nameError || bodyError || subjectError || senderError) {
        reject({
          nameError,
          bodyError,
          subjectError,
          senderError,
          error: true,
          errorMessage,
          errorColor: 'red'
        });
      }
      resolve();
    })
  }

  sendMessage(e) {
    e.preventDefault();
    this.errorCheck()
    .then(() => {
      return this.mailCall(this.state);
    })
    .catch(error => {
      if(!error.status) return this.setState(error);
      this.setState({
        error: true,
        errorColor: 'red',
        errorMessage: 'Whoops! Somethingwent wrong. Please try your request again.'
      })

    })
  }

  mailCall(data) {
    if(!data) return;
    data.secret = APP_SECRET;
    return superagent.post(`${__API_URL__}/${ENDPOINT}`)
    .send(data)
    .then(res => {
      this.setState({
        errorColor: 'green',
        errorMessage: 'Your message has been sent :D',
        error: true,
        sender: '',
        body: '',
        name: '',
        subject: '',
        nameError: '',
        subjectError: '',
        senderError: '',
        bodyError: '',
      })
    })

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
            placeholder='Please Enter Your Name.'
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
            value={this.state.body}
            onChange={this.onChange}
          ></textarea>
          <button type='submit'>Send Message</button>
        </form>
        {util.renderIf(this.state.error,
          <p
            style={{color: this.state.errorColor}}
          >
            {this.state.errorMessage}
          </p>
        )}
      </section>
    )
  }
}

export default Contact;
