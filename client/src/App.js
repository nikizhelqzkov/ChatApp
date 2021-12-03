import React from "react";
import "./App.css";
import Inner from "./components/Inner/Inner";
import AccountProvider from "./context/AccountProvider";
import TemplateProvider from './templates/TemplateProvider';

function App() {
  return (
    <div className="app">
      <TemplateProvider>
        <AccountProvider>
          <Inner />
        </AccountProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
