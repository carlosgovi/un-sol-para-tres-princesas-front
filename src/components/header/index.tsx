import { Conteiner, Menu, IconMenu, IconX } from "@/ui/header/header";
import { MenuPrincipal } from "../menu";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  function handleMenuClick() {
    setOpen(!open);
    console.log("click");
  }

  return (
    <>
      <MenuPrincipal open={open} />
      <Conteiner>
        <Menu onClick={handleMenuClick}>{open ? <IconX /> : <IconMenu />}</Menu>
      </Conteiner>
    </>
  );
};

export default Header;
