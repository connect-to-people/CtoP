"use client";
import { styled } from "styled-components";
import { useLocalStorage } from "usehooks-ts";
import Header from "./components/Header";

export default function Home() {
  const [theme] = useLocalStorage("theme");

  return (
    <Container>
      <Header/>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: fit-content;
  background-color: ${props => props.theme.backgroundColor};
`;
