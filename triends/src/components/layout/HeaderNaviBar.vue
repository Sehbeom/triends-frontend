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
                  <div class="notification-dropdown-text" v-b-modal.modal-center>
                    <span>{{ notification.additionalInfo + notificationSentences[notification.notificationType] }}</span>
                    <notification-info-modal :id="notification.notificationId" />
                  </div>
                  <div class="notification-dropdown-btns">
                    <b-button size="sm" variant="success">수락</b-button>
                    <b-button size="sm" variant="danger" @click="refuse(notification.notificationId)">거절</b-button>
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
import { getNotificationList, refuseNotification } from "@/apis/notification";

import { mapState } from "vuex";

const userStore = "userStore";

export default {
  name: "HeaderNaviBar",
  components: {
    UserLoginModal,
  },
  computed: {
    ...mapState(userStore, ["isLogin", "userInfo"]),
  },
  created() {
    if (this.isLogin) {
      getNotificationList(
        this.userInfo.userId,
        ({data}) => {
          this.notifications = data.data;
          if (this.notifications.length > 0) {
            this.notificationClicked = false;
          } else {
            this.notificationClicked = true;
          }
        },
        ({error}) => {
          console.log(error);
        }
      )
    }
  },
  data() {
    return {
      notifications: [],
      notificationClicked: true,
      notificationSentences: {
        "friend": "님이 친구 요청을 보냈습니다.",
        "plan": "여행 플랜에 초대되었습니다."
      }
    }
  },
  methods: {
    notificationClick: function () {
      this.notificationClicked = true;
    },
    refuse: function(notificationId) {
      refuseNotification(notificationId);
    }
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
  width: 500px;
  max-height: 300px;
  overflow: scroll;
}

::-webkit-scrollbar {
  width: 10px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background-color: transparent; 
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1); 
  border-radius: 5px;
  transition: background-color 3s ease-out;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.6); 
  transition: background-color 3s ease-out;
}

::v-deep{
.dropdown .dropdown-menu {
  --bs-dropdown-padding-y: 0 !important;
}
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
