import styled from "styled-components";
import { ContainerFavorite } from "../card-img";
import { Corazon } from "../icon";
const Conteiner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const ButtonBuy = styled.button`
  width: 229px;
  height: 52px;
  background: #a58eff;
  border-radius: 12px;
  color: #ffffff;
  border: none;
  font-size: 22px;
  margin: 20px;
  &:hover {
    cursor: pointer;
    background: #7c6eff;
  }
`;
const Favorite = styled(ContainerFavorite)`
  background: #f9f9f9;
  border-radius: 16px;
  margin: 20px;
  width: 52px;
  height: 52px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export function ButtonBuyder() {
  return (
    <>
      <Conteiner>
        <Favorite>
          <Corazon />
        </Favorite>
        <ButtonBuy>Comprar</ButtonBuy>
      </Conteiner>
    </>
  );
}
