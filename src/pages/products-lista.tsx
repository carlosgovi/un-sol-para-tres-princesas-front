import { HeaderLista } from "@/components/header-lista";
import TitleListProducts from "@/ui/title-list-products";
import { SliderSearchFillter } from "@/components/Slider-search-filter";
import ProductCard from "@/components/card-product";
import { useAllProducts, useSearchProductsByTypeAndQuery } from "@/lib/hooks";
import Header from "@/components/header";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterState, selecFilterAtom, selecSearchAtom } from "@/lib/atoms";
import styled from "styled-components";
import { Suspense, lazy } from "react";

import Loading from "@/components/loading";

//const Product = React.lazy(() => import('@/components/card-product'))
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

function filterObjetoToString(state: any) {
  return state.plasticos
    ? "plasticos"
    : state.textiles
    ? "textiles"
    : state.sets
    ? "sets"
    : state.vinilos
    ? "vinilos"
    : state.papeleria
    ? "papeleria"
    : state.todos
    ? " "
    : "";
}
function getProductsByQueryAndType(stateFilter: any, stateSearch: any) {
  const elType = filterObjetoToString(stateFilter);
  const query = stateSearch;
  console.log("query=====", { query });

  // const type = "plasticos";
  const products = useSearchProductsByTypeAndQuery(query, elType);

  return products?.results;
}

export default function Lista() {
  const stateFilter = useRecoilValue(selecFilterAtom);
  const stateSearch = useRecoilValue(selecSearchAtom);

  // const array = getAllProducts();
  const array = getProductsByQueryAndType(stateFilter, stateSearch);

  return (
    <div>
      <Header state="list" />
      <TitleListProducts />
      <SliderSearchFillter />

      <ProductCard products={array} />
    </div>
  );
}
