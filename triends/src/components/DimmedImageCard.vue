<template>
  <div class="image-container">
    <img :src="item.firstImage" />
    <div class="dimmed-container">
      <div class="attraction-title" :v-b-modal="String(item.contentId)">
        {{ item.title }}
      </div>
      <b-modal :id="String(item.contentId)">{{ item.contentId }}</b-modal>
      <div class="inner">
        <div class="star-rating" v-if="canrating === 'write'">
          <div class="star" v-for="index in 5" :key="index" @click="check(index)">
            <span v-if="index < score">🌟</span>
            <span v-if="index >= score">⭐</span>
          </div>
        </div>
        <div class="star-rated" v-else @mouseover="getRating(item)">
          {{ getRating(item) }}
          <span v-if="getRating(item) < 0.5">⭐⭐⭐⭐⭐</span>
          <span v-if="0.5 <= getRating(item) && getRating(item) < 1.5">🌟⭐⭐⭐⭐</span>
          <span v-if="1.5 <= getRating(item) && getRating(item) < 2.5">🌟🌟⭐⭐⭐</span>
          <span v-if="2.5 <= getRating(item) && getRating(item) < 3.5">🌟🌟🌟⭐⭐</span>
          <span v-if="3.5 <= getRating(item) && getRating(item) < 4.5">🌟🌟🌟🌟⭐</span>
          <span v-if="4.5 <= getRating(item)">🌟🌟🌟🌟🌟</span>
        </div>
      </div>
      <!-- <b-button :v-b-modal="String(item.key)">Show Modal</b-button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DimmedImageCard",
  props: {
    item: {},
    canrating: String,
    rateInfo: [],
  },
  data() {
    return {
      score: 0,
      rating: {
        contentId: 0,
        rates: 0,
      },
    };
  },
  methods: {
    check(index) {
      this.score = index + 1;
      console.log(this.item)
      console.log(this.score);
      this.rating.contentId=this.item.contentId;
      this.rating.rates=this.score-1;
      this.$emit("rating", this.rating);
    },
    getRating(contentIdHover) {
      console.log(this.rateInfo);
      console.log(contentIdHover);
      this.rateInfo.forEach((element) => {
        console.log(element.contentId + " " + element.score);
        if (element.contentId === contentIdHover.contentId) {
          contentIdHover.rates=element.score;
        }
      });
      return contentIdHover.rates;
    },
  },
};
</script>

<style scoped>
.image-container:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.image-container,
.image-container > img {
  position: relative;
  display: inline-block;
  height: 200px;
  width: 320px;
}

.dimmed-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #333;
  border: none;
  padding: 10px;
  cursor: pointer;
  opacity: 0; /* 초기에 버튼 숨김 */
  transition: opacity 0.3s ease; /* 페이드 인/아웃 효과 적용 */
}

.image-container:hover .dimmed-container {
  opacity: 1; /* 호버 시 버튼 표시 */
  z-index: 2;
}
.scroll-container {
  position: relative;
  overflow-x: scroll;
  white-space: nowrap;
}
.attraction-title {
  font-size: 150%;
  font-weight: bolder;
  color: aliceblue;
  margin-bottom: 10px;
}
.scroll-content {
  display: inline-block;
}
.inner {
  margin-bottom: 15px;
  width: 200px;
  z-index: 5;
}
.inner > .star-rating > .star {
  font-size: 150%;
  display: inline-block;
}
</style>
