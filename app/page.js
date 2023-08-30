"use client";
import { styled } from "styled-components";
import { useLocalStorage } from "usehooks-ts";
import { defaultTheme, darkTheme } from "./themes/styles";

export default function Home() {
  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);

  const toggleTheme = () => {
    setTheme(theme.name === defaultTheme.name ? darkTheme : defaultTheme);
  };

  return (
    <Container>
      AQUI LA PAGINA
      <Buttoncambio onClick={toggleTheme}> cambiar color</Buttoncambio>
    </Container>
  );
}

const Buttoncambio = styled.button`
  background-color: ${(props) => props.theme.color};
`;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
`;
