<template>
  <article-layout>
    <b-carousel
        id="carousel-fade"
        v-model="slide"
        :interval="0"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        fade
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >

      <b-carousel-slide
        v-for="(preferenceInfo, index) in preferenceInfos" :key="index"
        :caption="preferenceInfo.description"
        >
        <template #img>
            <img
              :class="preferenceInfo.selected ? 'd-block img-fluid w-100 opacitydown' : 'd-block img-fluid w-100 opacityup'"
              :src="preferenceInfo.imgsrc"
              @click="changeSelected(preferenceInfo)"
              alt="image slot"
            >
            <div 
            v-if="preferenceInfo.selected"
            class="selectedtext carousel-caption"
            @click="changeSelected(preferenceInfo)"
            >
              <h1>선택되었어요!</h1>
              <img 
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Clapping%20Hands.png" 
              alt="Clapping Hands" 
              width="100" 
              height="100" />
            </div>
            <div 
            v-if="preferenceInfo.value == '39'"
            class="last">
              <b-button size="lg" variant="secondary" @click="confirm">시작하기</b-button>
            </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
    <b-modal v-model="modalShow" centered hide-footer hide-header>
      <div class="d-block text-center">
        <h3>좋아하는 여행지 유형을 선택해주세요!</h3>
      </div>
      <div class="modalbtn">
        <b-button class="mt-3" variant="outline-secondary" @click="modalHide">확인</b-button>
      </div>
      
    </b-modal>
  </article-layout>
</template>

<script>
import ArticleLayout from "../layout/ArticleLayout.vue";
import { registPreferences } from "@/apis/user";
import { mapState } from "vuex";
import citytourimg from "@/assets/preferenceimgs/citytour.jpg";
import cultureimg from "@/assets/preferenceimgs/culture.jpg";
import festivalimg from "@/assets/preferenceimgs/festival.jpg";
import foodimg from "@/assets/preferenceimgs/food.jpg";
import hocanceimg from "@/assets/preferenceimgs/hocance.jpg";
import leportsimg from "@/assets/preferenceimgs/leports.jpg";
import shoppingimg from "@/assets/preferenceimgs/shopping.jpg";
import sightseeingimg from "@/assets/preferenceimgs/sightseeing.jpg";

const userStore = "userStore";

export default {
  name: "UserPreference",
  components: {
    ArticleLayout
  },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
  },
  created() {
    this.modalShow = true;
  },
  data() {
    return {
      modalShow: false,
      preferenceInfos: [
        {
          description : "관광지 여행",
          imgsrc: sightseeingimg,
          selected: false,
          value : "12"
        },
        {
          description: "문화 여행",
          imgsrc: cultureimg,
          selected: false,
          value: "14"
        },
        {
          description: "축제•공연•행사 여행",
          imgsrc: festivalimg,
          selected: false,
          value: "15"
        },
        {
          description: "지역 투어 여행",
          imgsrc: citytourimg,
          selected: false,
          value: "25"
        },
        {
          description: "레포츠 여행",
          imgsrc: leportsimg,
          selected: false,
          value: "28"
        },
        {
          description: "호캉스 여행",
          imgsrc: hocanceimg,
          selected: false,
          value: "32"
        },
        {
          description: "쇼핑 여행",
          imgsrc: shoppingimg,
          selected: false,
          value: "38"
        },
        {
          description: "맛집 여행",
          imgsrc: foodimg,
          selected: false,
          value: "39"
        },
      ],
      slide: 0,
      sliding: null
    };
  },
  methods: {
    modalHide: function () {
      this.modalShow = false;
    },
    confirm: function () {
      let selectedPreferences = [];
      for (let p of this.preferenceInfos) {
        if (p.selected) {
          selectedPreferences.push(p.value);
        }
      }
      console.log(selectedPreferences)

      let param = {
        userId: this.userInfo.userId,
        preferenceIds: selectedPreferences
      };
      registPreferences(
        param,
        ({ data }) => {
          console.log("registed preferences : " + data.data);
        },
        ({ error }) => {
          console.log(error);
          this.$router.push({ name: "error" });
        }
      );
      this.$router.replace({ name: "home" });
    },
    changeSelected(preferenceInfo) {
      preferenceInfo.selected = !preferenceInfo.selected;
    },
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  },
};
</script>

<style>
.sr-only {
  display: none !important;
}

.opacityup {
  opacity: 1;
  cursor: pointer;
}

.opacitydown {
  opacity: 0.5;
}

.selectedtext {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.selectedtext > button {
  margin-top: 20px;
}

.carousel-caption {
  z-index: 98 !important;
}

.carousel-caption > h3 {
  margin-bottom: 15% !important;
}

.last {
  position: absolute;
  bottom: 7% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  z-index: 99;
}

.modalbtn {
  width: 100%;
  display: flex;
  justify-content: end;
}
</style>
