import styled from "styled-components";
import { Title, Text } from "@/ui/typography";
interface ContainerProps {
  backgroundImage: any;
}
const Conteiner = styled.div<ContainerProps>`
  width: 100%;
  height: 450px;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-size: cover;
  //empujar hasta el final del Conteiner a ConteinerText
  display: grid;
  align-items: end;
  @media (min-width: 700px) {
    height: 700px;
  }
`;
const ConteinerText = styled.div`
  background-color: #4498d943;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
`;
const NameProduct = styled(Title)`
  color: #fff;
  text-align: left;
  margin: 0px;
  font-weight: 700;
  font-size: 28px;
`;
const PriceProduct = styled(Text)`
  color: #fff;

  font-weight: 500;
  font-size: 24px;
`;
export function ImgProduct(props: {
  price: number;
  name: string;
  backgroundImage: any;
}) {
  return (
    <Conteiner backgroundImage={props.backgroundImage}>
      <ConteinerText>
        <NameProduct>{props.name}</NameProduct>
        <PriceProduct>{props.price}$</PriceProduct>
      </ConteinerText>
    </Conteiner>
  );
}
