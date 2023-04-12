import React, { Component } from "react";

class Header extends Component {
  state = {
    text: "",
  };

  changeText(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <>
        <header>
          <h1 className="logo" onClick={() => console.log("logo clicked")}>
            Logo
          </h1>
          <input onChange={(e) => this.changeText(e)} />
          <h2>{this.state.text}</h2>
        </header>
      </>
    );
  }
}

export default Header;
