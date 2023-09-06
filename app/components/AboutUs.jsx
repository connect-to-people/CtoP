import { styled } from "styled-components"
import { useLocalStorage } from "usehooks-ts";

export default function AboutUs() {
  const [theme] = useLocalStorage("theme");

  return (
    <Container>
      <h2>Quienes somos</h2>
      <p> En Connect to People, entendemos que en el mundo digital de hoy en día, estar
          presente en internet es esencial para el crecimiento y el éxito de tu negocio o 
          emprendimiento. Somos tu aliado estratégico, especializados en brindarte soluciones web,
          ecommerce a medida y mucho mas,  diseñadas para llevar tu presencia en línea 
          al siguiente nivel.
      </p>
      <p> Estamos aquí para convertir esa visión en una realidad atractiva y funcional.
          Nos apasiona conectar personas a través de la tecnología y crear experiencias en línea 
          que cautiven a tus clientes.

       </p>
          

      
    </Container>
  )
}

const Container =  styled.div`
  height: calc(100vh - 10vh);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25rem;

  h2{
    color: ${props => props.theme.secondary};
    border-bottom: 2px solid ${props => props.theme.secondary};
    margin-bottom: 4rem;
  }

  p{
    text-align: center;
    margin: 1rem;
    color: ${props => props.theme.secondary};
  }
`;