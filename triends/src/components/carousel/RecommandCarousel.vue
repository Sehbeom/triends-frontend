<template>
  <div>
    <page-detail-header :title="carouselTitle" :icon="icon" />
    <div class="button-container">
      <b-dropdown
        id="dropdown-1"
        text="정렬 기준"
        class="m-md-2"
        variant="primary"
        v-show="align === 'true'"
      >
        <b-dropdown-item>최신글</b-dropdown-item>
        <b-dropdown-item>좋아요</b-dropdown-item>
        <b-dropdown-item>조회수</b-dropdown-item>
      </b-dropdown>
    </div>
    <custom-carousel :items="items" />
  </div>
</template>

<script>
import PageDetailHeader from "@/components/layout/PageDetailHeader.vue";
import CustomCarousel from "./CustomCarousel.vue";

export default {
  props: {
    carouselTitle: String,
    icon: String,
    align: Boolean,
    items: {},
  },
  components: { PageDetailHeader, CustomCarousel },
  name: "RecommandCarousel",
};
</script>

<style scoped>
.mb-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button-container {
  text-align: right;
}
</style>
