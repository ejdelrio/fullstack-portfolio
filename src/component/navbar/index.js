import './_navbar.scss';
import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClass: ''
    }

    this.menuClick = this.menuClick.bind(this);
  }
  menuClick() {
    let menuClass = this.state.menuClass === '' ?
    'open-menu': '';
    this.setState({menuClass});
  }

  render() {
    return(
      <section id='navbar'>
        <ul>
          <li>
            <a href='#landing'
              onClick={this.menuClass}
            >Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skills2'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Code</a>
          </li>
          <li>
            <a href='#foot'>Contact</a>
          </li>
        </ul>
        <div></div>
        <div id='burger'
          onClick={this.menuClick}
          className={this.state.menuClass}
        >
          <div id='first'></div>
          <div id='second'></div>
          <div id='third'></div>
        </div>
      </section>
    )
  }
}

export default NavBar;
