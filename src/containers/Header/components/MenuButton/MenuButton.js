import React, { Component } from "react";
import "./styles/MenuButton.less";

export default class MenuButton extends Component {
  render() {
    const { isActive, children } = this.props;
    const className = `menu-button ${isActive ? "menu-button-active" : null}`;
    return (
      <li className={className}>
        <button>{children}</button>
      </li>
    );
  }
}
