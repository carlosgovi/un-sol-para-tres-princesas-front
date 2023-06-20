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
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1), 0 5px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;

const CardsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  width: 337px;
  height: 58px;
`;

const ImageMod = styled(Image)`
  width: 37px;
  height: 40px;
`;
const TitleMod = styled(Title)`
  margin: 10px;
  margin-bottom: 2px;
`;
const TextMod = styled(Text)`
  margin: 0;
`;
function CardMenu({ image, title, subtitle }: any) {
  return (
    <>
      <CardContainer>
        <div>
          <ImageMod src={image} alt="" />
        </div>

        <CardsText>
          <TitleMod>{title}</TitleMod>
          <TextMod>{subtitle}</TextMod>
        </CardsText>
      </CardContainer>
    </>
  );
}

export default CardMenu;
