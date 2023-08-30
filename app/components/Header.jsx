'use client'

import Link from "next/link"
import { styled } from "styled-components"
import { useLocalStorage } from "usehooks-ts"


const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Quienes somos',
    route: '/',
  },
  {
    label: 'Servicios',
    route: '/',
  },
  {
    label: 'Portafolio',
    route: '/',
  },
  {
    label: 'Consejos',
    route: '/',
  },
  {
    label: 'Contactos',
    route: '/',
  }
]

export function Header() {
  const [theme] = useLocalStorage('theme')
  return (
    <Container>
      <div>

      </div>
      <Links>
        {links.map(({label, route}) => (
          <li key={route}>
            <LinkHeader href={route}>
              {label}
            </LinkHeader>
          </li>
        ))}
      </Links>
    </Container>
  )
};

const Container = styled.div`
  width: 100vw;
  background-color: ${props => props.theme.secondary};
`;

const Links = styled.ul`
  display: flex;
  gap: 20px;

  li{
    list-style: none;
  }
`;

const LinkHeader = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

