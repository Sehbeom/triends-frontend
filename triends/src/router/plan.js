import MakePlanView from "../views/MakePlanView";
import { onlyAuthUser } from "./onlyAuth";

export default {
  path: "/plan",
  name: "plan",
  beforeEnter: onlyAuthUser,
  component: MakePlanView,
  beforeRouteLeave() {
    window.confirm("fuck?");
  },
};
