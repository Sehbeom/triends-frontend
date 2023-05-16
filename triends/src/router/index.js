import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AttractionView from "../views/AttractionReviewView.vue";
import MyPageView from "../views/MyPageView.vue";
import MyplanView from "../views/MyPlanView.vue";
import NoticeView from "../views/NoticeView.vue";
import RecommandedAttractionView from "../views/RecommandedAttractionView.vue";
import ReviewDetail from "../components/review/ReviewDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/reviewdetail",
    name: "reviewdetail",
    component: ReviewDetail,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/attraction",
    name: "attraction",
    component: AttractionView,
  },
  {
    path: "/mypage",
    name: "mypage",
    component: MyPageView,
  },
  {
    path: "/myplan",
    name: "myplan",
    component: MyplanView,
  },
  {
    path: "/notice",
    name: "notice",
    component: NoticeView,
  },
  {
    path: "/recommand",
    name: "recommand",
    component: RecommandedAttractionView,
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "user" */ "@/views/UserView.vue"),
    children: [
      {
        path: "signin",
        name: "signIn",
        component: () => import(/* webpackChunkName: "user" */ "@/components/user/UserLogin.vue"),
      },
      {
        path: "signup",
        name: "signUp",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/components/user/UserRegister.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
