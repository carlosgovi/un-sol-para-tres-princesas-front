import styled from "styled-components";
import Link from "next/link";

interface ButtonProps {
  open: boolean;
}
// transform: translateY(-100px);
const Container = styled.div<ButtonProps>`
  position: absolute;
  top: 0;
  display: ${({ open }) => (open ? "flex" : "none")};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
  transition: transform 500ms;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #a58eff7c;
  z-index: 11;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #a58effcc;
    padding: 0;
    margin: 0;

    li {
      font-size: 24px;
      font-weight: bold;
      color: #747474;
      cursor: pointer;
      margin-bottom: 20px;
      text-align: center;
      list-style: none;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #ffffff;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;
const Linked = styled(Link)`
  text-decoration: none;
`;
//recive por props si el menu esta open i no esta open
export function MenuPrincipal(props: { open: boolean }) {
  return (
    <Container open={props.open}>
      <ul>
        <Linked href="/">
          <li>Inicio</li>
        </Linked>
        <Linked href="/products-lista">
          <li>Productos</li>
        </Linked>
        <Linked href="/">
          <li>Contacto</li>
        </Linked>
        <Linked href="/sesion-init">
          <li>Inicio Sesion</li>
        </Linked>
      </ul>
    </Container>
  );
}
