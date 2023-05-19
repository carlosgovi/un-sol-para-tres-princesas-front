import { atom, selector } from "recoil";

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

export const sesionAtom = atom({
  key: "sesionAtom",
  default: false,
});
export const selecSesionAtom = selector({
  key: "selecSesionAtom",
  get: ({ get }) => {
    const getSesion = get(sesionAtom);
    return getSesion;
  },
});
