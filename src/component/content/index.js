import './_content.scss';
import React from 'react';

import NavBar from '../navbar';
import About from '../about';
import Skills from '../skills';
import Skills2 from '../skills2';

class Content extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <section id='content'>
        <NavBar/>
        <About />
        <Skills2/>
      </section>
    )
  }
}

export default Content;
