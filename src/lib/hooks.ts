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
