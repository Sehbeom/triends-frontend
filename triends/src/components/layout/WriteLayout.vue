<template>
  <div class="write-container">
    <page-detail-header title="리뷰 작성" />
    <div class="article">
      <slot />
    </div>
  </div>
</template>

<script>
import PageDetailHeader from "./PageDetailHeader.vue";
export default {
  name: "WriteLayout",
  components: {
    PageDetailHeader,
  },
};
</script>

<style scoped>
.write-container {
  background-color: purple;
  display: flex;
  justify-content: center;
  min-width: 1000px;
}
.article {
  width: 75%;
  background-color: black;
  margin-top: 5vw;
}
</style>
