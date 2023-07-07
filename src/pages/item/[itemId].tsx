import Header from "@/components/header";
import { ImgProduct } from "@/ui/product-img";
import { ProductDescription } from "@/ui/product-description";
import { ButtonBuyder } from "@/ui/button-buy";
import { useRouter } from "next/router";
import { useProduct } from "@/lib/hooks";
import { PropagateLoader } from "react-spinners";
import styled from "styled-components";
// const ProductData = {
//   name: "Producto1",
//   description:
//     "un muy lindo producto echo con cosas muy lindas lindas para usarla en cosas lindas y mas cosas lindas para que la gente linda use cosas lindas",
//   img: Stich,
//   price: 100,
//   ID: 1,
// };
function getOneItem() {
  const Router: any = useRouter();
  //  const itemId: any = useRouter().query.itemId;

  const itemId = Router.query.itemId;

  const Item = useProduct(itemId);

  return Item?.result;
}
/// contenedor de los datos de los productos - los contenidos son responcives
const ContainDataProducts = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;
//Container Description and Button
const ContainDescriptionAndButton = styled.div`
  //separar los items de los contenedores
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (min-width: 700px) {
  }
`;
function DataProduct(ProductData: any) {
  return (
    <ContainDataProducts>
      <ImgProduct
        name={ProductData?.Name}
        price={ProductData?.UnitCost}
        backgroundImage={ProductData?.Images[0].thumbnails.large.url}
      ></ImgProduct>
      <ContainDescriptionAndButton>
        <ProductDescription>{ProductData?.Description}</ProductDescription>

        <ButtonBuyder item={ProductData?.objectID} />
      </ContainDescriptionAndButton>
    </ContainDataProducts>
  );
}
export default function Product() {
  const ProductData: any = getOneItem();

  return (
    <div>
      <Header></Header>
      {!ProductData ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PropagateLoader size={25} />
        </div>
      ) : (
        DataProduct(ProductData)
      )}
    </div>
  );
}
