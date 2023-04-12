import React, { Component } from "react";

class Header extends Component {
  getInputValue = (e) => {
    console.log(e.target.value);
  };
  render() {
    return (
      <>
        <header>
          <h1 className="logo" onClick={() => console.log("logo clicked")}>
            Logo
          </h1>
          <input onChange={this.getInputValue} />
        </header>
      </>
    );
  }
}

export default Header;
