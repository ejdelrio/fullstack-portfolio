import './_about.scss';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classSwitch: 'hidden'
    }
    this.unHide = this.unHide.bind(this);
  }

  unHide() {
    let classSwitch = 'slideLeft';
    this.setState({classSwitch});
  }

  render() {
    let labels = [
      'Front End Design',
      'API Architecture',
      'Responsive UI',
      'Single Page Apps',
      'Interactive Web Pages'
      ]
    return(
      <section id='about'
        className='panel'
        onMouseOver={this.unHide}
        onTouchMove={() => this.unHide()}
      >
        <a id='about'></a>
        <div>
          {labels.map((val, ind) => {
            return(
              <div key={ind} className={this.state.classSwitch}>
                <div>
                  <p>{val}</p>
                </div>
              </div>
            )
          })}
        </div>
        <section className='panel'>
          <div className='me'>
            <div></div>
          </div>
          <h4>-Fullstack Javascript Developer-</h4>
          <p>Hello, thanks for visiting my page. My name is Edwin. I'm a fullstack web developer primarily based in the west coast. Some of my programming interests include machine learning, social media platforms and client to client interactions. I'm also building my design skills to create beautiful user interfaces.
          </p>
        </section>
      </section>
    )
  }
}

export default About;
