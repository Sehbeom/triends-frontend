<template>
  <div class="image-container">
    <img :src="image.src" />
    <b-button class="modal-button" :v-b-modal="String(image.index)">Show Modal</b-button>
    <!-- <b-modal :id="String(image.index)">Hello From My Modal!</b-modal> -->
  </div>
</template>

<script>
export default {
  name: "DimmedImageCard",
  props: {
    image: {},
  },
};
</script>

<style scoped>
.image-container:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.image-container,
.image-container > img {
  position: relative;
  display: inline-block;
  height: 200px;
}

.modal-button {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ddd;
  color: #333;
  border: none;
  padding: 10px;
  cursor: pointer;
  opacity: 0; /* 초기에 버튼 숨김 */
  transition: opacity 0.3s ease; /* 페이드 인/아웃 효과 적용 */
}

.image-container:hover .modal-button {
  opacity: 1; /* 호버 시 버튼 표시 */
  z-index: 2;
}
.scroll-container {
  position: relative;
  overflow-x: scroll;
  white-space: nowrap;
}

.scroll-content {
  display: inline-block;
}
</style>
