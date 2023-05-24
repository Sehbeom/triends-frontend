import MyPageView from "../views/MyPageView.vue";
import { onlyAuthUser } from "./onlyAuth";
export default {
  path: "/mypage",
  name: "mypage",
  beforeEnter: onlyAuthUser,
  component: MyPageView,
};
