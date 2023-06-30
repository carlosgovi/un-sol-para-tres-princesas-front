import React from "react";

import { Title, Text } from "@/ui/typography";
import Image from "next/image";

import CardMenu from "@/ui/card-menu";

import {
  Gears,
  Download,
  Shar,
  Shoppingcart,
  Twocircules,
  Write,
  Truck,
} from "@/ui/assets";

import styled from "styled-components";

const card = [
  {
    id: 1,
    image: Write,
    title: "Diseño",
    subtitle: "Pon te creatividad a trabajar",
  },
  {
    id: 2,
    image: Download,
    title: "Sube",
    subtitle: "Dejanos tu diseño",
  },
  {
    id: 3,
    image: Shar,
    title: "Comparte",
    subtitle: "Un link para el mundo",
  },
  {
    id: 4,
    image: Shoppingcart,
    title: "Vende",
    subtitle: "Tus diseños en nuestro Shop",
  },
  {
    id: 5,
    image: Gears,
    title: "Produce",
    subtitle: "La produccion es lo nuestro",
  },
  {
    id: 6,
    image: Truck,
    title: "Envia",
    subtitle: "Entrega en tiempo y forma",
  },

  {
    id: 7,
    image: Twocircules,
    title: "Repite",
    subtitle: "Vuelve cuando quieras",
  },
];

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 50px;
  margin: 40px;
  padding: 10px;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
`;
export function SectionMenu() {
  return (
    <>
      <Row>
        {card.map((card) => (
          <>
            <CardMenu {...card} />
          </>
        ))}
      </Row>
    </>
  );
}
