import { BrowserRouter } from "react-router-dom";
import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Pages from "./Pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
