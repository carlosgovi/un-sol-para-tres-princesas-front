import { Conteiner, Menu, IconMenu, IconX } from "@/ui/header/header";
import { MenuPrincipal } from "../menu";
import { useState } from "react";
import { HeaderLista } from "../header-lista";
const Header: any = (props: any) => {
  const [open, setOpen] = useState(false);
  function handleMenuClick() {
    setOpen(!open);
  }

  return (
    <>
      <MenuPrincipal open={open} />
      <Conteiner>
        <HeaderLista state={props.state} />
        <Menu onClick={handleMenuClick}>{open ? <IconX /> : <IconMenu />}</Menu>
      </Conteiner>
    </>
  );
};

export default Header;
