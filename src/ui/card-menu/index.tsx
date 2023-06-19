import React from "react";
import Image from "next/image";
import { Title, Text } from "../typography";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 337px;
  height: 58px;
  gap: 20px;
`;

const CardsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  jus
  text-align: center;
  width: 337px;
  height: 58px;
  gap: 10px;
`;
function CardMenu({ image, title, subtitle }) {
  return (
    <>
      <CardContainer>
        <Image src={image} alt="" />
        <CardsText>
          <Title>{title}</Title>
          <Text>{subtitle}</Text>
        </CardsText>
      </CardContainer>
    </>
  );
}

export default CardMenu;
