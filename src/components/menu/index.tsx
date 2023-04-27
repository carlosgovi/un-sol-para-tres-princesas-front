import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Title } from "@/ui/typography";
import Image from "next/image";
import { Instagram, Whatsapp } from "@/ui/assets";

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
  background-color: #a58effd5;
  z-index: 11;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    /* background-color: #a58effbc; */
    padding: 0;
    margin: 0;

    li {
      font-size: 24px;
      font-weight: bold;
      color: #747474;
      cursor: pointer;
      margin: 15px;
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
  margin: 10px 20px;
`;
const ConteinerIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;
interface UserProfile {
  address: string;
  email: string;
  name: string;
  phone: string;

  // otras propiedades del perfil de usuario
}

//recive por props si el menu esta open i no esta open
export function MenuPrincipal(props: { open: boolean }) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  function handleLogout() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_Profile");
    window.location.reload();
    console.log("logout");
  }

  useEffect(() => {
    const localStorageUser: any = localStorage.getItem("user_Profile");
    setUserProfile(JSON.parse(localStorageUser));
  }, [setUserProfile]);

  return (
    <Container open={props.open}>
      <ul>
        <Linked href="/">
          <li>Inicio</li>
        </Linked>
        <Linked href="profile">
          <li>Perfil de Usuario</li>
        </Linked>
        <Linked href="/products-lista">
          <li>Productos</li>
        </Linked>

        {userProfile ? (
          <Title style={{ color: "white" }}>
            {userProfile && userProfile.email}
          </Title>
        ) : null}
        {userProfile ? (
          <li onClick={handleLogout}>Cerrar Sesion</li>
        ) : (
          <Linked href="/sesion-init">
            <li>Inicio Sesion</li>
          </Linked>
        )}
      </ul>

      <ConteinerIcon>
        <Linked href="https://www.instagram.com/un.sol.para.tres.princesas/">
          <Image
            style={{ cursor: "pointer" }}
            height={50}
            width={50}
            src={Instagram}
            alt="instagram"
          />
        </Linked>
        <Linked href="https://api.whatsapp.com/send?phone=+593412284127&text=¡Hola!%20Muchas%20gracias%20por%20contactarnos.%20En%20breve%20responderemos%20tu%20consulta%20para%20ayudarte%20en%20lo%20que%20necesites.%20¡Que%20tengas%20un%20excelente%20día!">
          <Image height={50} width={50} src={Whatsapp} alt="whatsapp" />
        </Linked>
      </ConteinerIcon>
    </Container>
  );
}
