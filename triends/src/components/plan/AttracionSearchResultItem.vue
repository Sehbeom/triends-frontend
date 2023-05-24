<template>
  <div class="search-result-container">
    <div class="img-container">
      <img
        :src="item.firstImage || './images/no-image.png'"
        alt="no image"
        class="img"
      />
    </div>
    <div class="content">
      <div class="title">{{ item.title }}</div>
      <div class="addr">{{ item.addr1 }}{{ item.addr2 }}</div>
      <div class="tel">{{ item.tel }}</div>
      <div class="submit" v-if="isPlan !== false">
        <b-button
          @click="addCourseToStore()"
          class="submit-button"
          variant="outline-primary"
          >계획 추가</b-button
        >
        <b-form-select
          placeholder="날짜를 선택해주세요"
          class="select"
          v-model="selected"
          :options="getDateArray"
        ></b-form-select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
const planDraftStore = "planDraftStore";

export default {
  name: "AttractionSearchResultItem",
  props: {
    item: {},
    isPlan: String,
  },
  methods: {
    ...mapActions(planDraftStore, ["addCourse"]),
    addCourseToStore() {
      if (this.selected === null) {
        alert("일정을 추가할 날짜를 선택해주세요!");
      } else {
        let itemParse = { course: this.item, day: this.selected };
        this.addCourse(itemParse);
      }
    },
  },
  computed: {
    ...mapGetters(planDraftStore, ["getDateArray"]),
  },
  data() {
    return {
      selected: null,
    };
  },
};
</script>

<style scoped>
.search-result-container {
  width: 95%;
  height: 170px;
  display: flex;
  margin-left: 7px;
}
.img-container {
  width: 40%;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
.content {
  width: 64%;
  margin-left: 5px;
  border: solid 2px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  text-align: left;
  padding-left: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.select {
  width: 120px;
  height: 38px;
  font-size: 12px;
  border: none;
}
.submit-button {
  background-color: transparent;
  color: black;
  border: none;
}
.submit-button :hover {
  background-color: blue;
}
</style>
