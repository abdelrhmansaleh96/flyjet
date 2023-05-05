import React, { useContext, useReducer } from "react";
import reducer from "../reducers/main-reducer";
import { createTheme } from "@mui/material";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { useTranslation } from "react-i18next";

const MainContext = React.createContext();
const initialState = {};
const cacheLtr = createCache({
  key: "muiltr",
});

const cacheRtl = createCache({
  key: "muirtl",

  stylisPlugins: [prefixer, rtlPlugin],
});
const ltrTheme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: `'Open Sans', sans-serif;`,
    fontSize: 14,
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 800,
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1300,
      xl: 1600,
      container: 1720,

      navBarDrawer: 865,
    },
  },
  palette: {
    primary: {
      light: "#8eddff",
      main: "rgb( 41,47,69 )",
    },
    secondary: {
      main: "rgb(234, 111, 102)",
    },
    custom: {
      main: "rgb( 41,47,69 )",
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        style: {
          boxShadow: "none",
        }, // No more ripple, on the whole application 💣!
      },
    },
  },
});
const rtlTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: `"Arabic-DIN"`,
    fontSize: 14,
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 300,
    fontWeightBold: 400,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      container: 1720,
      home: 1750,
    },
  },
  palette: {
    primary: {
      light: "#8eddff",
      main: "rgb( 41,47,69 )",
    },
    secondary: {
      main: "rgb(234, 111, 102)",
    },
    custom: {
      main: "rgb( 41,47,69 )",
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        style: {
          boxShadow: "none",
        }, // No more ripple, on the whole application 💣!
      },
    },
  },
});
export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { i18n } = useTranslation();
  const dir = i18n.dir();
  const changeLanguage = () => {
    dispatch({ type: "CHANGE_LANGUAGE" });

    i18n.changeLanguage(dir === "rtl" ? "en" : "ar");
  };
  React.useLayoutEffect(() => {
    document.body.setAttribute("dir", i18n.dir());
  }, [i18n.dir()]);
  return (
    <MainContext.Provider
      value={{
        ...state,
        cacheRtl,
        cacheLtr,
        changeLanguage,
        ltrTheme,
        rtlTheme,
        dir,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
// make sure use
export const useMainContext = () => {
  return useContext(MainContext);
};
