import styled from "styled-components";
import { ShoopingBag, InitSesion, LogInIcon } from "../icon";

export const ElButton = styled.button`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  top: 450px;
  background-color: white;
  width: 86px;
  height: 86px;
  border: none;
  border-radius: 20px;
  box-shadow: -1px 11px 9px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -1px 11px 9px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 11px 9px 0px rgba(0, 0, 0, 0.2);
`;
const ConteinerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SvgButton = styled(ShoopingBag)`
  width: 30px;
  height: 30px;
`;
export function ButtonPrymary() {
  return (
    <ConteinerButton>
      <ElButton>
        <SvgButton />
      </ElButton>
    </ConteinerButton>
  );
}
export function ButtonSecondary() {
  return (
    <ConteinerButton>
      <ElButton>Desings</ElButton>
    </ConteinerButton>
  );
}
export function ButtonInitEmail() {
  return (
    <ConteinerButton>
      <ElButton>
        <InitSesion />
      </ElButton>
    </ConteinerButton>
  );
}
export function ButtonInitClave() {
  return (
    <ConteinerButton>
      <ElButton>
        <LogInIcon />
      </ElButton>
    </ConteinerButton>
  );
}
