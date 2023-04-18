import styled from "styled-components";
import { MenuIcon, Xicon } from "../icon";
export const Conteiner = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
`;
export const Menu = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
export const IconMenu = styled(MenuIcon)`
  width: 50px;
  height: 50px;
  color: #808080;
  &:hover {
    color: #fff;
    transition: all 0.5s ease-in-out;
  }
`;
export const IconX = styled(Xicon)`
  width: 50px;
  height: 50px;
  color: #808080;
  &:hover {
    color: #fff;
    transition: all 0.5s ease-in-out;
  }
`;
