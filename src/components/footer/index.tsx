import React from "react";
import Link from "next/link";

import styled from "styled-components";
import Image from "next/image";

import { Instagram, Whatsapp } from "@/ui/assets";

const Footer = () => {
  const Br = styled.div`
    border: 1px solid black;
    border-radius: 6px;
    margin: 10px;
    margin-top: 10px;
  `;
  const Linked = styled(Link)`
    text-decoration: none;
    margin: 5px 60px;
  `;
  const ConteinerIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <Br />
      <ConteinerIcon>
        <Linked href="https://www.instagram.com/un.sol.para.tres.princesas/">
          <Image
            style={{ cursor: "pointer" }}
            height={35}
            width={35}
            src={Instagram}
            alt="instagram"
          />
        </Linked>
        <Linked href="https://api.whatsapp.com/send?phone=+593412284127&text=¡Hola!%20Muchas%20gracias%20por%20contactarnos.%20En%20breve%20responderemos%20tu%20consulta%20para%20ayudarte%20en%20lo%20que%20necesites.%20¡Que%20tengas%20un%20excelente%20día!">
          <Image height={35} width={35} src={Whatsapp} alt="whatsapp" />
        </Linked>
      </ConteinerIcon>
    </>
  );
};

export default Footer;
