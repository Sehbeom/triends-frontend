import { apiInstance } from "@/apis/index";

const api = apiInstance();

async function getNoticeList(success, fail) {
  await api.get("/notice/list").then(success).catch(fail);
}

async function getNoticeById(id, success, fail) {
  await api.get(`/notice/${id}`).then(success).catch(fail);
}

export { getNoticeList, getNoticeById };
