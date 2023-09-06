import { styled } from "styled-components"

export default function AsideBlog() {
  return (
    <Container>
      <h2>Quienes somos</h2>
      <p> En Connect to People, entendemos que en el mundo digital de hoy en día, estar
          presente en internet es esencial para el crecimiento y el éxito de tu negocio o 
          emprendimiento. Somos tu aliado estratégico, especializados en brindarte soluciones web,
          ecommerce a medida y mucho mas,  diseñadas para llevar tu presencia en línea 
          al siguiente nivel.

            Estamos aquí para convertir esa visión en una realidad atractiva y funcional.
          Nos apasiona conectar personas a través de la tecnología y crear experiencias en línea 
          que cautiven a tus clientes.
      </p>
    </Container>
  )
}

const Container =  styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  h2{
    border-bottom: 1px solid #000;
  }

  p{

  }
`;


