export default {
  path: "/review",
  name: "review",
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
      name: "reviewDetail",
      component: () =>
        import(/* webpackChunkName: "review" */ "@/components/review/ReviewDetail.vue"),
    },
    {
      path: "regist",
      name: "reviewregist",
      component: () =>
        import(/* webpackChunkName: "review" */ "@/components/review/ReviewWrite.vue"),
    },
  ],
};
