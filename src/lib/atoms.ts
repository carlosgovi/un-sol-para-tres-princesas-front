import { atom, selector } from "recoil";
import { useEffect } from "react";
export const filterState = atom({
  key: "filterState",
  default: {
    todos: true,
    textiles: false,
    plasticos: false,
    sets: false,
    vinilos: false,
    papeleria: false,
  },
});
export const selecFilterAtom = selector({
  key: "selecFilterAtom",
  get: ({ get }) => {
    const getFilter = get(filterState);

    return getFilter;
  },
});

export const searchAtom = atom({
  key: "searchAtom",
  default: "",
});
export const selecSearchAtom = selector({
  key: "selecSearchAtom",
  get: ({ get }) => {
    const getSearch = get(searchAtom);
    getSearch.trim();
    return getSearch;
  },
});
