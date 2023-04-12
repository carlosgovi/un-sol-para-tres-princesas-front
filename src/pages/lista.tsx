import Header from "@/components/header";

import styled from "styled-components";
import { Slider } from "@/components/Slider";
import { Title, Text } from "@/ui/typography";
import { ConteinerCeleste } from "@/ui/conteiner-celeste";
import { ConteinerTextIntro } from "@/ui/container-text-intro";
import { ButtonPrymary } from "@/ui/button";
import Link from "next/link";
export default function Lista() {
  return (
    <div>
      <div>
        <Link href="/">inicio</Link>
      </div>
      holas desde la lista
    </div>
  );
}
