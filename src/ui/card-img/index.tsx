////ver que si la imagen que s pasada para esta card es un jpg la misma se ubique en el background de la card y si pasan un png la misma se ubique en un componente que deje que el png sobrepase la card
import styled from "styled-components";
import Image from "next/image";
import { Corazon } from "../icon";
interface ContainerProps {
  src: any;
  backgroundImage: any;
}

const Container = styled.div<ContainerProps>`
  padding-left: 80px;
  padding-top: 40px;
  width: 115px;
  height: 70px;
  border-radius: 11px;
  overflow: hidden;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-size: cover;
`;

const ImageInCard = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const ContainerFavorite = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  border-radius: 6px;
`;

export const ImageCard = (props: { src: any; backgroundImage: any }) => {
  return (
    <Container src={props.src} backgroundImage={props.backgroundImage}>
      <ContainerFavorite>
        <Corazon />
      </ContainerFavorite>
      {/* <ImageInCard
        priority={true}
        width={115}
        height={70}
        src={props.src}
        alt="Imagen Card"
      ></ImageInCard> */}
    </Container>
  );
};
