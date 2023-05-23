import MyPlanView from "../views/MyPlanView.vue";
import { onlyAuthUser } from "./onlyAuth";

export default {
  path: "/myplan",
  name: "myplan",
  beforeEnter: onlyAuthUser,
  component: MyPlanView,
};
