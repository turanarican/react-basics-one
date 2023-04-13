import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }
  render() {
    return (
      <div>
        <p>{this.props.footerText}</p>
        <>{this.props.children}</>
      </div>
    );
  }
}
export default Footer;
