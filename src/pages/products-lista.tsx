import { HeaderLista } from "@/components/header-lista";
import TitleListProducts from "@/ui/title-list-products";
import { SliderSearchFillter } from "@/components/Slider-search-filter";
import { ProductCard } from "@/components/card-product";
import Header from "@/components/header";
import styled from "styled-components";
const arrayByProducts = [
  {
    name: "Producto1",
    img: "https://www.printhouse.com.ar/documentos/54/380_productos%20sublimacion%20printhouse.jpg",
    price: 100,
    ID: 1,
  },
  {
    name: "Producto2",
    img: "https://www.brildor.com/blog/wp-content/uploads/2021/08/camisetas-tazas.jpg",
    price: 200,
    ID: 2,
  },
  {
    name: "Producto3",
    img: "https://www.printhouse.com.ar/documentos/54/380_productos%20sublimacion%20printhouse.jpg",
    price: 300,
    ID: 3,
  },
  {
    name: "Producto4",
    img: "https://www.brildor.com/blog/wp-content/uploads/2021/08/camisetas-tazas.jpg",
    price: 400,
    ID: 4,
  },
  {
    name: "Producto5",
    img: "https://www.printhouse.com.ar/documentos/54/380_productos%20sublimacion%20printhouse.jpg",
    price: 500,
    ID: 5,
  },
];

export default function Lista() {
  return (
    <div>
      <HeaderLista />
      <TitleListProducts />
      <SliderSearchFillter />
      <ProductCard products={arrayByProducts} />
    </div>
  );
}
