import React, { lazy, Suspense } from "react";
import "./App.css";
import AccountProvider from "./context/AccountProvider";
import TemplateProvider from "./templates/TemplateProvider";
import Loader from "./components/loader/Loader";
import UserProvider from "./context/UserProvider";

const Inner = lazy(() => import("./components/Inner/Inner"));

function App() {
  return (
    <div className="app">
      <TemplateProvider>
        <UserProvider>
          <AccountProvider>
            <Suspense fallback={<Loader />}>
              <Inner />
            </Suspense>
          </AccountProvider>
        </UserProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
