import React from 'react';

class Person extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};


  }

  render() {
    if (!this.props.bot) {
      return (
        <div>
          <div className="playercontainer">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <img id="left" src="images/deck/3c.png"/>
              <img id="right" src="images/deck/3d.png"/>
            </div>
            <div id="name">
              Marc Perry
            </div>
            <div id="chipcount">
              1,579,000
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="playercontainer">
            <div id="name_bot">
              Marc Perry
            </div>
            <div id="chipcount_bot">
              1,000,000
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <img id="left" src="images/deck/2c.png"/>
              <img id="right" src="images/deck/2d.png"/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Person;