<template>
  <infinite-slide-bar class="infinite-slide">
    <span class="slide-content">
      새롭게 떠날 여행지를 찾아보세요!
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Disguised%20Face.png"
        alt="Disguised Face"
        width="100"
        height="100"
        style="margin-left: 10px"
      />
    </span>
  </infinite-slide-bar>
</template>

<script>
import InfiniteSlideBar from "vue-infinite-slide-bar";

export default {
  name: "InfiniteSlideRecommand",
  props: {
    height: String,
  },
  components: { InfiniteSlideBar },
};
</script>

<style scoped>
.infinite-slide {
  width: 100vw !important;
  min-width: 1300px !important;
  display: flex;
  height: 110px;
  align-items: center;
  background-color: var(--card-orange);
  margin-left: calc(-50vw + 50%);
  border-top: solid;
  border-bottom: solid;
  margin-bottom: 50px;
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
