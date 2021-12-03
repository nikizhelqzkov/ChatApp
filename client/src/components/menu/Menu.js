import React, { useState } from "react";
import Conversations from "./conversations/Conversations";
import Header from "./header/Header";
import Search from "./search/Search";
import InfoDrawer from "../drawer/InfoDrawer";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header drawerOpen={open} setDrawerOpen={setOpen} />
      <Search />
      <Conversations />
      <InfoDrawer open={open} setOpen={setOpen} />
    </>
  );
};
export default Menu;
