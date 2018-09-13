import React, {Component} from "react";
import Proptypes from "prop-types";

export default class Item extends Component {
  static propTypes = {
    children: Proptypes.oneOfType([Proptypes.array, Proptypes.object, Proptypes.string]).isRequired,
    handleClick: Proptypes.func
  };

  static defaultProps = {
    handleClick: () => {}
  };

  render() {
    return (
      <div className="item" onClick={this.props.handleClick}>
        {this.props.children}
      </div>
    );
  }
}