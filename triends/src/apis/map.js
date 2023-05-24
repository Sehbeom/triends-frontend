import { apiInstance } from "./index";

const api = apiInstance();

function getAttractionWithKeyword(searchUrl, success, fail) {
  api.get(`/attraction${searchUrl}`).then(success).catch(fail);
}

function getAttractionWithRecommand(searchUrl, success, fail) {
  api.get(`/attraction/best${searchUrl}`).then(success).catch(fail);
}

export { getAttractionWithKeyword, getAttractionWithRecommand };
