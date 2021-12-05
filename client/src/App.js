import React, { lazy, Suspense } from "react";
import "./App.css";
// import Inner from "./components/Inner/Inner";
import AccountProvider from "./context/AccountProvider";
import TemplateProvider from "./templates/TemplateProvider";
import Loader from "./components/loader/Loader"; 

const Inner = lazy(() => import("./components/Inner/Inner"));

function App() {
  return (
    <div className="app">
      <TemplateProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Inner />
          </Suspense>
        </AccountProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
