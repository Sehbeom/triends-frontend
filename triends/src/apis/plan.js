import { apiInstance } from "./index";

const api = apiInstance();

async function postPlan(data, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  console.log("plan post data: ", data);
  await api.post("/plan/create", JSON.stringify(data)).then(success).catch(fail);
}

export { postPlan };
