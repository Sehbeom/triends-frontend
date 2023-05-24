import { apiInstance } from "./index";

const api = apiInstance();

// async function getAttractionByLikes(success, fail) {
//   await api.get("/attraction/best").then(success).catch(fail);
// }

async function getNotificationList(userId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/notification?userId=${userId}`).then(success).catch(fail);
}

// async function acceptPlanMember(param, success, fail) {
//   api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
//   await api({
//     method: "post",
//     url: `/plan/member`,
//     data: {
//       userId: param.userId,
//       notificationId: param.notificationId,
//       planId: param.planId,
//     },
//   })
//     .then(success)
//     .catch(fail);
// }

// async function acceptFriendRequest(userId, success, fail) {
//   api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
//   await api.post(`/friends`).then(success).catch(fail);
// }

async function refuseNotification(notificationId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.delete(`/notification?notificationId=${notificationId}`).then(success).catch(fail);
}

export { getNotificationList, refuseNotification };
