<template>
  <article-layout>
    <div class="form-container">
      <b-form @submit="register" @reset="reset">
        <b-form-group class="input-form" label-for="review-title">
          <h5>리뷰 제목</h5>
          <b-form-input id="review-title" v-model="form.subject" type="text" />
        </b-form-group>

        <b-form-group class="input-form" label-for="review-plan">
          <h5>어떤 여행을 공유하고 싶나요?</h5>
          <b-form-select class="review-plan-select" id="review-plan">
            <b-form-select-option>{{ courseInfo }}</b-form-select-option>
          </b-form-select>
        </b-form-group>

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
import { reviewModify, getPlanList, reviewDetail } from "@/apis/review";
import { mapState } from "vuex";

const userStore = "userStore";

export default {
  components: {
    ArticleLayout,
  },
  data() {
    return {
      form: {
        userId: null,
        planId: null,
        subject: "",
        content: "",
      },
      plans: [],
      items: {
        type: "dimmedImageCarousel",
        auto: "false",
        from: "write",
        items: [],
      },
      articledata: {},
      courseInfo: String,
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
    let rid = this.$route.query.reviewid;
    console.log(rid + " " + userId);
    console.log(this.plans);
    reviewDetail(rid, userId, ({ data }) => {
      this.articledata = data.data;
      console.log(this.articledata);
      this.form.subject = this.articledata.subject;
      this.form.content = this.articledata.content;
      this.plans.forEach((element) => {
        if (element.planId === this.articledata.planId) {
          this.courseInfo = element.title;
        }
      });
    });
  },
  methods: {
    register() {
      this.form.userId = this.userInfo.userId;
      this.form.reviewId = this.$route.query.reviewid;
      console.log(this.form);
      reviewModify(
        JSON.stringify(this.form),
        ({ data }) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          this.$router.push({ name: "error" });
        }
      );
      this.$router
        .push({
          name: "review",
        })
        .catch(() => {
          console.log("uncaght error");
        });
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
