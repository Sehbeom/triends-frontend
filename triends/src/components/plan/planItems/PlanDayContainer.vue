<template>
  <div class="day-header">
    <div class="day">{{ dayItem.day }}일자</div>
    <draggable
      :v-model="dayItem.courses"
      @start="drag = true"
      @end="drag = false"
      :component-data="getComponentData()"
    >
      <div v-for="course in dayItem.courses" :key="course">
        <attraction-search-result-item :item="course" :isPlan="false" />
      </div>
    </draggable>
    <b-button @click="test()">tt</b-button>
  </div>
</template>

<script>
import AttractionSearchResultItem from "../AttracionSearchResultItem.vue";
import draggable from "vuedraggable";
// import PlanCard from "./PlanCard.vue";

export default {
  name: "PlanDayContainer",
  components: { AttractionSearchResultItem, draggable },
  props: {
    dayItem: {},
  },
  computed: {
    courses() {
      console.log("changed", this.dayItem.courses);
      return this.dayItem.courses;
    },
  },
  methods: {
    handleChange() {
      console.log("changed", this.dayItem.courses);
    },
    inputChanged(value) {
      this.activeNames = value;
    },
    getComponentData() {
      return {
        on: {
          change: this.handleChange,
          input: this.inputChanged,
        },
        attrs: {
          wrap: true,
        },
        props: {
          value: this.activeNames,
        },
      };
    },
    test() {
      console.log("changed", this.dayItem.courses);
    },
  },
};
</script>

<style>
.day {
  background-color: skyblue;
  width: 100%;
  font-weight: bold;
  text-align: right;
  padding-right: 15px;
}
.day-header {
  border-bottom: turquoise 2px;
  width: 100%;
}
</style>
