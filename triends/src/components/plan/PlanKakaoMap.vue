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
  },
  data() {
    return {
      map: null,
      searchKeyword: "",
      markers: [],
    };
  },
  mounted() {
    this.setSearchTypeKeyword();
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  computed: {
    ...mapState(attractionStore, ["selectedAttraction", "isRecommanded"]),
    setMarker() {
      return this.selectedAttraction;
    },
  },
  watch: {
    setMarker() {
      for (var j = 0; j < this.markers.length; j++) {
        this.markers[j].setMap(null);
      }
      this.markers = [];

      const positions = this.selectedAttraction;
      console.log("positions", positions);
      var imageSrc = "";
      if (!this.isRecommanded) {
        imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
      } else {
        imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";
      }
      for (var i = 0; i < positions.length; i++) {
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(positions[i].latitude, positions[i].longitude), // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
        this.markers.push(marker);
      }
    },
  },

  methods: {
    ...mapActions(attractionStore, ["getAttraction", "setSearchTypeKeyword"]),

    loadScript() {
      console.log("mapp by loadScript");
      /* global kakao */
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
      let searchurl = `?neLat=${neLatLng.Ma}&neLng=${neLatLng.La}&swLat=${swLatLng.Ma}&swLng=${swLatLng.La}&keyword=${this.searchKeyword}`;
      console.log(searchurl);
      this.getAttraction(searchurl);
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
  width: 400px;
  position: absolute;
  left: 40%;
  top: 8%;
  z-index: 8;
}
.box-input,
.box-button {
  float: left;
}
.box-input {
  width: 250px;
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
