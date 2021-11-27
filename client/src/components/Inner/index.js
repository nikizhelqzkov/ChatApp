import React, { useState } from "react";
import Login from "../Login";
import Messenger from "../Messenger";
import { Wrapper } from "./Inner.Styles";

const Inner = () => {
  const [logged, isLogged] = useState(false);
  return (
    <Wrapper className="massengerOuter">
      {logged ? <Messenger /> : <Login />}
    </Wrapper>
  );
};

export default Inner;
