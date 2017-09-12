import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table.jsx';
import ActionBar from './components/ActionBar.jsx';
import Chatbox from './components/Chatbox.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  render() {
    return (
      <div>
        <div className="flex-container">
          <Table id="table"/>
        </div>
        <div className="action">
          <ActionBar/>
        </div>
        <div id="chat">
          <Chatbox id="chatbox"/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));