import React from "react";
import { Drawer } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import Profile from "./Profile";
import { InfoDrawerHeader } from "./InfoDrawer.Styles";

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer open={open} onClose={handleClose}>
      <InfoDrawerHeader className="drawer__header">
        <ArrowBack onClick={handleClose} />
        <h2>Profile</h2>
      </InfoDrawerHeader>
      <Profile />
    </Drawer>
  );
};

export default InfoDrawer;
