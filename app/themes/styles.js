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
:root {
  --color-border: #424242;
  --color-bg: #111111;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

body {
  position: relative;
  background-color: var(--color-bg);
  font-size: 1.2rem;
  color: hsla(0, 0%, 100%, 0.9);
  overflow-x: hidden;
}

input,
button,
a {
  font-family: inherit;
  color: inherit;
  font-size: inherit;
  border: none;
  outline: none;
}

section,
header {
  position: relative;
  z-index: 10;
}
`;
