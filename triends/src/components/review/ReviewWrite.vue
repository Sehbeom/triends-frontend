<template>
  <article-layout>
    <div class="form-container">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group class="input-form" label-for="review-title">
          <h5>리뷰 제목</h5>
          <b-form-input
            id="review-title"
            v-model="form.title"
            type="text"
            placeholder="리뷰 제목을 입력해주세요."
          />
        </b-form-group>

        <b-form-group class="input-form" label-for="review-plan">
          <h5>어떤 여행을 공유하고 싶나요?</h5>
          <b-form-select
            class="review-plan-select"
            id="review-plan"
            v-model="form.planselected"
            :options="plans"
          />
        </b-form-group>

        <!-- 플랜 선택시 관광지 카드 보이기 -->
        <div class="filled-wrap" v-if="form.planselected"><recommand-carousel /></div>
        <div class="blank-wrap" v-else>플랜을 선택해주세요.</div>

        <b-form-group class="input-form" label-for="review-plan">
          <h5>여행은 어땠나요?</h5>
          <b-form-textarea
            id="textarea"
            v-model="form.content"
            placeholder="리뷰 내용을 작성해주세요"
            rows="15"
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">작성완료</b-button>
        <b-button type="reset" variant="danger">작성취소</b-button>
        <b-button router-link :to="{ name: 'review' }">목록으로</b-button>
      </b-form>
    </div>
  </article-layout>
</template>

<script>
import ArticleLayout from "../layout/ArticleLayout.vue";
import RecommandCarousel from "@/components/carousel/RecommandCarousel.vue";

export default {
  components: {
    ArticleLayout,
    RecommandCarousel,
  },
  data() {
    return {
      form: {
        title: "",
        planselected: null,
        content: "",
      },
      plans: [
        { text: "플랜을 선택해주세요.", value: null },
        { text: "강릉여행", value: "a" },
        { text: "제주도여행", value: "b" },
        { text: "부산여행", value: "c" },
        { text: "여수여행", value: "d" },
      ],
      items: [
        {
          id: 1,
          title: "attraction1",
          content: "test card content. wanna go home",
          count: 4,
        },
        {
          id: 2,
          title: "attraction2",
          content: "test card content. wanna go home",
          count: 2,
        },
        {
          id: 3,
          title: "attraction3",
          content: "test card content. wanna go home",
          count: 3,
        },
        {
          id: 4,
          title: "attraction4",
          content: "test card content. wanna go home",
          count: 4,
        },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.title = "";
      this.form.plans = null;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.input-form {
  text-align: left;
  width: 100%;
  margin-bottom: 40px;
  font-weight: bolder;
}
.review-plan-select {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  color: rgb(108, 117, 125);
  border-style: rgb(108, 117, 125);
}
.img-wrap {
  text-align: left;
  height: 250px;
  margin: 20px;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
