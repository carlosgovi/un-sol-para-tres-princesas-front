import styled from "styled-components";
import { Title, Text } from "@/ui/typography";

const Conteiner = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`;

type Props = {
  name: string;
  price: number;
  Materials: string[];
};
const TitleCard = styled(Title)`
  margin-left: 0px;
  margin-bottom: 5px;
  font-size: 15px;
`;
const TextCard = styled(Text)`
  text-align: left;
  margin-left: 0;
`;
const TextType = styled(Text)`
  color: #c1c1c1;
  text-align: left;
  margin: 0;
  font-weight: 500;
  font-size: 12px;
`;
export default function CardContent(props: Props) {
  return (
    <Conteiner>
      <TitleCard>{props.name}</TitleCard>
      <TextType>{props.Materials[0]}</TextType>
      <TextCard>$ {props.price}</TextCard>
    </Conteiner>
  );
}
