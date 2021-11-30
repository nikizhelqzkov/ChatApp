import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Wrapper } from "./Header.Styles";

const Header = () => {
  const { account } = useContext(AccountContext);

  return (
    <Wrapper>
      <img src={account.imageUrl} alt="profile logo" className="profileLogo" />
      <h2>Chats</h2>
      <MoreHorizIcon className="menuMore" />
    </Wrapper>
  );
};

export default Header;
