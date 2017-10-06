import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import * as util from '../../lib/util.js';

import Content from '../content';
import Landing from '../landing';

class App extends React.Component {


  render() {
    return(
      <BrowserRouter>
        <section>
          <Landing/>
          <Content />
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
