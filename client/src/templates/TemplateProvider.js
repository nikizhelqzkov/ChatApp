import { createContext } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const TemplateContext = createContext(null);
const theme = createTheme({
  //overrides the theme of the drawer
  overrides: {
    MuiDrawer: {
      //styling the drawer
      paperAnchorLeft: {
        left: "5%",
        top: "5%",
        height: "90%",
        width: "27%",
        boxShadow: "none",
        backgroundColor:"#dfd"
      },
    },
    //for removing the backDrop
    MuiBackdrop: {
      root: {
        backgroundColor: "unset",
      },
    },
  },
});
const TemplateProvider = ({ children }) => {
  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TemplateContext.Provider>
  );
};

export default TemplateProvider;
