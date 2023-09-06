"use client";

import Image from "next/image";
import logoDarkMode from "../../public/sinfonOrange.png"
import logo from "../../public/sinfon.png"
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { useLocalStorage } from "usehooks-ts";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { darkTheme, defaultTheme } from "../themes/styles";
import Link from "next/link";
import { useEffect } from "react";


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
    route: '/portafolio',
  },
  {
    label: 'Consejos',
    route: '/consejos',
  },
  {
    label: 'Contactos',
    route: '/',
  }
]

export function NavBar() {
  const [theme, setTheme] = useLocalStorage("theme");


  useEffect(() => {
    if(!theme) {
      setTheme(defaultTheme);
      return
    }
  },[theme])

  const toggleTheme = () => {
    setTheme(theme.name === defaultTheme.name ? darkTheme : defaultTheme);
  };


  return (
    <NavBarStyled>
        <Link href={'/'} className="logo">
          {theme?.name === "dark" 
          ? <Image src={logoDarkMode} alt="logo" width={100} /> 
          : <Image src={logo} alt="logo" width={100} />}
        </Link>
        {/* <div className="input">
          <input type="text" placeholder="Search" />
        </div> */}
        <Links className="nav-items">
            {links.map(({label, route}) => (
              <li key={route}>
                <a href={route}>
                  {label}
                </a>
              </li>
            ))}
          <IconButton onClick={toggleTheme}>
          {theme?.name === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Links>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
    position: sticky;
    z-index: 500;
    top: 0;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

/*     .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    } */
/* 
    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    } */`;

  const Links = styled.ul`
      display: flex;
      align-items: center;
      gap: 2rem;

      li{
        &:hover {
            color: white;
            transform: scale(1.1);
          }
      }
    `;

  const LightMode = styled(LightModeIcon)`
    color: #fff;
  `;

  const DarkMode = styled(DarkModeIcon)`
    color: #000;
  `;
