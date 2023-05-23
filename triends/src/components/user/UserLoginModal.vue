<template>
  <div>
    <span v-b-modal.modal-prevent-closing>로그인</span>
    <b-modal id="modal-prevent-closing" ref="modal" title="로그인" @ok="confirm">
      <form ref="form">
        <b-form-group label="아이디" label-for="id-input" invalid-feedback="id is required">
          <b-form-input id="id-input" v-model="user.userId" required></b-form-input>
        </b-form-group>
      </form>
      <form ref="form">
        <b-form-group
          label="비밀번호"
          form="password"
          label-for="pwd-input"
          invalid-feedback="password is required"
        >
          <b-form-input id="pwd-input" v-model="user.userPwd" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const memberStore = "userStore";

export default {
  name: "UserLoginModal",
  data() {
    return {
      user: {
        userId: "",
        userPwd: "",
      },
    };
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    async confirm() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      console.log("token >> " + token);
      if (this.isLogin) {
        await this.getUserInfo(token);
        console.log("userInfo :: ", this.userInfo);
        this.$router.push({ name: "main" });
      }
    },
    movePage() {
      this.$router.push({ name: "join" });
    },
  },
};
</script>

<style></style>
