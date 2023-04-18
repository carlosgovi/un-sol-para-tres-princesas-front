import useSWR from "swr";
import useSWRInmutable from "swr/immutable";
import { fetchAPI } from "./api";

export function useMe() {
  const { data, error } = useSWR("/me", fetchAPI);
  return data;
}

export function useProduct(id: string) {
  const { data, error } = useSWRInmutable("/products/" + id, fetchAPI);
  return data;
}
