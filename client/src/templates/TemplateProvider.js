import { createContext } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const TemplateContext = createContext(null);
const theme = createTheme({
  overrides: {
    MuiDrawer: {
      paperAnchorLeft: {
        left: 0,
        top: '5%',
        height: "90%",
        width: "40%",
        boxShadow: "none",
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
