<template>
  <div>
    <carousel
      :per-page="3"
      :autoplay="items.auto === 'true'"
      :loop="true"
      :autoplay-timeout="5000"
      :center-mode="true"
    >
      <slide v-for="item in items.items" :key="item.key" :center-mode="true">
        <div class="component-container">
          <attraction-recommand-card :item="item" v-if="items.type === 'attractionCarousel'" />
          <dimmed-image-card
            v-if="items.type === 'dimmedImageCarousel'"
            :item="item"
            @rating="rating"
          />
          <friend-card v-if="items.type === 'friendList'" />
        </div>
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
  props: { items: {} },
  data() {
    return {
      rates: {
        contentId: "",
        score: 0,
      },
    };
  },
  methods: {
    rating(value) {
      this.rates.contentId = value.contentId;
      this.rates.score = value.rates;
      this.$emit("ratingAttr", this.rates);
    },
  },
};
</script>

<style>
.component-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
