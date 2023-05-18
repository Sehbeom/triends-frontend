<template>
  <write-layout>
    <div class="input-form">
      <h3>리뷰 제목</h3>
      <b-input id="review-title"></b-input>
    </div>
  </write-layout>
</template>

<script>
import WriteLayout from "../layout/WriteLayout.vue";
export default {
  components: {
    WriteLayout,
  },
};
</script>

<style scoped>
.input-form {
  text-align: left;
}
</style>
