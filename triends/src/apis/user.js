import { apiInstance } from "./index.js";

const api = apiInstance();

async function login(user, success, fail) {
  console.log(JSON.stringify(user));
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/user/info/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  // need to implement
  api.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  await api.post(`/user/refresh`, user).then(success).catch(fail);
}

async function logout(user, success, fail) {
  //원래는 get으로 보내야함...
  await api.post(`/user/logout`, JSON.stringify(user)).then(success).catch(fail);
}

export { login, findById, tokenRegeneration, logout };
