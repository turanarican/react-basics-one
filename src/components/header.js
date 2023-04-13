import React, { Component } from "react";

class Header extends Component {
  state = {
    keywords: "",
  };

  changeText(e) {
    this.setState({ keywords: e.target.value });
  }
  render() {
    return (
      <>
        <header>
          <h1 className="logo">Logo</h1>
          <input onChange={(e) => this.changeText(e)} />
          <br />
        </header>
      </>
    );
  }
}

export default Header;
