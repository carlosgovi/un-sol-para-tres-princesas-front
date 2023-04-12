import styled from "styled-components";
import { ShoopingBag, MenuIcon } from "../icon";

export const ElButton = styled.div`
  position: absolute;
  z-index: 22;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 450px;
  background-color: white;
  width: 86px;
  height: 86px;
  border: none;
  border-radius: 20px;
  box-shadow: -1px 11px 9px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -1px 11px 9px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 11px 9px 0px rgba(0, 0, 0, 0.2);
`;
const ConteinerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SvgButton = styled(ShoopingBag)`
  width: 30px;
  height: 30px;
`;

export function ButtonPrymary({ children }: any) {
  return (
    <ConteinerButton>
      <Foo>
        <SvgButton />
      </Foo>
    </ConteinerButton>
  );
}
function Foo({ children }: any) {
  return <ElButton>{children}</ElButton>;
}
