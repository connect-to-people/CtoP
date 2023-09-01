'use client'

import { styled } from "styled-components";
import CardBlog from "../components/CardBlog";
import { useLocalStorage } from "usehooks-ts";


export default function Blog() {
  const [theme] = useLocalStorage("theme");

  return (
    <Box>
      <CardBlog/>
      <CardBlog/>
      <CardBlog/>
      <CardBlog/>
      <CardBlog/>
      <CardBlog/>
    </Box>
  )
}

const Box = styled.div`
  display: grid;
  gap: 2rem;
  padding: 5rem;
  background-color: ${props => props.theme.backgroundColor};
`;
