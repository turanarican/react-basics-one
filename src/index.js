import React, { Component } from "react";
import ReactDOM from "react-dom/client";

import "./styles/styles.css";

import JSON from "./db.json";

import Header from "./components/header.js";
import NewsList from "./components/news_list";
import Footer from "./components/footer";

class App extends Component {
  state = { news: JSON, footerText: "some footer text" };
  render() {
    return (
      <>
        <Header />
        <NewsList news={this.state.news} />
        <Footer footerText={this.state.footerText} />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
