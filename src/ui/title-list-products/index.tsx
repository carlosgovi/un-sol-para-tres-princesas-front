import { Title, Text } from "@/ui/typography";
import styled from "styled-components";

const ConteinerTitle = styled.div`
  padding-top: 100px;
  width: 100%;
  padding-left: 20px;
`;
export default function TitleListProducts() {
  return (
    <div>
      <ConteinerTitle>
        <div style={{ width: "100px" }}>
          <Title>Nuestros productos</Title>
        </div>
      </ConteinerTitle>
    </div>
  );
}
