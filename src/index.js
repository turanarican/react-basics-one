import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/styles.css";

import Header from "./components/header.js";

const App = () => (
  <>
    <Header />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
