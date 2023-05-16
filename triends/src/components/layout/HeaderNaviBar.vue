<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <router-link to="/">
          <img
            src="@/assets/ssafy_logo.png"
            class="d-inline-block align-middle"
            width="100px"
            alt="ssafy"
          />
        </router-link>
      </b-navbar-brand>

     <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
            ><router-link :to="{ name: 'home' }" class="link"
              ><b-icon icon="house" font-scale="1.5"></b-icon> 홈</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'notice' }" class="link"
              ><b-icon icon="house-fill" font-scale="1.5"></b-icon> 공지사항</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'mypage' }" class="link"
              ><b-icon icon="journal" font-scale="1.5"></b-icon> 마이페이지</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'myplan' }" class="link"
              ><b-icon icon="instagram" font-scale="1.5"></b-icon> 내 플랜</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'recommand' }" class="link"
              ><b-icon icon="truck" font-scale="1.5"></b-icon> 여행지 추천</router-link
            ></b-nav-item
          >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-icon icon="people" font-scale="2"></b-icon>
            </template>
            <b-dropdown-item href="#"
              ><router-link :to="{ name: 'signUp' }" class="link"
                ><b-icon icon="person-circle"></b-icon> 회원가입</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><router-link :to="{ name: 'signIn' }" class="link"
                ><b-icon icon="key"></b-icon> 로그인</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderNaviBar",
};
</script>

<style></style>
