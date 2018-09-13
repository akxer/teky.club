import React, {Component} from "react";
import Proptypes from "prop-types";
import './context-menu.scss';

export default class CustomContextMenu extends Component {
  static propTypes = {
    children: Proptypes.oneOfType([Proptypes.array, Proptypes.object]).isRequired,
    contextMenu: Proptypes.element.isRequired,
    element: Proptypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  handleContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.element.classList.add('active');
    this.props.element.style.top = e.clientY + 5 + "px";
    this.props.element.style.left = e.clientX + 5 + "px";
    return false;
  };

  hideContextMenu = (e) => {
    if (this.props.element.className.includes('active')) {
      e.preventDefault();
      this.props.element.classList.remove('active');
    }
  };

  render() {
    return (
      <div onContextMenu={this.handleContextMenu} onClick={this.hideContextMenu}>
        {this.props.contextMenu}
        {this.props.children}
      </div>
    );
  }
}
