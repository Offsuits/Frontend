import React from 'react';
import Person from './Person.jsx';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer: [true, false, false, false, false, false],
      pot: 0,
      active: [true, true, true, true, true, true],
      show: false,
      holes: {
        one: ['As', '3d'],
        two: ['4c', '5d'],
        three: ['5d', '4d'],
        four: ['2h', '2d'],
        five: ['9c', '8d'],
        six: ['7h', '6d']
      },
      name: ['Easak Hong', 'Marc Perry', 'Abhi Bala', 'Scott Davis', 'Yesiam Gary', 'Josh Fish'],
      stack: ['9,000,000', '8,000,000', '7,000,000', '1,000,000', '5', '1']
    };

    // this.currSeat = 1;
    // this.hidden =
  }

  changeDealer() {
    var arr = this.state.dealer;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === true && i !== arr.length - 1) {
        arr[i + 1] = true;
        arr[i] = false;
      } else {
        arr[0] = true;
        arr[i] = false;
      }
    }

    this.setState({
      dealer: arr
    });
  }

  render() {
    return (<div>
      <div id="table"/>
      <div className="seats">
        <div className="seat1">
          <Person bot={true} player={this.currSeat===1} active={this.state.active[0]} holecard={this.state.holes.one[0]} dealer={this.state.dealer[0]} name={this.state.name[0]} stack={this.state.stack[0]}/>
        </div>
        <div className="seat2">
          <Person bot={true} player={this.currSeat===2} active={this.state.active[1]} holecard={this.state.holes.two[0]} dealer={this.state.dealer[1]} name={this.state.name[1]} stack={this.state.stack[1]}/>
        </div>
        <div className="seat3">
          <Person bot={false} player={this.currSeat===3} active={this.state.active[2]} holecard={this.state.holes.three[0]} dealer={this.state.dealer[2]} name={this.state.name[2]} stack={this.state.stack[2]}/>
        </div>
        <div className="seat4">
          <Person bot={false} player={this.currSeat===4} active={this.state.active[3]} holecard={this.state.holes.four[0]} dealer={this.state.dealer[3]} name={this.state.name[3]} stack={this.state.stack[3]}/>
        </div>
        <div className="seat5">
          <Person bot={false} player={this.currSeat===5} active={this.state.active[4]} holecard={this.state.holes.five[0]} dealer={this.state.dealer[4]} name={this.state.name[4]} stack={this.state.stack[4]}/>
        </div>
        <div className="seat6">
          <Person bot={false} player={this.currSeat===6} active={this.state.active[5]} holecard={this.state.holes.six[0]} dealer={this.state.dealer[5]} name={this.state.name[5]} stack={this.state.stack[5]}/>
        </div>
      </div>
    </div>)
  }
}

export default Table;
