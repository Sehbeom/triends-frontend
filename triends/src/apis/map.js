import { apiInstance } from "./index";

const api = apiInstance();

// async function getAttractionByLikes(success, fail) {
//   await api.get("/attraction/best").then(success).catch(fail);
// }

// async function getAttractionById(userId, success, fail) {
//   api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
//   await api.get(`/attraction/recommend/?userId=${userId}`).then(success).catch(fail);
// }

function getAttractionWithKeyword(searchUrl, success, fail) {
  api.get(searchUrl).then(success).catch(fail);
}

export { getAttractionWithKeyword };
