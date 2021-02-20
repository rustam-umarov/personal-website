import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  dark: {
    header: {
      fontColor: "",
      backgroundColor: "#f2f2f2",
      hoverBackgroundColor: "white",
      hoverFontColor: "",
    },
    body: {
      fontColor: "",
      backgroundColor: "#282c34",
    },
    footer: { fontColor: "black", backgroundColor: "#282c34" },
  },

  light: {
    header: {
      fontColor: "white",
      backgroundColor: "#282c34",
      hoverBackgroundColor: "white",
      hoverFontColor: "black",
    },
    body: { fontColor: "", backgroundColor: "#282c34" },
    footer: { fontColor: "white", backgroundColor: "#282c34" },
  },

  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    darkBackground: "#282c34",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { Theme };
