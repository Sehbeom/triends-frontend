import { apiInstance } from "@/apis/index";

const api = apiInstance();

async function reviewWrite(formdata, success, fail) {
  await api.post(`/review`,formdata).then(success).catch(fail);
}
async function getPlanList(userId, success, fail) {
    api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/plan/list?userId=${userId}`).then(success).catch(fail);
}

async function getPlanCourse(planId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/plan/${planId}`).then(success).catch(fail);
}
async function reviewDetail(reviewId, userId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/review/detail?reviewId=${reviewId}&userId=${userId}`).then(success).catch(fail);
}

export { reviewWrite, getPlanList, getPlanCourse, reviewDetail };
