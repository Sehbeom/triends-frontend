<template>
  <div class="header">
    <b-navbar toggleable="lg" variant="faded" type="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
            ><router-link :to="{ name: 'home' }" class="link"
              ><img
                src="@/assets/ssafy_logo.png"
                class="d-inline-block align-middle"
                width="100px"
                alt="ssafy" /></router-link
          ></b-nav-item>
          <b-nav-item href="#"
            ><router-link :to="{ name: 'notice' }" class="link"
              ><b-icon icon="house-fill" font-scale="1.5"></b-icon> 공지사항</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'recommand' }" class="link"
              ><b-icon icon="instagram" font-scale="1.5"></b-icon> 여행지추천</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'plan' }" class="link"
              ><b-icon icon="instagram" font-scale="1.5"></b-icon> 플랜짜기</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'myplan' }" class="link"
              ><b-icon icon="instagram" font-scale="1.5"></b-icon> 내 플랜</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'review' }" class="link"
              ><b-icon icon="truck" font-scale="1.5"></b-icon> 여행지 리뷰</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'mypage' }" class="link"
              ><b-icon icon="journal" font-scale="1.5"></b-icon> 마이페이지</router-link
            ></b-nav-item
          >
          <!-- </b-navbar-nav>
        <b-navbar-nav> -->
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-icon icon="people" font-scale="2"></b-icon>
            </template>
            <b-dropdown-item href="#"
              ><router-link :to="{ name: 'signUp' }" class="link"
                ><b-icon icon="person-circle"></b-icon> 회원가입</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#">
              <!-- <router-link :to="{ name: 'signIn' }" class="link"
                ><b-icon icon="key"></b-icon> 로그인</router-link> -->
              <user-login-modal />
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import UserLoginModal from "../user/UserLoginModal.vue";

export default {
  name: "HeaderNaviBar",
  components: {
    UserLoginModal,
  },
};
</script>

<style scoped lang="scss">
.navbar {
  background-color: #f2f0eb;
}
.navbar-nav {
  width: 1200px;
  flex-direction: row;
  justify-content: space-around;
}
::v-deep {
  .navbar-collapse {
    justify-content: center;
  }
}
</style>
