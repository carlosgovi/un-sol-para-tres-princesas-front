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
//////////////////

// import React,{useState} from "react";
// import "./styles.css";
// import styled from "styled-components";

// const MenuLabel = styled.label`
//   background-color: #B6EDC8;
//   position: fixed;
//   top: 6rem;
//   right: 6rem;
//   border-radius: 50%;
//   height: 7rem;
//   width: 7rem;
//   cursor: pointer;
//   z-index: 1000;
//   box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
//   text-align: center;
// `;

// const Icon = styled.span`
//   position: relative;
//   background-color: ${(props) => (props.clicked ? "transparent" : "black")};
//   width: 3rem;
//   height: 2px;
//   display: inline-block;
//   margin-top: 3.5rem;
//   transition: all 0.3s;
//   &::before,
//   &::after {
//     content: "";
//     background-color: black;
//     width: 3rem;
//     height: 2px;
//     display: inline-block;
//     position: absolute;
//     left: 0;
//     transition: all 0.3s;
//   }
//   &::before {
//     top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
//     transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
//   }
//   &::after {
//     top: ${(props) => (props.clicked ? "0" : "0.8rem")};
//     transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
//   }
//   ${MenuLabel}:hover &::before {
//     top: ${(props) => (props.clicked ? "0" : "-1rem")};
//   }
//   ${MenuLabel}:hover &::after {
//     top: ${(props) => (props.clicked ? "0" : "1rem")};
//   }
// `;

// export default function App() {

// const [click, setClick] = useState(false);
// const handleClick = () => setClick(!click);

//   return (
//     <>
//         <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
//                 <Icon clicked={click}>&nbsp;</Icon>
//         </MenuLabel>
//     </>
//   );
// }
