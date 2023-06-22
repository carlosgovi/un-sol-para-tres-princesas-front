import styled from "styled-components";
import Image from "next/image";
import { HeaderImg } from "@/ui/assets";
import { Title } from "@/ui/typography";

const ContainerHeader = styled.div``;
const ImageHeader = styled(Image)`
  width: 100%;
  height: auto;
  min-height: 170px;
  max-height: 375px;
  filter: brightness(70%);
`;
const TitleHeader = styled(Title)`
  font-size: 5vw;
  color: #ffffffc5;
  position: absolute;
  top: 17%;
  /* @media (min-width: 720px) {
    top: 24%;
  } */
`;

export default function HeaderDesings() {
  return (
    <>
      <header>
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
      </header>
    </>
  );
}
