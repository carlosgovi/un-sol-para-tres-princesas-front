import Header from "@/components/header";

import styled from "styled-components";
import { Slider } from "@/components/Slider";
import { Title, Text } from "@/ui/typography";
import { ConteinerCeleste } from "@/ui/conteiner-celeste";
import { ConteinerTextIntro } from "@/ui/container-text-intro";
import { ButtonPrymary, ButtonSecondary } from "@/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ConteinerCeleste>
        <Header state="inicio"></Header>
        <Slider></Slider>
      </ConteinerCeleste>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href="/products-lista">
          <ButtonPrymary></ButtonPrymary>
        </Link>

        <Link href="/desings">
          <ButtonSecondary></ButtonSecondary>
        </Link>
      </div>
      <ConteinerTextIntro>
        <Title>Enciende tu creatividad</Title>
        <Text>
          Sublimación y productos personalizados para quien busca originalidad y
          exclusividad.
        </Text>
      </ConteinerTextIntro>
    </div>
  );
}
