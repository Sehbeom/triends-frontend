<template>
  <div class="search-result-container">
    <div v-for="item in items" :key="item.id">
      <attracion-search-result-item :item="item" isPlan="attraction" />
      <hr />
    </div>
    <div v-if="!items" class="holder">
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Backhand%20Index%20Pointing%20Left%20Medium-Light%20Skin%20Tone.png"
        alt="Backhand Index Pointing Left Medium-Light Skin Tone"
        width="100"
        height="100"
      />
      <h3>지도에서 여행지를 찾아보세요!</h3>
    </div>
  </div>
</template>

<script>
import AttracionSearchResultItem from "./AttracionSearchResultItem.vue";

export default {
  name: "AttractionSerchResult",
  components: {
    AttracionSearchResultItem,
  },
  props: {
    items: [],
    type: String,
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.search-result-container {
  max-height: 780px;
  overflow-y: scroll;
  margin-top: 5px;
}
.holder {
  margin-top: 200px;
}
</style>
