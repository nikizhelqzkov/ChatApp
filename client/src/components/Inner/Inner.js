import React, {useContext } from "react";
import Login from "../Login/Login";
import Messenger from "../Messenger/Messenger";
import { Wrapper } from "./Inner.Styles";
import { AccountContext } from "../../context/AccountProvider";
const Inner = () => {
  const { account } = useContext(AccountContext);
  return (
      <Wrapper className="massengerOuter">
        {account ? <Messenger /> : <Login />}
      </Wrapper>

  );
};

export default Inner;
