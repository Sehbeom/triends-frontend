<template>
  <div>
    <carousel
      :per-page="3"
      :autoplay="true"
      :loop="true"
      :autoplay-timeout="5000"
      :center-mode="true"
    >
      <slide v-for="item in items.items" :key="item.key" :center-mode="true">
        <attraction-recommand-card
          :item="item"
          v-if="items.type === 'attractionCarousel'"
        />
        <dimmed-image-card
          v-if="items.type === 'dimmedImageCarousel'"
          :image="item"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
import AttractionRecommandCard from "../AttractionRecommandCard.vue";
import DimmedImageCard from "../DimmedImageCard.vue";

export default {
  name: "CustomCarousel",
  components: { AttractionRecommandCard, DimmedImageCard },
  props: {
    items: {},
  },
};
</script>

Carousel
<style></style>
