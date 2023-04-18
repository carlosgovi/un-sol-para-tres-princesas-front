import styled from "styled-components";
import { ButtonPrymary, ButtonInitEmail, ButtonInitClave } from "@/ui/button";
import { EmailInput, ClaveInput } from "../../ui/inputs";
import { useState } from "react";

const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

export function FormularioSesion() {
  // placeholder = 'Enter text'
  const [email, setEmail] = useState("");
  function handlerEmailForm(e: any) {
    e.preventDefault();
    const email = e.target.email.value;
    setEmail(email);
    console.log({ email });
  }
  function handlerCodeForm(e: any) {
    e.preventDefault();
    const clave = e.target.clave.value;

    console.log({ clave });
  }
  //estilo el formulario de email para mostrar si no hay email previo
  const emailFormStyle = {
    display: email ? "none" : "block",
  };
  const codeFormStyle = {
    display: email ? "block" : "none",
  };
  return (
    <Conteiner>
      <form style={emailFormStyle} onSubmit={handlerEmailForm}>
        <EmailInput type="email" placeholder="Email" name="email" />
        <ButtonInitEmail />
      </form>

      <form style={codeFormStyle} onSubmit={handlerCodeForm}>
        <ClaveInput type="password" placeholder="Clave" name="clave" />
        <ButtonInitClave />
      </form>
    </Conteiner>
  );
}
