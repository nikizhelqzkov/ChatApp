import React from "react";
import { LoginContainer } from "./Login.Styles";
import { GoogleLogin } from "react-google-login";
import { clientID } from "../data/googleApi";

const Login = () => {
   const onLoginSuccessful = ({profileObj})=>{
       console.log('Login successfully',profileObj);
   }
   const onLoginFailure = ()=>{
       console.log('Login Failed');
   }
  return (
    <LoginContainer>
      <h1>Welcome to the Chat App</h1>
      <h2>Author Nikolay Zhelyazkov && Silvia Deyanova</h2>
      <GoogleLogin
        clientId={clientID} 
        cookiePolicy={'single_host_origin'}
        buttonText={'Login to the app'}
        onFailure={onLoginFailure}
        onSuccess={onLoginSuccessful}
      />
    </LoginContainer>
  );
};

export default Login;
