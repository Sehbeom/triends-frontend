<template>
  <div class="search-result-item">
    <div class="result-name">{{ item.title }}</div>
    <div>
      <div col="3" class="result-img">
        <img :src="item.firstImage" alt="no image" />
      </div>
      <div col="9" class="result-add">{{ item.addr1 }}{{ item.addr2 }}</div>
      <div class="result-tel">{{ item.tel }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttractionSarchResultItem",
  props: {
    item: {},
  },
};
</script>

<style scoped>
.search-result-item {
  margin-bottom: 5px;
  border: solid 2px;
}
.result-img > img {
  width: 100px;
}
</style>
