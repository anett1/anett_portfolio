import React, { Component } from "react";
import MenuButton from "../Header/components/MenuButton/MenuButton";
import "./styles/header.less";

export default class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <ul className="main-header-menu">
          <MenuButton isActive={true}>Portfolio</MenuButton>
          <MenuButton>O mnie</MenuButton>
          <MenuButton>Kontakt</MenuButton>
        </ul>
      </div>
    );
  }
}
