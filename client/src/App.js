import React from "react";
import "./App.css";
import Inner from "./components/Inner/index";
import AccountProvider from "./context/AccountProvider";

function App() {
  return (
    <div className="app">
      <AccountProvider>
        <Inner />
      </AccountProvider>
    </div>
  );
}

export default App;
