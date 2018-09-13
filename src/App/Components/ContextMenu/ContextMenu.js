import React, {Component} from "react";
import Proptypes from "prop-types";
import ReactDom from 'react-dom';

export default class ContextMenu extends Component {
  static propTypes = {
    children: Proptypes.oneOfType([Proptypes.array, Proptypes.object]).isRequired,
    element: Proptypes.object.isRequired
  };

  stopBubble = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  hideContextMenu = (e) => {
    this.stopBubble(e);
    if(this.props.element.className.includes('active'))
      this.props.element.classList.remove('active');
  };

  render() {
    return (
      <div onClick={this.hideContextMenu} onContextMenu={this.stopBubble} className="mdc-ripple-surface" style={{zIndex: '1000'}}>
        {ReactDom.createPortal(this.props.children, this.props.element)}
      </div>
    );
  }
}