import Header from "@/components/header";
import { ImgProduct } from "@/ui/product-img";
import { Stich } from "@/ui/assets";
import { ProductDescription } from "@/ui/product-description";
import { ButtonBuyder } from "@/ui/button-buy";
const ProductData = {
  name: "Producto1",
  description:
    "un muy lindo producto echo con cosas muy lindas lindas para usarla en cosas lindas y mas cosas lindas para que la gente linda use cosas lindas",
  img: Stich,
  price: 100,
  ID: 1,
};
export default function Product() {
  return (
    <div>
      <Header></Header>
      <ImgProduct
        name={ProductData.name}
        price={ProductData.price}
        backgroundImage={ProductData.img.src}
      ></ImgProduct>
      <ProductDescription>{ProductData.description}</ProductDescription>
      <ButtonBuyder />
    </div>
  );
}
