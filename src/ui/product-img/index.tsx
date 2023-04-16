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
`;
const ConteinerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
`;
const NameProduct = styled(Title)`
  margin: 0px;
  font-weight: 700;
  font-size: 28px;
`;
const PriceProduct = styled(Text)`
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
