<template>
  <div>
    <b-form-group label="선호하는 여행지를 선택해주세요" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="preferenceIds"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>
    <b-button type="button" variant="primary" class="m-1" @click="confirm"
      >선호 키워드 등록</b-button
    >
  </div>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "UserPreference",
  data() {
    return {
      preferenceIds: [],
      options: [
        { text: "관광지", value: "12" },
        { text: "문화시설", value: "14" },
        { text: "축제공연행사", value: "15" },
        { text: "여행코스", value: "25" },
        { text: "레포츠", value: "28" },
        { text: "숙박", value: "32" },
        { text: "쇼핑", value: "38" },
        { text: "음식점", value: "39" },
      ],
    };
  },
  methods: {
    confirm() {
      let tmparr = [];
      this.preferenceIds.forEach((element) => {
        tmparr.push(element);
      });
      console.log(tmparr);
      let prefform = { preferenceIds: tmparr };
      console.log(prefform);
      http.post("user/preference", JSON.stringify(prefform)).then(({ data }) => {
        console.log(data);
      });
    },
  },
};
</script>

<style></style>
