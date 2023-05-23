import FriendsView from "../views/FriendsView";
import FriendsManage from "../components/friends/FriendsManage";
import { onlyAuthUser } from "./onlyAuth";

export default {
  path: "/friends",
  name: "friends",
  component: FriendsView,
  beforeEnter: onlyAuthUser,
  redirect: "/friends/manage",
  children: [
    {
      path: "/friends/manage",
      name: "friends-manage",
      component: FriendsManage,
    },
  ],
};
