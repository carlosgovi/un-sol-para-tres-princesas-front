import { PropagateLoader } from "react-spinners";
import styled from "styled-components";
import { ContainerFavorite } from "../card-img";
import { Corazon } from "../icon";
import { createOrder } from "@/lib/api";
import { useState } from "react";
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
async function handleClickButton(item: string) {
  const orden = await createOrder(item);
  console.log("orden que llega del backend con la preferencia", orden);

  console.log("EL Sandbox:::::", orden.url.response.init_point);
  //redireccionar con el url que me da la orden (asi el usuario hace el pago)
  window.location.href = orden.url.response.sandbox_init_point;
}
export function ButtonBuyder(props: any) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Conteiner>
        <Favorite>
          <Corazon />
        </Favorite>
        <ButtonBuy
          onClick={() => {
            setLoading(true);
            handleClickButton(props.item);
          }}
        >
          {loading ? <PropagateLoader color="#ffffff" size={10} /> : "Comprar"}
        </ButtonBuy>
      </Conteiner>
    </>
  );
}
