<template>
  <div class="myplan-page">
    <page-button-header />
    <article-layout>
      <page-detail-header title="내 플랜" />
      <div class="myplan-page-container">
        <!-- 이 밑은 카드 컨테이너. 여행 리뷰 페이지의 카드들을 모아놓는 부분 -->
        <b-container class="bv-example-row mb-3" style="min-width: 1000px">
          <b-row cols="2">
            <b-col :key="item.planId" v-for="item in items.items">
              <my-plan-card :item="item" />
            </b-col>
          </b-row>
        </b-container>
      </div>
    </article-layout>
  </div>
</template>

<script>
import MyPlanCard from "@/components/MyPlanCard.vue";
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import ArticleLayout from "@/components/layout/ArticleLayout.vue";
import PageButtonHeader from "@/components/header/PageButtonHeader.vue";
import { getPlanList } from "@/apis/plan";
import { mapState } from "vuex";
import router from "@/router";

const userStore = "userStore";

export default {
  components: { MyPlanCard, PageDetailHeader, ArticleLayout, PageButtonHeader },
  name: "MyPlanView",
  created() {
    getPlanList(
      this.userInfo.userId,
      ({ data }) => {
        if (data.message === "나의 플랜 목록 조회가 완료되었습니다.") {
          this.items.items = data.data;
        } else {
          router.push({ name: "error" });
        }
      },
      () => {
        router.push({ name: "error" });
      }
    );
  },
  computed: { ...mapState(userStore, ["userInfo"]) },
  data() {
    // 이곳은 api 연동 후 사라질 데이터입니다
    return {
      items: {
        auto: "true",
        items: [],
      },
    };
  },
};
</script>

<style>
.myplan-page-container {
  margin-top: 50px;
  min-width: 1000px;
}
</style>
