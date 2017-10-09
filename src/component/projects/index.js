import './_projects.scss';
import React from 'react';

import snippets from '../../lib/snippets.js';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      node: '',
      react: 'hidden',
      mongo: 'hidden',
      aws: 'hidden',
      animationOne: 'hidden',
      animationTwo: 'hidden'
    }
    this.unHide = this.unHide.bind(this);
  }

  unHide(choice) {
    let newState = {};
    Object.keys(this.state).forEach(key => {
      newState[key] =  choice === key ? '' : 'hidden';
    })
    this.setState(newState);
  }

  render() {
    return (
      <section id='projects'>
        <h5>Projects / Code Samples</h5>
        <section>
          <div
            className={this.state.node}
            onClick={() => this.unHide('node')}
          >
            <p>Node.js</p>
            {snippets.node}
          </div>
          <div
            className={this.state.react}
            onClick={() => this.unHide('react')}
          >
            <p>React</p>
            {snippets.react}
          </div>
          <div
            className={this.state.mongo}
            onClick={() => this.unHide('mongo')}
          >
            <p>MongoDB</p>
            {snippets.mongo}
          </div>
          <div
            className={this.state.aws}
            onClick={() => this.unHide('aws')}
          >
            <p>AWS</p>
            {snippets.aws}
          </div>

        </section>
      </section>
    )
  }
}

export default Projects;
