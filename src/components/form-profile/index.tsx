import styled from "styled-components";
import { ButtonPrymary, ButtonInitEmail, ButtonInitClave } from "@/ui/button";
import { EmailInput, ClaveInput, GenericInput } from "../../ui/inputs";
import { useState } from "react";
import { Title } from "@/ui/typography";
import { sendUserProfile, getDataUser } from "@/lib/api";
import Router from "next/router";
import { sendCode, getToken } from "@/lib/api";

const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;
const FormProfile = styled.form`
  display: grid;
  justify-content: center;
  align-items: center;
`;
export function FormularioProfile() {
  const [perfil, setPerfil] = useState({});
  function handlerEmailForm(e: any) {
    e.preventDefault();
    const name: string = e.target.nombre.value;
    const address: string = e.target.direccion.value;
    const phone: string = e.target.telefono.value;
    const data: {
      name: string;
      address: string;
      phone: string;
    } = { name, address, phone };
    sendUserProfile(data);
    Router.push("/");
    getDataUser();
  }

  return (
    <Conteiner>
      <FormProfile onSubmit={handlerEmailForm}>
        <Title>Perfil de Usuario</Title>
        <GenericInput placeholder="Nombre Completo" name="nombre" />
        <GenericInput placeholder="Dirección" name="direccion" />
        <GenericInput type="tel" placeholder="Teléfono" name="telefono" />

        <ButtonInitEmail />
      </FormProfile>
    </Conteiner>
  );
}
