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
            v-model="form.plans"
            :options="plans"
          />
        </b-form-group>

        <!-- 플랜 선택시 관광지 카드 보이기 -->
        <div class="img-wrap">
          <b-row>
            <b-col v-for="attraction in attractions" :key="attraction.id">
              <attraction-review-card />
            </b-col>
          </b-row>
        </div>

        <b-form-group class="input-form" label-for="review-plan">
          <h5>여행은 어땠나요?</h5>
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="리뷰 내용을 작성해주세요"
            rows="15"
          ></b-form-textarea>
        </b-form-group>
      </b-form>
    </div>
  </article-layout>
</template>

<script>
import AttractionReviewCard from "../AttractionReviewCard.vue";
import ArticleLayout from "../layout/ArticleLayout.vue";

export default {
  components: {
    ArticleLayout,
    AttractionReviewCard,
  },
  data() {
    return {
      form: {
        title: "",
        plans: null,
      },
      attractions: [
        { id: "1", title: "관광지1" },
        { id: "2", title: "관광지2" },
        { id: "3", title: "관광지3" },
        { id: "4", title: "관광지4" },
        { id: "4", title: "관광지5" },
        { id: "4", title: "관광지6" },
        { id: "4", title: "관광지7" },
        { id: "4", title: "관광지8" },
        { id: "4", title: "관광지9" },
        { id: "4", title: "관광지10" },
      ],
      plans: [
        { text: "플랜을 선택해주세요.", value: null },
        "강릉여행",
        "제주도여행",
        "부산여행",
        "여수여행",
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
  background-color: red;
  width: 100%;
  margin-bottom: 40px;
  font-weight: bolder;
}
.review-plan-select {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  color: rgb(108, 117, 125);
}
.img-wrap {
  text-align: left;
  height: 250px;
  margin: 20px;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
