import React, { useContext } from "react";
import { LoginContainer } from "./Login.Styles";
import { GoogleLogin } from "react-google-login";
import { AccountContext } from "../../context/AccountProvider";
import { clientID } from "../data/googleApi";
import { addUser } from "../../service/api";

const Login = () => {
  const {setAccount } = useContext(AccountContext);
  const onLoginSuccessful = async ({ profileObj }) => {
    console.log("Login successfully", profileObj);
    setAccount(profileObj);
    await addUser(profileObj);
  };

  const onLoginFailure = () => {
    console.log("Login Failed");
  };
  return (
    <LoginContainer>
      <h1>Welcome to the Chat App</h1>
      <h2>Author Nikolay Zhelyazkov && Silvia Deyanova</h2>
      <GoogleLogin
        clientId={clientID}
        cookiePolicy={"single_host_origin"}
        buttonText={"Login to the app"}
        onFailure={onLoginFailure}
        onSuccess={onLoginSuccessful}
        isSignedIn={true}
      />
    </LoginContainer>
  );
};

export default Login;
