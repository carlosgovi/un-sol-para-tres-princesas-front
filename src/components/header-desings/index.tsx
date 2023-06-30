import styled from "styled-components";
import Image from "next/image";
import { HeaderImg } from "@/ui/assets";
import { Title } from "@/ui/typography";

const ContainerHeader = styled.div``;
const ImageHeader = styled(Image)`
  width: 100%;
  height: 100%;
  min-height: 170px;
  max-height: 375px;
  filter: brightness(70%);
  box-shadow: 0px 0px 250px 50px rgba(0, 0, 0, 0.25);
`;
const TitleHeader = styled(Title)`
  font-size: 5vw;
  color: #ffffffc5;
  position: absolute;
  top: 14%;
  /* @media (min-width: 720px) {
    top: 24%;
  } */
`;

export default function HeaderDesings() {
  return (
    <ContainerHeader>
      <ImageHeader
        src={HeaderImg}
        alt=""
        placeholder="blur"
        layout="intrinsic"
        loading="lazy"
      ></ImageHeader>
      <TitleHeader>Has realidad tus Diseños</TitleHeader>
    </ContainerHeader>
  );
}
