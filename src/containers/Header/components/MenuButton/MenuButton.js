import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles/MenuButton.less";

class MenuButton extends Component {
  render() {
    const { children, href, location } = this.props;
    const isActive = location.pathname === href;
    const className = `menu-button ${isActive ? "menu-button-active" : null}`;
    return (
      <li className={className}>
        <Link to={href}>{children}</Link>
      </li>
    );
  }
}
export default withRouter(MenuButton);
