import { apiInstance } from "./index";

const api = apiInstance();

async function getAttractionByLikes(success, fail) {
  await api.get("/attraction/best").then(success).catch(fail);
}

export { getAttractionByLikes };
