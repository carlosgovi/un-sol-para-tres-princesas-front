import { stringify } from "querystring";

const BASE_URL = "https://un-sol-para-tres-princesas-back.vercel.app/api";
// siempre usamos el back que está en vercel para hacer pruebas
//const BASE_URL = "http://localhost:3001/api";

async function fetchAPI(input: RequestInfo, options: any) {
  const url = BASE_URL + input;
  const token = await getSavedToken();
  const newOptions: any = options || {};

  newOptions.headers ||= {};

  if (token) {
    newOptions.headers.authorization = "Bearer " + token;
  }
  newOptions.headers["Content-Type"] = "application/json";
  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }
  console.log("LLAMADA A::: fetchAPI:::opciones:", newOptions);

  const res = await fetch(url, newOptions);
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw { message: "hubo un error ", status: res.status };
  }
}

async function sendCode(email: string) {
  console.log("log del el email visto desde el send code", email);

  return fetchAPI("/auth", {
    method: "POST",
    body: { email: email },
  });
}

async function getToken(email: string, code: string) {
  const data = await fetchAPI("/auth/token", {
    method: "POST",
    body: { email, code: parseInt(code) },
  });
  //guardo el token el local
  saveToken(data.token);
  getDataUser();
  return true;
}
// salvo los datos de user en la DB
async function sendUserProfile(data: {
  name: string;
  address: string;
  phone: string;
}) {
  return fetchAPI("/me", {
    method: "PATCH",
    body: { ...data },
  });
}
// get de los datos del User en la DB
async function getDataUser() {
  const data = await fetchAPI("/me", {
    method: "GET",
  });
  console.log("data", data);

  saveUserProfile(JSON.stringify(data));
}
//crear orden de compra
async function createOrder(product: string) {
  return fetchAPI("/order?productId=" + product, {
    method: "POST",
    body: { productId: product },
  });
}
async function saveUserProfile(data: any) {
  localStorage.setItem("user_Profile", data);
}
async function saveToken(token: string) {
  localStorage.setItem("auth_token", token);
}
async function getSavedToken() {
  return localStorage.getItem("auth_token");
}

export {
  fetchAPI,
  sendCode,
  getToken,
  sendUserProfile,
  getDataUser,
  createOrder,
};
