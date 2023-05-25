import { apiInstance } from "./index";

const api = apiInstance();

async function getFriends(userId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/friends?userId=${userId}`).then(success).catch(fail);
}

async function getRecommendOfFriends(userId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/friends/recommend?type=friends&userId=${userId}`).then(success).catch(fail);
}

async function getRecommendOfPreference(userId, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/friends/recommend?type=preference&userId=${userId}`).then(success).catch(fail);
}

async function sendFriendRequest(param, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api({
    method: "post",
    url: "/notification/friend",
    data: {
      userId: param.userId,
      receiverId: param.receiverId,
    },
  })
    .then(success)
    .catch(fail);
}

async function deleteFriend(param, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api({
    method: "delete",
    url: `/friends?friendId=${param.receiverId}&userId=${param.userId}`,
  })
    .then(success)
    .catch(fail);
}

export {
  getFriends,
  getRecommendOfFriends,
  getRecommendOfPreference,
  sendFriendRequest,
  deleteFriend,
};
