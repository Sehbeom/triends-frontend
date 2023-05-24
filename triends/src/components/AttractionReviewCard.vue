<template>
  <div class="review-container">
    <div class="image-container">
      <img :src="review.thumbnail" alt="" class="review-img" />
    </div>
    <div class="review-data" :style="{ 'background-color': color }">
      <div class="review-header">
        <span class="review-title">{{ review.subject }}</span>
        <span class="review-username">🧑 {{ review.writerName }}</span>
        <span class="review-date">📅 {{ review.startDate + " ~ " + review.endDate }}</span>
        <span class="review-course"> 👟
          <span class="longcourse" v-for="course in review.attractions" :key="course"
            >{{ course }} -
          </span>
        </span>
        <span class="review-content">✏️ {{ review.content }}</span>
        <div class="review-popular">
          <span class="review-likes">💕 {{ review.likes }} </span>
          <span class="review-rating">👍 {{ review.scrapped }}</span>
          <button class="view-btn" @click="viewReview(review)">리뷰 보기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const userStore = "userStore";

export default {
  props: { review: {} },
  name: "AttractionReviewCard",
  methods: {
    viewReview(review) {
      console.log(review.reviewId);
      console.log(this.userInfo.userId);
      if (!this.userInfo.userId) {
        this.$router
          .push({
            name: "unloginDetail",
            params: { articleno: review.reviewId },
          })
          .catch(() => {
            console.log("uncaght error");
          });
      } else {
        this.$router
          .push({
            name: "loginDetail",
            query: { reviewId: review.reviewId, userId: this.userInfo.userId },
          })
          .catch(() => {
            console.log("uncaght error");
          });
      }
    },
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
};
</script>

<style scoped>
.review-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 15vw;
  margin-bottom: 30px;
  border-radius: 15px;
  min-width: 500px;
  min-height: 300px;
}
.review-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.image-container {
  width: 35%;
  height: 100%;
}
.review-header {
  width: 100%;
  height:100%;
  display: flex;
  position:relative;
  flex-direction: column;
}
.review-data {
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px 10px 10px 10px;
  width: 65%;
  height: 100%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: solid 3px black;
}
.review-title {
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
}
.review-date {
  width: 100%;
}
.review-course {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 70%;
}
.review-content{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
  height:2rem;
}
.review-popular {
  display: inline-block;
  position: absolute;
  bottom: 0%;
  right: 0%;
}
.view-btn {
  font-size: 12px;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  margin-left: 20px;
}
</style>
