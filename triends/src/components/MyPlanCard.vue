<template>
  <div class="plan-link">
    <div class="plan-container">
      <div class="image-container">
        <img :src="item.thumbnail" alt="" class="plan-img" />
      </div>
      <div class="plan-data" :style="{ 'background-color': color }">
        <div class="plan-header" @click="test">
          <span class="plan-title">{{ item.title }}</span>
          <span class="plan-date">{{
            item.startDate + "~" + item.endDate
          }}</span>
        </div>
        <div class="plan-button" @click="$bvModal.show(item.planId)">
          <span>{{ planDetail.memberInfo.length }}명이 함께하고 있어요!</span>
          <div class="invite">친구 초대!</div>
        </div>
      </div>
    </div>
    <b-modal :id="item.planId" title="BootstrapVue">
      <h3>내 친구 목록</h3>
      <div class="friend-container">
        <div
          v-for="friend in planDetail.memberInfo"
          :key="friend.userId"
          class="friend"
        >
          <div class="friend-info">
            <img :src="icon" alt="" class="friend-img" />
            <div>
              <span>{{ friend.name }}</span>
            </div>
          </div>
          <b-button
            variant="outline-primary"
            @click="inviteFriend(friend.userId)"
            >친구 초대</b-button
          >
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { selectRandomColor } from "@/util/color-util";
import { getPlanDetail } from "@/apis/plan";
import { mapActions, mapState } from "vuex";
import icon from "@/assets/icons/defaultprofile.png";
import { sendPlanInvitation } from "@/apis/notification";
// import plan from "@/router/plan";

const planDraftStore = "planDraftStore";
const userStore = "userStore";

export default {
  name: "MyPlanCard",
  props: { item: {} },
  data() {
    return {
      color: selectRandomColor(),
      planDetail: {},
      icon: icon,
    };
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(planDraftStore, ["setModeUpdate", "createPlan"]),
    async test() {
      confirm("선택하신 플랜을 편집하시겠습니까?");
      this.createPlan(this.userInfo.userId);
      this.setModeUpdate(this.planDetail);
      this.$router.push({ name: "plan" });
    },
    async inviteFriend(receiverId) {
      await sendPlanInvitation(
        this.userInfo.userId,
        receiverId,
        this.planDetail.planId,
        ({ data }) => {
          if (data.message === "플랜 멤버 초대가 완료되었습니다.") {
            alert("친구가 정상적으로 초대되었습니다");
          } else {
            this.$router.push({ name: "error" });
          }
        },
        () => {
          this.$router.push({ name: "error" });
        }
      );
    },
  },
  created() {
    getPlanDetail(
      this.item.planId,
      ({ data }) => {
        this.planDetail = data.data;
      },
      () => {
        this.$router.push({ name: "error" });
      }
    );
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.plan-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 15vw;
  margin-bottom: 30px;
  border-radius: 15px;
  min-width: 500px;
  min-height: 300px;
}
.plan-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.image-container {
  width: 45%;
  height: 100%;
}
.plan-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.plan-button > span:hover {
  color: blue;
}
.plan-data {
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px 10px 10px 10px;
  width: 55%;
  height: 100%;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: solid 3px black;
}
.plan-title {
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
}
.plan-date {
  width: 100%;
  font-size: 1.5rem;
}
.plan-button {
  margin-top: 2vw;
  text-align: right;
}

.invite {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border: solid 2px;
  padding-right: 5px;
}
.friend-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.friend-img {
  width: 50px;
  object-fit: cover;
}
.friend {
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.friend-info {
  display: flex;
}
</style>
