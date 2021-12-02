import React, { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Wrapper } from "./Header.Styles";
import { Menu, MenuItem, makeStyles } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { clientID } from "../../data/googleApi";
const useStyle = makeStyles({
  menuItem: {
    fontSize: 14,
    backgroundColor:'#fff !important',
    "& > *": {
      textAlign: "center",
      width: "100%",
    },
    "&:hover":{
      backgroundColor:' #e1dad8  !important'
    },
  },
  logout: {
    border: "none!important",
    boxShadow: "none!important",
  },
});

const Header = () => {
  const classes = useStyle();
  const { account, setAccount } = useContext(AccountContext);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const onSignoutSuccess = () => {
    alert(`You left from the account of ${account.givenName}`);
    console.clear();
    setAccount("");
  };

  return (
    <Wrapper>
      <img src={account.imageUrl} alt="profile logo" className="profileLogo" />
      <h2>Chats</h2>
      <MoreHorizIcon className="menuMore" onClick={handleClick}  aria-controls="fade-menu"
        aria-haspopup="true"/>
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
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          <span>Profile</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <GoogleLogout
            clientId={clientID}
            buttonText="Logout"
            onLogoutSuccess={onSignoutSuccess}
            className={classes.logout}
          />
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};

export default Header;
