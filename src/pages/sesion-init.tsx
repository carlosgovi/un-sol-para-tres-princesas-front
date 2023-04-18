import Header from "@/components/header";

import styled from "styled-components";
import { Slider } from "@/components/Slider";
import { Title, Text } from "@/ui/typography";
import { ConteinerCeleste } from "@/ui/conteiner-celeste";
import { ConteinerTextIntro } from "@/ui/container-text-intro";
import { ButtonPrymary } from "@/ui/button";
import Link from "next/link";
import { FormularioSesion } from "@/components/form-sesion";
import { MenuPrincipal } from "@/components/menu";
export default function SesionInit() {
  return (
    <div>
      <Header></Header>
      <ConteinerCeleste>
        <FormularioSesion />
      </ConteinerCeleste>
      <ConteinerTextIntro>
        <Title>Un Sol para Tres Princesas Enciende tu creatividad</Title>
        <Text>
          Sublimación y productos personalizados para quien busca originalidad y
          exclusividad.
        </Text>
      </ConteinerTextIntro>
    </div>
  );
}
