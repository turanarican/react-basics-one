import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.footerText}</p>
      </div>
    );
  }
}
export default Footer;
