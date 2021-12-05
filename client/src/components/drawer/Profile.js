import React,{useContext} from "react";
import { DrawerMain } from "./Profile.Styles";
import {AccountContext} from "../../context/AccountProvider";

const Profile = () => {
    const {account} = useContext(AccountContext)
  return (
    <DrawerMain className="drawer__main">
      <div className="drawer__main__logo">
      <img src={account.imageUrl} alt="Logo" />
      </div>
      <div className="drawer__main__fullName">
          <h3>Your Name</h3>
          <p>{`${account.givenName} ${account.familyName}`}</p>
      </div>
      <div className="drawer__main__email">
      <h3>Your Email</h3>
          <p>{account.email}</p>
      </div>
    </DrawerMain>
  );
};

export default Profile;
