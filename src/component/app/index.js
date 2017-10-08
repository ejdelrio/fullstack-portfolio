import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import * as util from '../../lib/util.js';

import Content from '../content';
import Landing from '../landing';
import Contact from '../contact';
import Footer from '../footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageStatus: 'message-hidden'
    }
    this.unHide = this.unHide.bind(this);
  }

  unHide() {
    let messageStatus = this.state.messageStatus === '' ?
    'message-hidden': '';
    this.setState({messageStatus});
  }


  render() {
    return(
      <BrowserRouter>
        <section id='router'>
          <section>
            <Landing
              open={this.unHide}
            />
            <Content />
            <Footer />
          </section>
          <Contact
            close={this.unHide}
            className={this.state.messageStatus}
          />
        </section>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  token: state.token
});

export default connect(mapStateToProps, undefined)(App);
