<template>
  <div>
    <page-button-header />
    <article-layout>
      <div class="wholecontainer">
        <div class="innercontainer">
          <div class="oneinput">
            <p>아이디</p>
            <b-form-input v-model="userInfoData.id" readonly />
          </div>
          <div class="oneinput">
            <p>이름</p>
            <b-form-input v-if="!editMode" v-model="userInfoData.name" placeholder="이름" ref="name" readonly />
            <b-form-input v-else v-model="userInfoData.name" placeholder="이름" ref="name" />
          </div>
          <div class="oneinput">
            <p>연락처</p>
            <b-form-input v-if="!editMode" v-model="userInfoData.tel" placeholder="연락처" ref="tel" readonly />
            <b-form-input v-else v-model="userInfoData.tel" placeholder="연락처" ref="tel" />
          </div>
          <div class="oneinput">
            <p>이메일</p>
            <b-form-input v-if="!editMode" v-model="userInfoData.email" placeholder="이메일" ref="email" readonly />
            <b-form-input v-else v-model="userInfoData.email" placeholder="이메일" ref="email" />
          </div>
          <b-button v-if="!editMode" squared variant="outline-secondary" size="lg" @click="changeEditMode">수정하기</b-button>
          <div v-else class="editmodebtn">
            <b-button squared variant="outline-success" size="lg" @click="update">저장하기</b-button>
            <b-button squared variant="outline-danger" size="lg" @click="changeEditMode">취소하기</b-button>
          </div>
          

        </div>
      </div>
      
    </article-layout>
  </div>
</template>

<script>
import ArticleLayout from '@/components/layout/ArticleLayout.vue';
import PageButtonHeader from '@/components/header/PageButtonHeader.vue';
// import { getFriends, getRecommendOfFriends, getRecommendOfPreference, sendFriendRequest, deleteFriend, searchFriend } from "@/apis/friends";
import { mapState, mapActions } from "vuex";

const userStore = "userStore";

export default {
  name: "MyPageView",
  components: {
    ArticleLayout,
    PageButtonHeader
  },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
  },
  created() {
    this.userInfoData = this.userInfo;
  },
  data() {
    return {
      userInfoData: {},
      editMode: false
    }
  },
  methods: {
    ...mapActions(userStore, ["updateUserInfo"]),
    update: function () {
      this.updateUserInfo(this.userInfoData);
      this.editMode = !this.editMode;
    },
    changeEditMode: function () {
      this.editMode = !this.editMode;
    }
  }
};
</script>

<style>
.wholecontainer {
  width: 100%;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.innercontainer {
  width: 80%;
  height: 100%;

  margin-bottom: 50px;
  /* border: solid 1px; */
}

.oneinput {
  width: 100%;
  height: 15vh;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  /* border: solid 1px; */

  margin-bottom: 30px;
}

.oneinput > p {
  font-size: 20px;
  font-weight: bold;

  margin-bottom: 0px;
  margin-left: 15px;
}

.btncontainer {
  width: 100%;
}

.editmodebtn > button {
  margin: 0px 20px;
}
</style>
