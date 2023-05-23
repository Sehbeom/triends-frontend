<template>
  <infinite-slide-bar class="infinite-slide" :style="{ height: height }">
    <span class="slide-content"
      >여행을 떠나고 싶으신가요? Triends에서 친구와 함께 여행을 떠나보세요!
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Airplane%20Departure.png"
        alt="Airplane Departure"
        width="100"
        height="100"
    /></span>
  </infinite-slide-bar>
</template>

<script>
import InfiniteSlideBar from "vue-infinite-slide-bar";
export default {
  name: "InfiniteSlide",
  props: {
    height: String,
  },
  components: { InfiniteSlideBar },
};
</script>

<style>
.infinite-slide {
  /* margin-top: 60px;
  margin-bottom: 100px; */
  /* height: 120px; */
  /* height: 80px; */
  background-color: #78ff78;

  width: 100vw !important;
  min-width: 1300px !important;
  display: flex;
  /* flex-direction: column; */

  align-items: center;
  margin-left: calc(-50vw + 50%);
  border-top: solid;
  border-bottom: solid;
}
.slide-content {
  width: 1500px;
  display: inline-flex;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;
  font-size: 2.5rem;
  font-weight: 800;
}
</style>
