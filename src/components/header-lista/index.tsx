import styled from "styled-components";
import Link from "next/link";
import { IconBack, Lupa } from "@/ui/icon";
const Conteiner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px;
  margin-top: 40px;
`;
const TextHeader = styled.p`
  font-family: "Montserrat";
  color: black;
  margin: 15px;
  display: inline;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;
const Arrow = styled(IconBack)`
  position: relative;
  top: 5px;
`;
const ElLink = styled(Link)`
  text-decoration: none;
`;

export function HeaderLista() {
  return (
    <Conteiner>
      <div>
        <ElLink href="/">
          <Arrow />
          <TextHeader>Inicio</TextHeader>
        </ElLink>
      </div>

      <div>
        <ElLink href="/">
          <Lupa />
        </ElLink>
      </div>
    </Conteiner>
  );
}
