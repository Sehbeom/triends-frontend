import { apiInstance } from "./index.js";

const api = apiInstance();

async function login(user, success, fail) {
  console.log(JSON.stringify(user));
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/user?userId=${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  // need to implement
  api.defaults.headers["refresh-token"] =
    sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  console.log(user);
  await api
    .get(`/user/authorization/refresh?userId=` + user.userId)
    .then(success)
    .catch(fail);
}

async function logout(user, success, fail) {
  //원래는 get으로 보내야함...
  await api
    .post(`/user/logout`, JSON.stringify(user))
    .then(success)
    .catch(fail);
}

async function updateUserInfo(param, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api({
    method: "put",
    url: "/user",
    data: {
      userId: param.userId,
      password: param.password,
      name: param.name,
      tel: param.tel,
      profileimg: param.profileimg,
      email: param.email,
    },
  })
    .then(success)
    .catch(fail);
}

async function join(param, success, fail) {
  await api({
    method: "post",
    url: "/user",
    data: {
      id: param.id,
      password: param.password,
      name: param.name,
      tel: param.tel,
      profileimg: param.profileimg,
      email: param.email,
    },
  })
    .then(success)
    .catch(fail);
}

async function registPreferences(param, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api({
    method: "post",
    url: "/user/preference",
    data: {
      userId: param.userId,
      preferenceIds: param.preferenceIds,
    },
  })
    .then(success)
    .catch(fail);
}

export {
  login,
  findById,
  tokenRegeneration,
  logout,
  updateUserInfo,
  join,
  registPreferences,
};
