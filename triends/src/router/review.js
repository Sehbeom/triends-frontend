import { onlyAuthUser } from "./onlyAuth";

export default {
  path: "/review",
  name: "review",
  beforeEnter: onlyAuthUser,
  component: () => import(/* webpackChunkName: "review" */ "@/views/AttractionReviewView.vue"),
  redirect: "/review/list",
  children: [
    {
      path: "list",
      name: "reviewList",
      component: () =>
        import(/* webpackChunkName: "review" */ "@/components/review/ReviewList.vue"),
    },
    {
      path: "detail/:articleno",
      name: "unloginDetail",
      component: () =>
        import(/* webpackChunkName: "review" */ "@/components/review/ReviewDetail.vue"),
    },
    {
      path: "detail/",
      name: "loginDetail",
      component: () =>
        import(/* webpackChunkName: "review" */ "@/components/review/ReviewDetail.vue"),
    },
    {
      path: "regist",
      name: "reviewregist",
      component: () =>
        import(/* webpackChunkName: "review" */ "@/components/review/ReviewWrite.vue"),
    },
    {
      path: "modify",
      name: "reviewmodify",
      component: () =>
        import(/* webpackChunkName: "review" */ "@/components/review/ReviewModify.vue"),
    },
  ],
};
