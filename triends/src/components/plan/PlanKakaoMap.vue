<template>
  <div class="plan-page-layout">
    <div id="map">
      <div class="search-box">
        <b-form-input
          class="box-input"
          v-model="searchKeyword"
          placeholder="검색어를 입력해주세요"
        ></b-form-input>
        <b-button class="box-button" variant="outline-primary" @click="searchByMap()"
          >검색</b-button
        >
      </div>
    </div>
    <div class="side-tab-container">
      <plan-side-tab />
    </div>
  </div>
</template>

<script>
import PlanSideTab from "@/components/plan/PlanSideTab.vue";
import { mapActions, mapState } from "vuex";

const attractionStore = "attractionStore";

export default {
  name: "PlanKakoMap",
  components: {
    PlanSideTab,
    AttractionOverlay,
  },
  data() {
    return {
      map: null,
      searchKeyword: "",
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  computed: {
    ...mapState(attractionStore, ["selectedAttraction"]),
    setMarker() {
      console.log("vuex! mapstate!", this.selectedAttraction);
      return this.selectedAttraction;
    },
  },

  methods: {
    ...mapActions(attractionStore, ["getAttractionByKeyword"]),

    loadScript() {
      console.log("mapp by loadScript");
      const script = document.createElement("script");
      const serviceKey = "93afce403fa4b93b85720e811bebec2b";
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=" + serviceKey + "&autoload=false";
      console.log(script.src);
      script.onload = () => window.kakao.maps.load(this.loadMap);
      document.head.appendChild(script);
    },

    loadMap() {
      console.log("mapp by loadMap");
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.566535, 126.9779692),
        level: 8,
      };
      this.map = new window.kakao.maps.Map(container, options);
    },

    searchByMap() {
      // 위경도로 attraction 찾기.
      var bounds = this.map.getBounds();
      var swLatLng = bounds.getSouthWest();
      var neLatLng = bounds.getNorthEast();
      console.log(this.searchKeyword + " " + swLatLng.La + " " + neLatLng.Ma);
      let searchurl = `attraction?neLat=${neLatLng.Ma}&neLng=${neLatLng.La}&swLat=${swLatLng.Ma}&swLng=${swLatLng.La}&keyword=${this.searchKeyword}`;
      console.log(searchurl);
      this.getAttractionByKeyword(searchurl);
    },
  },
};
</script>

<style scoped>
#map {
  height: 870px;
  width: 100%;
  z-index: 5;
}
.search-box {
  width: 20%;
  position: absolute;
  left: 40%;
  top: 5%;
  z-index: 8;
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
.plan-page-layout {
  display: flex;
}
.side-tab-container {
  width: 500px;
}
</style>
