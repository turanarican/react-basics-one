import React, { Component } from "react";

const getInputValue = (e) => {
  console.log(e.target.value);
};

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <h1 className="logo" onClick={() => console.log("logo clicked")}>
            Logo
          </h1>
          <input onChange={getInputValue} />
        </header>
      </>
    );
  }
}

export default Header;
