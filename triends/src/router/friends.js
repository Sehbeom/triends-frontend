import FriendsView from "../views/FriendsView";
import FriendsManage from "../components/friends/FriendsManage";

export default {
  path: "/friends",
  name: "friends",
  component: FriendsView,
  redirect: "/friends/manage",
  children: [
    {
      path: "/friends/manage",
      name: "friends-manage",
      component: FriendsManage,
    },
  ],
};
