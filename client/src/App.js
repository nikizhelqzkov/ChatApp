import React from "react";
import "./App.css";
import Inner from "./components/Inner/Inner";
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
