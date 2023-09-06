'use client'

import { styled } from "styled-components"
import Link from "next/link";
import Image from "next/image";


const infoCard = {
  etiquetas: "musica, videogames, comida",
  titulo: "Tremendo Blog",
  fecha: "01 septiembre, 2023",
  contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
};

export default function CardBlog() {
  return (
    <ContainerCard>
      <ImageBox>
        <Image src={'https://img.freepik.com/foto-gratis/mujer-bonita-joven-tatuajes-manos-disfrutando-su-tiempo-patio-comidas-su-libreta-dibujo_613910-5324.jpg?w=1060&t=st=1693593152~exp=1693593752~hmac=0ff6caa46f36fdaebb793a777a0436434ad48668c3e1d46c29ec577fc9ed1631'} alt={'no se ve'} width={300} height={300}/>
      </ImageBox>
      <InfoBox>
        <Labels>{infoCard.etiquetas}</Labels>
        <h2>{infoCard.titulo}</h2>
        <Date>{infoCard.fecha}</Date>
        <p>{infoCard.contenido}</p>
        <button>Ver mas...</button>
      </InfoBox>
    </ContainerCard>
  )
}


const ContainerCard = styled.div`
  display: flex;
  width: 770px;
  height: 270px;
  background-color: #fff;
  box-shadow: 2px 2px 4px #47556955;
  color: #000;
  border-radius: 7px;
  overflow: hidden;
`;

const ImageBox = styled.div`
  width: 40%;
  height: 100%;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 23px 16px;
  width: 60%;
  height: 100%;
  gap: 5px;
  line-height: 150%;


  h1{
    color: #1E1E1E;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
  }

  P{
    color: #3F3F46;
    font-size: 16px;
    font-weight: 400;
    line-height: 130%
  }

  button{
    padding: 5px 10px;
    background-color: #FC6625;
    border-radius: 5px;
    color: #fff;
    width: fit-content;
    margin-top: 15px;
    font-size: 12px;
    cursor: pointer;
  }
`;

const Labels = styled.span`
  color: #FC6625;
  font-size: 12px;
  font-weight: 400;
`;

const Date = styled.span`
  color: #B9B9B9;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

