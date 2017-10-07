import './_landing.scss';
import React from 'react';

class Landing extends React.Component {


  render() {
    return(
      <section id='landing'>
        <div>
        </div>
        <a href='mailto:edwinjdelrio@gmail.com'>✉</a>
        <section>
          <h1 className='fadeIn'>Edwin Del Rio</h1>
          <h2 className='fadeIn'>Fullstack Javascript Developer</h2>
          <div className='fadeIn'></div>
          <p className='fadeIn pulse'>▼</p>
        </section>

      </section>
    )
  }
}

export default Landing;
