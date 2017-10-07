import './_skills.scss';
import React from 'react';

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
    let labels = [
      'HTML5',
      'CSS3',
      'JavaScript'
    ]

    let techs = [
      'Node.js',
      'React.js / Redux',
      'MongoDB',
      'Postgres',
      'Webpack',
      'AWS',
      'Heroku'
    ]

    let contents = {
      'Node.js': 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js\' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.',

      'React.js / Redux': 'In computing, React (sometimes styled React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations. React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS.',

      'MongoDB': 'MongoDB provides high availability with replica sets. A replica set consists of two or more copies of the data. Each replica set member may act in the role of primary or secondary replica at any time. All writes and reads are done on the primary replica by default. Secondary replicas maintain a copy of the data of the primary using built-in replication. When a primary replica fails, the replica set automatically conducts an election process to determine which secondary should become the primary. Secondaries can optionally serve read operations, but that data is only eventually consistent by default.',

      'Postgres': 'PostgreSQL, often simply Postgres, is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards compliance. As a database server, its primary functions are to store data securely and return that data in response to requests from other software applications. It can handle workloads ranging from small single-machine applications to large Internet-facing applications (or for data warehousing) with many concurrent users; on macOS Server, PostgreSQL is the default database; and it is also available for Microsoft Windows and Linux (supplied in most distributions).',
      'Webpack': 'Webpack is an open-source JavaScript module bundler. Webpack takes modules with dependencies and generates static assets representing those modules. It takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes. The bundler can be used from the command line, or can be configured using a config file which is named webpack.config.js.',

      'AWS': 'Coming Soon',
      'Heroku': 'Coming Soon'
    }


    return(
      <section id='skills'
        onWheel={() => this.unHide()}
        onTouchMove={() => this.unHide()}
      >
        <div onWheel={() => this.unHide()}>
          <ul>
            {labels.map((val, ind) => {
              return(
                <li key={ind} className={this.state.classSwitch}>
                  <div>
                    <p>{val}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <section onWheel={() => this.unHide()}>
          <p>Frameworks / Libraries</p>
          <section className={this.state.display}>
            <p>{this.state.clickedItem}</p>
            <div></div>
            <p>{contents[this.state.clickedItem]}</p>
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
