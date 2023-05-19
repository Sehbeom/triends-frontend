import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AttractionView from "../views/AttractionReviewView.vue";
import MyPageView from "../views/MyPageView.vue";
import MyplanView from "../views/MyPlanView.vue";
import RecommandedAttractionView from "../views/RecommandedAttractionView.vue";
import MakePlanView from "../views/MakePlanView.vue";
import AttractionReviewView from "../views/AttractionReviewView.vue";

Vue.use(VueRouter);

const routes = [
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
    path: "/plan",
    name: "plan",
    component: MakePlanView,
  },
  {
    path: "/reivew",
    name: "review",
    component: AttractionReviewView,
  },
  {
    path: "regist",
    name: "reviewregist",
    component: () =>
      import(/* webpackChunkName: "review" */ "../components/review/ReviewWrite.vue"),
  },
  {
    path: "detail",
    name: "reviewdetail",
    component: () =>
      import(/* webpackChunkName: "review" */ "../components/review/ReviewDetail.vue"),
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
    component: () => import(/* webpackChunkName: "notice" */ "@/views/NoticeView.vue"),
    redirect: "/notice/list",
    children: [
      {
        path: "list",
        name: "noticeList",
        component: () =>
          import(/* webpackChunkName: "notice" */ "@/components/notice/NoticeList.vue"),
      },
      // {
      //   path: "write",
      //   name: "boardRegister",
      //   component: () =>
      //     import(/* webpackChunkName: "board" */ "@/components/board/BoardRegister.vue"),
      // },
      {
        path: "detail/:articleno",
        name: "noticeDetail",
        component: () =>
          import(/* webpackChunkName: "board" */ "@/components/notice/NoticeDetail.vue"),
      },
      // {
      //   path: "modify/:articleno",
      //   name: "boardModify",
      //   component: () =>
      //     import(/* webpackChunkName: "board" */ "@/components/board/BoardModify.vue"),
      // },
      // {
      //   path: "delete/:articleno",
      //   name: "boardDelete",
      //   component: () =>
      //     import(/* webpackChunkName: "board" */ "@/components/board/BoardDelete.vue"),
      // },
    ],
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
