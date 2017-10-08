import './_landing.scss';
import React from 'react';




class Landing extends React.Component {
  render() {
    let svgImg = (

      <svg
        style={{'enableBackground':'new 0 0 1691 1407'}}
        version="1.1"
        viewBox="0 0 1691 1407"
        onClick={this.props.open}
      >
        <g id="packet">
          <path d="M1691,165.177C1691,73.952,1617.048,0,1525.823,0H165.177C73.952,0,0,73.952,0,165.177v1076.646   C0,1333.048,73.952,1407,165.177,1407h1360.646c91.225,0,165.177-73.952,165.177-165.177V165.177z M166.062,132h1361.057   c18.216,0,32.881,14.528,32.881,32.746v1.433L869.916,856.337c-8.417,8.417-18.208,9.675-23.318,9.675   c-5.11,0-14.934-1.258-23.353-9.675L133,166.085v-1.339C133,146.528,147.846,132,166.062,132z M1527.119,1275H166.062   c-18.216,0-33.062-15.084-33.062-33.301V352.961l596.826,596.816c31.198,31.197,72.684,48.376,116.803,48.376   c44.125-0.003,85.528-17.186,116.724-48.382L1560,353.054v888.645C1560,1259.916,1545.335,1275,1527.119,1275z"/>
        </g>
        <g id="Layer_1"/>
      </svg>
    )



    return(
      <section id='landing'>
        <div>
        </div>
        {svgImg}
        <section>
          <h1 className='fadeIn'>Edwin Del Rio</h1>
          <h2 className='fadeIn'>Fullstack Javascript Developer</h2>
          <div className='fadeIn'></div>
          <a href='#about' className='fadeIn pulse'>▼</a>
        </section>

      </section>
    )
  }
}



export default Landing;
