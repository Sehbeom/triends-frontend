<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>회원가입</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8" align="center" class="register-form">
        <b-card class="text-center mt-3" style="max-width: 40rem" align="center">
          <b-form class="text-left">
            <!-- <b-alert show variant="danger" v-if="isLoginError"
              >아이디 또는 비밀번호를 확인하세요.</b-alert
            > -->
            <b-form-group label="아이디" label-for="userid" class="input-form">
              <b-form-input
                id="userid"
                v-model="user.id"
                required
                placeholder="아이디 입력...."
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="비밀번호" label-for="userpwd" class="input-form">
              <b-form-input
                type="password"
                id="userpwd"
                v-model="user.password"
                required
                placeholder="비밀번호 입력...."
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="이름" label-for="username" class="input-form">
              <b-form-input
                id="username"
                v-model="user.name"
                required
                placeholder="이름"
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="전화번호" label-for="usertel" class="input-form">
              <b-form-input
                id="usertel"
                v-model="user.tel"
                required
                placeholder="010-0000-0000"
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="이메일" label-for="useremail" class="input-form">
              <b-form-input
                id="useremail"
                v-model="user.email"
                required
                placeholder="example@ex.ex"
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="프로필 이미지" label-for="userprifile" class="input-form">
              <b-form-input
                id="userprifile"
                v-model="user.profileimg"
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>

            <b-button type="button" variant="primary" class="m-1" @click="confirm"
              >회원가입</b-button
            >
            <b-button type="button" variant="success" class="m-1" @click="movePage">취소</b-button>
          </b-form>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";

const userStore = "userStore";

export default {
  name: "UserRegister",
  data() {
    return {
      isLoginError: false,
      user: {
        id: "",
        password: "",
        name: "",
        tel: "",
        profileimg: "",
        email: "",
      },
    };
  },
  methods: {
    ...mapActions(userStore, ["joinWithUserConfirm"]),
    confirm() {
      if (!this.user.id) alert("아이디를 입력해주세요");
      else if (!this.user.password) alert("이름을 입력해주세요");
      else if (!this.user.name) alert("비밀번호를 입력해주세요");
      else if (!this.user.email) alert("이메일을 입력해주세요");
      else {
        let payload = {
          user: this.user,
          router: this.$router
        }
        this.joinWithUserConfirm(payload);
      }
    },
    movePage() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style>
.register-form {
  margin-bottom: 5vh;
}
.input-form {
  text-align: left;
  margin-bottom: 2vh;
}
</style>
