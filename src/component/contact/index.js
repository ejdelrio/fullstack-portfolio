import './_contact.scss';
import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      content: '',
      error: false,
    }
    this.onChange = this.onChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  onChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  sendMessage(e) {
    e.preventDefault();
  }
  render() {
    return(
      <section id='contact'>
        <form onSubmit={this.sendMessage}>
          <input
            type='text'
            name='name'
            placeholder='Pleas Enter Your Name.'
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            type='text'
            name='email'
            placeholder='Please Enter Your Email'
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type='text'
            name='subject'
            placeholder='Please Enter a Subject',
            value={this.state.subject}
            onChange={this.onChange}
          />
          <textarea
            name='content'
            type='text'
            placeholder='Write Message Here'
            value={this.content}
            onChange={this.onChange}
          ></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    )
  }
}
