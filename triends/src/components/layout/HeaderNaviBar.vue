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
        <div v-if="!isLogin">
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Bust%20in%20Silhouette.png"
            alt="Bust in Silhouette"
            width="50"
            height="50"
            class="person-img"
          />
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
          <b-dropdown
            class="p-0 m-0"
            size="lg"
            variant="link"
            dropright
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <div
                :class="
                  notificationClicked
                    ? 'notification'
                    : 'notification alarmanimation'
                "
                @click="notificationClick"
              >
                <div class="reddot" v-if="notifications.length"></div>
                <img
                  src="../../assets/icons/notification.png"
                  width="40"
                  height="40"
                />
              </div>
            </template>
            <div class="notification-dropdown">
              <div
                class="notification-dropdown-onenoti"
                v-for="(notification, index) in notifications"
                :key="notification.notificationId"
              >
                <div class="notification-dropdown-onenoti-contents">
                  <div class="notification-dropdown-text">
                    <span>{{ notification.content }}</span>
                  </div>
                  <div class="notification-dropdown-btns">
                    <b-button size="sm" variant="success">수락</b-button>
                    <b-button size="sm" variant="danger">거절</b-button>
                  </div>
                </div>
                <div
                  class="notification-dropdown-divider"
                  v-if="index < notifications.length - 1"
                ></div>
              </div>
            </div>
          </b-dropdown>
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Raising%20Hand.png"
            alt="Man Raising Hand"
            width="50"
            height="50"
            class="person-img"
          />
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

import { mapState } from "vuex";

const userStore = "userStore";

export default {
  name: "HeaderNaviBar",
  components: {
    UserLoginModal,
  },
  computed: {
    ...mapState(userStore, ["isLogin"]),
  },
  created() {
    this.notifications = [
      {
        notificationId: 1,
        content: "전상호섹시가이님이 친구 요청을 보냈습니다.",
      },
      {
        notificationId: 2,
        content: "신우종폼미쳐타이님이 친구 요청을 보냈습니다.",
      },
      {
        notificationId: 3,
        content: "즐거운 일본 여행 플랜에 초대되었습니다.",
      },
      {
        notificationId: 4,
        content: "제발 보내줘 기막힌 휴양지 여행 플랜에 초대되었습니다.",
      },
      {
        notificationId: 5,
        content: "troment님이 친구 요청을 보냈습니다.",
      },
      {
        notificationId: 5,
        content: "troment님이 친구 요청을 보냈습니다.",
      },
    ];

    if (this.notifications.length) {
      this.notificationClicked = false;
    } else {
      this.notificationClicked = true;
    }
  },
  data() {
    return {
      notifications: [],
      notificationClicked: false,
    };
  },
  methods: {
    notificationClick: function () {
      this.notificationClicked = true;
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

.notification {
  position: relative;
  cursor: pointer;
}

.alarmanimation {
  animation: rotate_image 1.5s linear infinite;
  transform-origin: 50% 50%;
}

@keyframes rotate_image {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(15deg);
  }
  20% {
    transform: rotate(-15deg);
  }
  30% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.notification-dropdown {
  width: 450px;
  max-height: 300px;
  overflow: scroll;
}

.dropdown .dropdown-menu {
  --bs-dropdown-padding-y: 0 !important;
  /* padding-top: 0 !important;
  padding-bottom: 0 !important; */
}

.notification-dropdown-divider {
  width: 100%;
  border: solid 0.5px gray;
}

.notification-dropdown-onenoti {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.notification-dropdown-onenoti-contents {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
}

.notification-dropdown-text {
  width: 330px;
}

.notification-dropdown-btns {
  width: 100px;
  display: flex;
  justify-content: space-between;
}

.reddot {
  position: absolute;

  background-color: red;
  width: 9px;
  height: 9px;
  border: solid 0px;
  border-radius: 100%;

  top: 7px;
  right: 8px;
}
.person-img {
  margin-right: 10px;
}
</style>
