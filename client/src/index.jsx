import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table.jsx';
import ActionBar from './components/ActionBar.jsx';
import Chatbox from './components/Chatbox.jsx';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const styles = {
      navbar: {position: "fixed", top: 0, left: 0, backgroundColor: "#181818"}
    }

    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="OFFSUIT" style={styles.navbar} showMenuIconButton={false} iconElementRight={<FlatButton label="LEAVE TABLE"/>} />
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
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
