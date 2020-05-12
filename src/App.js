import React from "react";
import Widget from "./components/Widget";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body, * {
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <div className="flex item-center justify-center p-4">
        <Widget />
      </div>
    </div>
  );
}

export default App;
