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
          <div id="dealer_chip">
            {this.props.dealer && <img id="dealer" src="images/dealerchip.png"/>}
          </div>
          <div className="playercontainer">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <img id="left" src={`images/deck/${this.props.holecard}.png`}/>
              <img id="right" src="images/deck/flipside_red.png"/>
            </div>
            <div id="name">
              {this.props.name}
            </div>
            <div id="chipcount">
              {this.props.stack}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div id="dealer_chip">
            {this.props.dealer && <img id="dealer" src="images/dealerchip.png"/>}
          </div>
          <div className="playercontainer">
            <div id="name_bot">
              {this.props.name}
            </div>
            <div id="chipcount_bot">
              {this.props.stack}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <img id="left" src={`images/deck/${this.props.holecard}.png`}/>
              <img id="right" src="images/deck/flipside_red.png"/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Person;
