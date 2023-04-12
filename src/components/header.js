import React, { Component } from "react";

class Header extends Component {
  state = {
    text: "",
    count: 0,
  };

  changeText(e) {
    this.setState({ text: e.target.value });
  }
  addToCounter() {
    this.setState((state) => ({}));
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
          <br />
          <h3>this.state.count</h3>
          <button onClick={this.addToCounter}>Add</button>
        </header>
      </>
    );
  }
}

export default Header;
