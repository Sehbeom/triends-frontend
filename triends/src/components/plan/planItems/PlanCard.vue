<template>
  <div class="search-result-item">
    <div class="result-name">{{ course.title }}</div>
    <div>
      <div col="3" class="result-img">
        <img :src="course.firstImage" alt="no image" />
      </div>
      <div col="9" class="result-add">{{ course.addr1 }}{{ course.addr2 }}</div>
      <div class="result-tel">{{ course.tel }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanCard",
  props: { course: {} },
};
</script>

<style>
.course-card {
  background-color: purple;
  margin-bottom: 5px;
}
.search-result-item {
  margin-bottom: 5px;
  border: solid 2px;
}
.result-img > img {
  width: 100px;
}
</style>
