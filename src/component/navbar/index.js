import './_navbar.scss';
import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section id='navbar'>
        <ul>
          <li>
            <a href='#landing'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skills2'>Skills</a>
          </li>
          <li>
            <a href='#landing'>Projects</a>
          </li>
          <li>
            <a href='#foot'>Contact</a>
          </li>
        </ul>
        <div>
        </div>
      </section>
    )
  }
}

export default NavBar;
