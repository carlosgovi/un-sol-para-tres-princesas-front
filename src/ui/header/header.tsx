import styled from "styled-components";
import { MenuIcon } from "../icon";
export const Conteiner = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;
export const Menu = styled.div`
  width: 50px;
  height: 50px;
`;
export const IconMenu = styled(MenuIcon)`
  width: 50px;
  height: 50px;
  color: #808080;
`;
