<template>
  <div class="side-bar-wrapper">
    <VueResizable
      class="resizable-side-bar"
      :width="500"
      :min-width="500"
      :max-width="Infinity"
      :active="['r']"
      v-if="isVisibleSideBar"
    >
      <div class="side-bar"></div>
    </VueResizable>
    <b-button class="side-bar-active-btn" size="sm" @click="showSideBar">
      {{ isVisibleSideBar ? "닫힘" : "열림" }}
    </b-button>
  </div>
</template>

<script>
import VueResizable from "vue-resizable";
export default {
  name: "SideBar",
  components: {
    VueResizable,
  },
  data() {
    return {
      isVisibleSideBar: true,
    };
  },
  computed: {
    isVisibleReviewList() {
      return this.$store.state.isVisibleReviewList;
    },
  },
  methods: {
    showSideBar() {
      this.isVisibleSideBar = !this.isVisibleSideBar;
    },
  },
};
</script>

<style lang="scss" scoped>
.side-bar-wrapper {
  display: flex;
  color: #fff;
  > .side-bar-active-btn {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    padding: 0;
    border: none;
    border-radius: unset;
    color: #fff;
    opacity: 0.5;
    width: 40px;
    height: 40px;
  }
}
</style>
