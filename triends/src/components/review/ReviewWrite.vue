<template>
  <article-layout>
    <div class="form-container">
      <b-form @submit="register" @reset="reset">
        <b-form-group class="input-form" label-for="review-title">
          <h5>리뷰 제목</h5>
          <b-form-input
            id="review-title"
            v-model="form.subject"
            type="text"
            placeholder="리뷰 제목을 입력해주세요."
          />
        </b-form-group>

        <b-form-group class="input-form" label-for="review-plan">
          <h5>어떤 여행을 공유하고 싶나요?</h5>
          <b-form-select
            class="review-plan-select"
            id="review-plan"
            v-model="form.planId"
            @change="selectPlan"
          >
            <b-form-select-option v-for="plan in plans" :key="plan.planId" :value="plan.planId">{{
              plan.title
            }}</b-form-select-option>
          </b-form-select>
        </b-form-group>

        <!-- 플랜 선택시 관광지 카드 보이기 -->
        <div class="filled-wrap" v-if="form.planId">
          <custom-carousel :items="items" @ratingAttr="ratingAttr" />
        </div>
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
import CustomCarousel from "../carousel/CustomCarousel.vue";
import { reviewWrite, getPlanList, getPlanCourse } from "@/apis/review";
import { mapState } from "vuex";
// import router from "@/router";

const userStore = "userStore";

export default {
  components: {
    ArticleLayout,
    CustomCarousel,
  },
  data() {
    return {
      form: {
        userId: null,
        planId: null,
        subject: "",
        content: "",
        rateInfo: [],
      },
      plans: [],
      items: {
        type: "dimmedImageCarousel",
        auto: "false",
        // items: {
        //   from: "write",
        //   items: [],
        // },
        from: "write",
        items: [],
      },
    };
  },
  created() {
    let userId = this.userInfo.userId;
    getPlanList(
      userId,
      ({ data }) => {
        this.plans = data.data;
        console.log(this.plans);
      },
      (error) => {
        console.log(error);
        this.$router.push({ name: "error" });
      }
    );
  },
  methods: {
    selectPlan() {
      console.log(this.form.planId);
      let totalCourses = [];
      let key = 0;
      getPlanCourse(
        this.form.planId,
        ({ data }) => {
          data.data.courseInfo.forEach((element) => {
            element.courses.forEach((el) => {
              key += 1;
              let tmp = el.attractionInfo;
              tmp["key"] = key;
              totalCourses.push(tmp);
            });
          });
          console.log(totalCourses);
          this.items.items = totalCourses;

          let tmpr = [];
          totalCourses.forEach((element) => {
            let ttt = {};
            ttt["contentId"] = element.contentId;
            ttt["score"] = 0;
            tmpr.push(ttt);
          });
          this.form.rateInfo = tmpr;
          console.log(this.form);
        },
        (error) => {
          console.log(error);
          this.$router.push({ name: "error" });
        }
      );
    },
    ratingAttr(value) {
      console.log(value)
      console.log(value.contentId + " " + value.score);
      let tfri = this.form.rateInfo;
      for (let i = 0; i < tfri.length; i++) {
        if (tfri[i].contentId === value.contentId) {
          tfri[i].score = value.score;
        }
      }
      console.log(this.form);
    },
    register() {
      this.form.userId = this.userInfo.userId;
      reviewWrite(
        JSON.stringify(this.form),
        ({ data }) => {
          console.log(data);
          this.$router
            .push({
              name: "review",
            })
            .catch(() => {
              console.log("uncaght error");
            });
        },
        (error) => {
          console.log(error);
          this.$router.push({ name: "error" });
        }
      );
    },
    reset() {
      this.form.subject = "";
      this.form.planId = null;
      this.form.content = "";
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
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
