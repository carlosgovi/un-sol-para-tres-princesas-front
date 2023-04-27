import styled from "styled-components";
import { Title, Text } from "@/ui/typography";
import Image from "next/image";
import { Stich } from "@/ui/assets";
import { ImageCard } from "@/ui/card-img";
import CardContent from "@/ui/card-content";
import Router from "next/router";
const ConteinerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const Card = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  width: 330px;
  height: 75px;
  background-color: #fff;
  border-radius: 10px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;
function handleClickCard(itemId: string) {
  Router.push(`/item/${itemId}`);
}
export const ProductCard = (list?: any) => {
  console.log("los Products", list);
  //   const Products = [...list.products] || [];
  const Products: any = [];
  if (list.products) {
    Products.push(...list.products);
  }
  return (
    <ConteinerCard>
      {Products
        ? Products.map((product: any) => {
            return (
              <Card
                onClick={() => handleClickCard(product.objectID)}
                key={product.objectID}
              >
                {/* vamos a probar con pasar la imagen de la cart por el background de la card (el src es para una eqtiqueta de imagen)por si lo de pasar en el background de la card no funciona  */}
                <ImageCard
                  src={Stich}
                  backgroundImage={
                    product.Images[0].url && product.Images[0].url
                  }
                />
                {/* <Title>{product.name}</Title> : <Text>{product.price}$</Text> */}
                <CardContent
                  Materials={product.Materials && product.Materials}
                  name={product.Name && product.Name}
                  price={product.UnitCost && product.UnitCost}
                />
              </Card>
            );
          })
        : null}
    </ConteinerCard>
  );
};
