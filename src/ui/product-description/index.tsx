import styled from "styled-components";
import { Title, Text } from "../typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 20px;
  align-items: flex-start;
  @media (min-width: 700px) {
    height: 500px;
  }
`;
const TextDescription = styled(Text)`
  text-align: left;
  margin: 0;
  color: #868585;
`;
export function ProductDescription({ children }: any) {
  return (
    <Container>
      <Title>Descripcion</Title>
      <TextDescription>{children}</TextDescription>
    </Container>
  );
}
