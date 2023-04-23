import styled from "styled-components";
import { ButtonPrymary, ButtonInitEmail, ButtonInitClave } from "@/ui/button";
import { EmailInput, ClaveInput } from "../../ui/inputs";
import { useState } from "react";
import { sendCode, getToken } from "@/lib/api";

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
    const email: string = e.target.email.value;
    sendCode(email);
    setEmail(email);
    console.log({ email });
  }
  async function handlerCodeForm(e: any) {
    e.preventDefault();
    const code = e.target.clave.value;
    try {
      const res = await getToken(email, code);
      //por medio del router envio al user a la home
      console.log("token autorizado");
      console.log("la res", res);

      // Router.push("/");
    } catch (error) {
      console.log(error);
    }
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
