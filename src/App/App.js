import React, {Component} from 'react';
import {CustomContextMenu} from "./Components/ContextMenu";
import MyContextMenu from './Components/MyContextMenu';
import {Modal} from "./Components/Modal";
import {deepPurple, pink} from "@material-ui/core/colors";
import { withTheme, createMuiTheme } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: pink
  }
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleHelp = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    let contextMenu = document.querySelector('#context-menu');
    return (
      <CustomContextMenu
        contextMenu={
          <MyContextMenu element={contextMenu} handleHelp={this.handleHelp}/>
        } element={contextMenu}>
        <div className="outer">
          <div className="middle">
            <div className="text-center">
              <p className="pacifico" style={{fontSize: '100px'}}>Get Teky</p>
              <h2>Coming Soon...</h2>
            </div>
            <Modal title="Help" handleClose={this.handleClose} actions={
              <Button onClick={this.handleClose} color="secondary" autoFocus>
                Dismiss
              </Button>
            } body={"Just a page that might be, I might host my projects here or may be do stuff in background." +
            " I hope for both but we'll see what happens as time progresses"} open={this.state.open} />
          </div>
        </div>
      </CustomContextMenu>
    );
  }
}

export default withTheme()(App);