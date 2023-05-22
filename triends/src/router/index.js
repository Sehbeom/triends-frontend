import Vue from "vue";
import VueRouter from "vue-router";

import home from "./home";
import notice from "./notice";
import recommendedattraction from "./recommendedattraction";
import plan from "./plan";
import myplan from "./myplan";
import review from "./review";
import friends from "./friends";
import mypage from "./mypage";
import user from "./user";

Vue.use(VueRouter);

const routes = [home, plan, review, mypage, myplan, notice, recommendedattraction, user, friends];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
