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
        <ul className={this.state.menuClass}>
          <li>
            <a href='#landing'
              onClick={this.menuClick}
            >Home</a>
          </li>
          <li>
            <a href='#about'
              onClick={this.menuClick}
            >About</a>
          </li>
          <li>
            <a href='#skills2'
              onClick={this.menuClick}
            >Skills</a>
          </li>
          <li>
            <a href='#projects'
              onClick={this.menuClick}
            >Code</a>
          </li>
          <li>
            <a href='#foot'
              onClick={this.menuClick}
            >Contact</a>
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
