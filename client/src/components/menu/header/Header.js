import React, { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Wrapper } from "./Header.Styles";
import { Menu, MenuItem } from "@material-ui/core";
const Header = () => {
  const { account } = useContext(AccountContext);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  return (
    <Wrapper>
      <img src={account.imageUrl} alt="profile logo" className="profileLogo" />
      <h2>Chats</h2>
      <MoreHorizIcon className="menuMore" onClick={handleClick} />
      <Menu
        id="accountMenu"
        aria-labelledby="accountMenu"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default Header;
