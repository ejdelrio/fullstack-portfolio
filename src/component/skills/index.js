import './_skills.scss';
import React from 'react';
import snippets from '../../lib/snippets.js';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classSwitch: 'hidden',
      techClass: 'tech-hidden',
      techList: 'list-hidden',
      clickedItem: 'Node.js',
      display: 'item-1'
    }
    this.unHide = this.unHide.bind(this);
    this.newPick = this.newPick.bind(this);
  }

  newPick(val, ind) {
    let clickedItem = val;
    let display = `item-${ind + 1}`
    this.setState({
      clickedItem,
      display
    });
  }

  unHide() {
    let classSwitch = ''
    let techClass = 'something'
    let techList = 'slideExpandUp';
    this.setState({
      classSwitch,
      techList,
    });
  }

  render() {

    let contents = {
      'Node.js': snippets.node,
      'React.js / Redux': snippets.react,
      'MongoDB': snippets.node,
      'AWS': snippets.node,
      'Heroku': snippets.node,
    }


    return(
      <section id='skills'
        onWheel={() => this.unHide()}
        onTouchMove={() => this.unHide()}
      >
        <section onWheel={() => this.unHide()}>
          <p>Frameworks / Libraries</p>
          <section className={this.state.display}>
            <p>{this.state.clickedItem}</p>
            <div></div>
            {contents[this.state.clickedItem]}
          </section>
          <ul className={this.state.techList}>
            {Object.keys(contents).map((val, ind) => {
              return(
                <li key={ind} className={this.state.techClass}>
                  <div onClick={() => this.newPick(val, ind)}>
                    <p>{val}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </section>
    )
  }
}

export default Skills;
