import './_skills.scss';
import React from 'react';

class Skills2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSwitch: 'hidden',
      rightSwitch: 'hidden',
      divSwitch: 'hidden-div'
    }
    this.unHide = this.unHide.bind(this);
  }

  unHide() {
    let [leftSwitch, rightSwitch] = ['slideLeft', 'slideRight'];
    this.setState({
      leftSwitch,
      rightSwitch,
      divSwitch: ''
    });

  }

  render() {
    return(
      <section id='skills2'
        onMouseOver={this.unHide}
      >
        <h5 className={this.state.rightSwitch}>Skills</h5>
        <div className={this.state.divSwitch}></div>
        <ul>
          <li className={this.state.rightSwitch}>
            <p>Front End</p>
            <div></div>
            <ul>
              <li>CSS3/SCSS</li>
              <li>React / Redux</li>
              <li>HTML5</li>
              <li>Handlebars</li>
            </ul>
          </li>
          <li className={this.state.leftSwitch}>
            <p>Back End</p>
            <div></div>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>Debug</li>
              <li>npm</li>
              <li>Cors</li>
              <li>Morgan</li>
            </ul>
          </li>
          <li className={this.state.rightSwitch}>
            <p>Development</p>
            <div></div>
            <ul>
              <li>ECMAScript ES6</li>
              <li>MongoDB / Mongoose</li>
              <li>AWS</li>
              <li>PostgresSQL</li>
              <li>Heroku</li>
              <li>CRUD, MVC, TDD</li>
              <li>Webpack</li>
              <li>Babel</li>
            </ul>
          </li>
          <li className={this.state.leftSwitch}>
            <p>Testing</p>
            <div></div>
            <ul>
              <li>Mocha</li>
              <li>Chai</li>
              <li>Jest</li>
              <li>Travis.io</li>
              <li>Coveralls</li>
            </ul>
          </li>
        </ul>
      </section>
    )
  }
}

export default Skills2;
