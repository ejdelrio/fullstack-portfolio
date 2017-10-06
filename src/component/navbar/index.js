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
            <p>Home</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Blog</p>
          </li>
          <li>
            <p>Projects</p>
          </li>
        </ul>
        <div>
        </div>
      </section>
    )
  }
}

export default NavBar;
