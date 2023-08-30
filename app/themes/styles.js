import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
      name: "default",
      primary: "#f55301",
      secondary: "#6f045c",
      backgroundColor: "#ededed",
      color: "red",
  }

export const darkTheme = {
      name: "dark",
      primary: "#03a",
      secondary: "#000",
      backgroundColor: "#6f045c",
      color: "green"
};

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;
