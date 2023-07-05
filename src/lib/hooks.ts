import useSWR from "swr";
import useSWRInmutable from "swr/immutable";
import { fetchAPI } from "./api";

export function useMe() {
  const { data, error } = useSWR("/me", fetchAPI);
  return data;
}

export function useProduct(id: string) {
  id?.trim();
  const { data, error } = useSWRInmutable("/products/" + id, fetchAPI);
  return data;
}

export function useAllProducts() {
  const { data, error } = useSWRInmutable("/search", fetchAPI);
  return data;
}

export function useSearchProductsByTypeAndQuery(query = "", type = "") {
  const { data, error } = useSWRInmutable(
    "/search?search=" + query + " " + type,
    fetchAPI
  );
  return data;
}
//necesito que el swr traiga los datos de el  localStorage.getItem("user_Profile") y que los guarde parseados y si esta vacio retorne un string vacio
export function useSesionLocal() {
  const { data, error } = useSWR("sesion", () => {
    const localStorageUser: any = localStorage.getItem("user_Profile");
    return JSON.parse(localStorageUser);
  });
  return data ?? "";
}
