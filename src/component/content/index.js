import './_content.scss';
import React from 'react';

import NavBar from '../navbar';
import About from '../about';
import Skills from '../skills';

class Content extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <section id='content'>
        <NavBar/>
        <About />
        <Skills/>
      </section>
    )
  }
}

export default Content;
