const BASE_URL = "https://un-sol-para-tres-princesas-back.vercel.app/api";
// const BASE_URL = "http://localhost:3001/api";

//localhost:3001
async function fetchAPI(input: RequestInfo, options: any) {
  const url = BASE_URL + input;
  const token = getSavedToken();
  const newOptions: any = options || {};

  newOptions.headers ||= {};

  if (token) {
    newOptions.headers.authorization = "Bearer" + token;
  }
  newOptions.headers["Content-Type"] = "application/json";
  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }
  console.log("el log de las newOptions", newOptions);

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
  return true;
}

async function saveToken(token: string) {
  localStorage.setItem("auth_token", token);
}
async function getSavedToken() {
  return localStorage.getItem("auth_token");
}

export { fetchAPI, sendCode, getToken };
