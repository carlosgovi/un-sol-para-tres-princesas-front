import styled from "styled-components";
import { MenuIcon, Xicon } from "../icon";
export const Conteiner = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 12;
`;
export const Menu = styled.div`
  z-index: 12;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
export const IconMenu = styled(MenuIcon)`
  width: 40px;
  height: 40px;

  color: #808080;
  &:hover {
    color: #fff;
    transition: all 0.5s ease-in-out;
  }
`;
export const IconX = styled(Xicon)`
  width: 40px;
  height: 40px;
  color: #808080;
  &:hover {
    color: #fff;
    transition: all 0.5s ease-in-out;
  }
`;
