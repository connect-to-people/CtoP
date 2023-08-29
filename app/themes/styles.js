import { createGlobalStyle } from "styled-components";

export const defaultTheme = {
      name: "default",
      primary: "#ddd",
      secondary: "#fff",
      color: "red",
  }

export const darkTheme = {
      name: "dark",
      primary: "#03a",
      secondary: "#fff",
      color: "green"
};

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;
