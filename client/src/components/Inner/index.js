import React, { useState, useContext } from "react";
import Login from "../Login";
import Messenger from "../Messenger";
import { Wrapper } from "./Inner.Styles";
import { AccountContext } from "../../context/AccountProvider";

const Inner = () => {
  const { account, setAccount} = useContext(AccountContext);
  return (
    <Wrapper className="massengerOuter">
      {account ? <Messenger /> : <Login />}
    </Wrapper>
  );
};

export default Inner;
