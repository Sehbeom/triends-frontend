import { apiInstance } from "./index";

const api = apiInstance();

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

export { updateUserInfo };
