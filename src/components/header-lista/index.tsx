import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../header";
import { useState } from "react";
import { IconBack, Lupa } from "@/ui/icon";
import { SearchInput } from "@/ui/inputs";
import { useRecoilState } from "recoil";
import { searchAtom } from "@/lib/atoms";

const Conteiner = styled.header`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 12;
`;
const TextHeader = styled.p`
  font-family: "Montserrat";
  color: black;
  margin: 15px;
  display: inline;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;
const Arrow = styled(IconBack)`
  position: relative;
  top: 3px;
  z-index: 1;
`;
const ElLink = styled(Link)`
  text-decoration: none;
`;
function SearchProducts() {
  const [searchValue, setSearchValue] = useRecoilState(searchAtom);
  console.log({ searchValue });

  const handleSearchInputChange = (event: any) => {
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <SearchInput
        placeholder="Buscar"
        value={searchValue}
        onChange={handleSearchInputChange}
      />
    </div>
  );
}

function ArrowEl(state: any) {
  const router = useRouter();
  const handleClick = (event: any) => {
    event.preventDefault();
    router.back();
  };

  if (state === "inicio") {
    return null;
  } else {
    return (
      <div>
        <ElLink onClick={handleClick} href="#">
          <Arrow />
        </ElLink>
      </div>
    );
  }
}
export function HeaderLista(props: any) {
  const [searchOpen, setSearchOpen] = useState(false);

  function LupaEl(state: any) {
    const handleClickLupa = (event: any) => {
      event.preventDefault();
      console.log("lupa");
      //aqui hacer hacer la logica para que se muestre el input Search
      setSearchOpen(!searchOpen);
    };
    if (state === "list") {
      return (
        <div>
          <ElLink href="/">
            <Lupa onClick={handleClickLupa} />
          </ElLink>
        </div>
      );
    }
  }
  return (
    <Conteiner>
      <div>{ArrowEl(props.state)}</div>
      <div>{LupaEl(props.state)}</div>
      {searchOpen ? <SearchProducts /> : null}
    </Conteiner>
  );
}
