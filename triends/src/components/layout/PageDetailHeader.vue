<template>
  <div class="detail-header">
    {{ title }}
    <img :src="icon" alt="" width="80px" />
  </div>
</template>

<script>
export default {
  name: "PageDetailHeader",
  props: {
    title: String,
    icon: String,
  },
};
</script>

<style>
.detail-header {
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
  padding-bottom: 1vw;
  display: flex;
  align-items: center;
}
</style>
