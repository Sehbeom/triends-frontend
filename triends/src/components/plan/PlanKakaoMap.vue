<template>
  <div>
    <b-row>
      <b-col sm="10">
        <div id="map">
          <div class="search-box">
            <b-form-input
              class="box-input"
              v-model="text"
              placeholder="검색어를 입력해주세요"
            ></b-form-input>
            <b-button class="box-button" variant="outline-primary" @click="searchByMap()"
              >검색</b-button
            >
          </div>
        </div>
      </b-col>
      <b-col sm="2">
        <plan-side-tab :items="items" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import http from "@/util/http-common";
import PlanSideTab from "@/components/plan/PlanSideTab.vue";

export default {
  name: "PlanKakoMap",
  components: {
    PlanSideTab,
  },
  data() {
    return {
      items: [],
      map: null,
      text: "",
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  methods: {
    loadScript() {
      const script = document.createElement("script");
      const serviceKey = "93afce403fa4b93b85720e811bebec2b";
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=" + serviceKey + "&autoload=false";
      console.log(script.src);
      script.onload = () => window.kakao.maps.load(this.loadMap);

      document.head.appendChild(script);
    },
    loadMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      this.map = new window.kakao.maps.Map(container, options);
    },
    searchByMap() {
      var bounds = this.map.getBounds();
      var swLatLng = bounds.getSouthWest();
      var neLatLng = bounds.getNorthEast();
      console.log(this.text + " " + swLatLng.La + " " + neLatLng.Ma);
      let searchurl = `attraction?neLat=${neLatLng.Ma}&neLng=${neLatLng.La}&swLat=${swLatLng.Ma}&swLng=${swLatLng.La}&keyword=${this.text}`;
      console.log(searchurl);
      http.get(searchurl).then(({ data }) => {
        this.items = data.data;
        console.log(this.items);
      });
    },
  },
};
</script>

<style scoped>
#map {
  height: 870px;
  width: 100%;
  z-index: 10;
}
.search-box {
  width: 20%;
  position: absolute;
  left: 40%;
  top: 5%;
  z-index: 11;
}
.box-input,
.box-button {
  float: left;
}
.box-input {
  width: 80%;
}
.box-button {
  width: 19%;
}
</style>
