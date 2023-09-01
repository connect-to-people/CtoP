"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Abril_Fatface } from "next/font/google";
import hover3d from "../utils/hover";
import { useLocalStorage } from "usehooks-ts";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [theme] = useLocalStorage("theme");


  /* const hero = useRef<HTMLDivElement>(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  }); */

  return (
    <HeaderStyled /* ref={hero} */>
      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>
            Desarrollamos software para impulsar tu negocio al
            <span> próximo nivel</span>
          </h1>
          <p>
            Nuestro enfoque se centra en ti y en tus objetivos. Si tienes un
            negocio o un proyecto que necesitas llevar al mundo digital, estamos
            aquí para convertir esa visión en una realidad atractiva y
            funcional.
          </p>
          {/* <div className="buttons">
            <Button
              name="Comencemos!"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Visita el Portafolio" />
          </div> */}
        </div>
        <div className="image-content" /* style={{ transform: "scale(1)" }} */>
          <div style={{ display: "flex" }}>
            <div
              className="image"
             /*  style={{
                transform: hoverHero.transform,
              }} */
            >
              <Image
                src="/images/ctoplady.jpg"
                width={400}
                height={400}
                alt="hero"
                /* style={{
                  transform: imageHover.transform,
                }} */
              />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
 
  .header-content {
    position: static; /* Cambiamos la posición a estática */
    background-image: url("HOME.png");
    background-repeat: no-repeat;
    background-size: auto; /* Deja que las imágenes se ajusten automáticamente */
    background-attachment: static;
    padding: 2rem 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);
    color: ${props => props.theme.color};

    .text-content {
      > h1 {
        font-size: clamp(1rem, 5vw, 3rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
        padding-right: 7rem;
        font-family: "Alfa Slab One";
        font-weight: 600;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }
    .text-content {
      > h1 > span {
        color: ${props => props.theme.secondary};
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        font-size: 90%;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      transition: 0.2s; /* Transición general de 0.4 segundos */
      cursor: pointer;
    }

    .image-content .image img {
      border-radius: 8px;
    }

    .image-content .image:hover {
      transform: scale(1.05); /* Cambio en la escala al hacer hover */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra al hacer hover */
    }
  }
`;