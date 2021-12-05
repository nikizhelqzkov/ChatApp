import React, { useState, useContext,Suspense } from "react";
import Login from "../Login/Login";
import Messenger from "../Messenger/Messenger";
import { Wrapper } from "./Inner.Styles";
import { AccountContext } from "../../context/AccountProvider";
import Loader from "../loader/Loader";
const Inner = () => {
  const { account, setAccount } = useContext(AccountContext);
  return (
      <Wrapper className="massengerOuter">
        {account ? <Messenger /> : <Login />}
      </Wrapper>

  );
};

export default Inner;
