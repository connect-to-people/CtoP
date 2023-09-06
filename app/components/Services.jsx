import { styled } from "styled-components"
import { useLocalStorage } from "usehooks-ts";
import ServicePonint from "./ServicePonint";

export default function Services() {
  const [theme] = useLocalStorage("theme");

  const infoServices = [{
    icon: "file",
    title: "Landing Page",
    content: "Te ofrecemos una Página Web simple y fácil de navegar Una Landing Page, es una página web compuesta de 1 sola pantalla / botón. Las Landing Page se utilizan parapresentaciones simples de empresas, productos o Servicios."
  },
  {
    icon: "file",
    title: "Landing Page",
    content: "Te ofrecemos una Página Web simple y fácil de navegar Una Landing Page, es una página web compuesta de 1 sola pantalla / botón. Las Landing Page se utilizan parapresentaciones simples de empresas, productos o Servicios."
  },
  {
    icon: "file",
    title: "Landing Page",
    content: "Te ofrecemos una Página Web simple y fácil de navegar Una Landing Page, es una página web compuesta de 1 sola pantalla / botón. Las Landing Page se utilizan parapresentaciones simples de empresas, productos o Servicios."
  },
  {
    icon: "file",
    title: "Landing Page",
    content: "Te ofrecemos una Página Web simple y fácil de navegar Una Landing Page, es una página web compuesta de 1 sola pantalla / botón. Las Landing Page se utilizan parapresentaciones simples de empresas, productos o Servicios."
  },
  {
    icon: "file",
    title: "Landing Page",
    content: "Te ofrecemos una Página Web simple y fácil de navegar Una Landing Page, es una página web compuesta de 1 sola pantalla / botón. Las Landing Page se utilizan parapresentaciones simples de empresas, productos o Servicios."
  },
  {
    icon: "file",
    title: "Landing Page",
    content: "Te ofrecemos una Página Web simple y fácil de navegar Una Landing Page, es una página web compuesta de 1 sola pantalla / botón. Las Landing Page se utilizan parapresentaciones simples de empresas, productos o Servicios."
  },
]

  return (
    <Container>
      <h2>Que ofrecemos</h2>
      <Info>
        {infoServices?.map(info => (
          <ServicePonint icon={info.icon} title={info.title} content={info.content}/>
          )
        )}
      </Info>
    </Container>
  )
}

const Container = styled.div`
  height: calc(100vh - 10vh);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  h2{
    border-bottom: 2px solid ${props => props.theme.secondary};
    margin-bottom: 4rem;
    color: ${props => props.theme.secondary};
  }
`;

const Info = styled.div`
  display: flex;
  max-height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem 3rem;
`;


