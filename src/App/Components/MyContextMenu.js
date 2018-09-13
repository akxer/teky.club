import React, {Component} from "react";
import Proptypes from "prop-types";
import {ContextMenu, Item} from './ContextMenu';

export default class MyContextMenu extends Component {
  static propTypes = {
    element: Proptypes.object.isRequired,
    handleHelp: Proptypes.func.isRequired
  };

  render() {
    return (
      <ContextMenu element={this.props.element}>
        <Item handleClick={this.props.handleHelp}>Help</Item>
      </ContextMenu>
    );
  }
}