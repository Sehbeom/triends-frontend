import { apiInstance } from "./index";

const api = apiInstance();

async function getNotificationList(userId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/notification?userId=${userId}`).then(success).catch(fail);
}

async function acceptPlanMember(param, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api({
    method: "post",
    url: `/plan/member`,
    data: {
      userId: param.receiver,
      notificationId: param.notificationId,
      planId: param.planId,
    },
  })
    .then(success)
    .catch(fail);
}

async function acceptFriendRequest(param, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  console.log("noti id : " + param.notificationId);
  await api({
    method: "post",
    url: "/friends",
    data: {
      userId: param.receiver,
      senderId: param.sender,
      notificationId: param.notificationId,
    },
  })
    .then(success)
    .catch(fail);
}

async function refuseNotification(notificationId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api
    .delete(`/notification?notificationId=${notificationId}`)
    .then(success)
    .catch(fail);
}

async function sendPlanInvitation(userId, receiverId, planId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  let body = { userId: userId, receiverId: receiverId, planId: planId };
  await api
    .post(`/notification/plan`, JSON.stringify(body))
    .then(success)
    .catch(fail);
}

export {
  getNotificationList,
  refuseNotification,
  acceptPlanMember,
  acceptFriendRequest,
  sendPlanInvitation,
};
