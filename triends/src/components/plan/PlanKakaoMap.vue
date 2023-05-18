<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "PlanKakoMap",
  data() {
    return {
      map: null,
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
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 870px;
  float: right;
}
</style>
