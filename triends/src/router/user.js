import UserView from "../views/UserView";
import UserLogin from "../components/user/UserLogin";
import UserRegister from "../components/user/UserRegister";

export default {
  path: "/user",
  name: "user",
  component: UserView,
  children: [
    {
      path: "signin",
      name: "signIn",
      component: UserLogin,
    },
    {
      path: "signup",
      name: "signUp",
      component: UserRegister,
    },
  ],
};
