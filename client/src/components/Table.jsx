import React from 'react';
import Person from './Person.jsx';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer: 0,
      pot: 0,
      active: [true, true, true, true, true, true],
      show: false
    };

    this.currSeat = 1;

    this.holes = {1: ['3c', '3d'], 2: ['4c', '5d'], 3: ['5c', '4d'], 4: ['2c', '2d'], 5: ['9c', '8d'],
      6: ['7c', '6d']};

    this.hidden =
  }

  render() {
    return (<div>
      <div id="table"/>
      <div className="seats">
        <div className="seat1">
          <Person bot={true} player={this.currSeat===1} active={this.state.active[0]}/>
        </div>
        <div className="seat2">
          <Person bot={true} player={this.currSeat===2} active={this.state.active[1]}/>
        </div>
        <div className="seat3">
          <Person bot={false} player={this.currSeat===3} active={this.state.active[2]}/>
        </div>
        <div className="seat4">
          <Person bot={false} player={this.currSeat===4} active={this.state.active[3]}/>
        </div>
        <div className="seat5">
          <Person bot={false} player={this.currSeat===5} active={this.state.active[4]}/>
        </div>
        <div className="seat6">
          <Person bot={false} player={this.currSeat===6} active={this.state.active[5]}/>
        </div>
      </div>

    </div>)
  }
}

export default Table;