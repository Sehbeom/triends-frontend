import { apiInstance } from "./index";

const api = apiInstance();

async function postPlan(data, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  console.log("plan post data: ", data);
  await api
    .post("/plan/create", JSON.stringify(data))
    .then(success)
    .catch(fail);
}

async function getPlanList(userId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api
    .get("/plan/list?userId=" + userId)
    .then(success)
    .catch(fail);
}

async function getPlanDetail(planId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api
    .get("/plan/" + planId)
    .then(success)
    .catch(fail);
}

async function updatePlan(data, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.put("/plan/", JSON.stringify(data)).then(success).catch(fail);
}

export { postPlan, getPlanList, getPlanDetail, updatePlan };
