<template>
  <div class="detail-header">{{ title }}</div>
</template>

<script>
export default {
  name: "PageDetailHeader",
  props: {
    title: String,
  },
};
</script>

<style>
.detail-header {
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
  background-color: pink;
}
</style>
