<template>
  <div class="header">
    <div class="header-content">
      <router-link :to="{ name: 'home' }" class="link">
        <img
          src="@/assets/icons/triend_logo.png"
          class="d-inline-block align-middle"
          width="200px"
          alt="ssafy"
        />
      </router-link>
      <div class="header-right">
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Bust%20in%20Silhouette.png"
          alt="Bust in Silhouette"
          width="50"
          height="50"
        />
        <div v-if="user == null">
          <b-dropdown text="회원가입" right>
            <b-dropdown-item href="#">
              <router-link :to="{ name: 'signUp' }" class="link">
                <b-icon icon="person-circle"></b-icon> 회원가입
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <user-login-modal />
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <div v-else>
          <b-dropdown text="마이페이지" right>
            <b-dropdown-item href="#">
              <router-link :to="{ name: 'mypage' }" class="link">
                <b-icon icon="person-circle"></b-icon> 내정보
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#" @click="logout()">
              <b-icon icon="person-circle"></b-icon> 로그아웃
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserLoginModal from "../user/UserLoginModal.vue";

export default {
  name: "HeaderNaviBar",
  components: {
    UserLoginModal,
  },
  data() {
    return {
      user: sessionStorage.getItem("userid"),
    };
  },
  methods: {
    logout() {
      console.log(sessionStorage.getItem("userid"));
      sessionStorage.clear();
      window.location.href = `${window.location.href}`;
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  width: 100vw;
  min-width: 1000px;
  height: 110px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0px;
  background-color: white;
  border-bottom: solid 1px;
  z-index: 10;
}
.header-content {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-right {
  display: flex;
  align-items: center;
}
</style>
