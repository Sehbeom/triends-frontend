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
                v-model="user.userid"
                required
                placeholder="아이디 입력...."
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="비밀번호" label-for="userpwd" class="input-form">
              <b-form-input
                type="password"
                id="userpwd"
                v-model="user.userpwd"
                required
                placeholder="비밀번호 입력...."
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="이름" label-for="username" class="input-form">
              <b-form-input
                id="username"
                v-model="user.username"
                required
                placeholder="이름"
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="전화번호" label-for="usertel" class="input-form">
              <b-form-input
                id="usertel"
                v-model="user.usertel"
                required
                placeholder="010-0000-0000"
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="이메일" label-for="useremail" class="input-form">
              <b-form-input
                id="useremail"
                v-model="user.useremail"
                required
                placeholder="example@ex.ex"
                @keyup.enter="confirm"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="프로필 이미지" label-for="userprifile" class="input-form">
              <b-form-input
                id="userprifile"
                v-model="user.userprofile"
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
import http from "@/util/http-common";
export default {
  name: "UserRegister",
  data() {
    return {
      isLoginError: false,
      user: {
        userid: "",
        userpwd: "",
        username: "",
        usertel: "",
        useremail: "",
        userprofile: "",
      },
      preferenceIds: [],
      options: [
        { text: "관광지", value: "12" },
        { text: "문화시설", value: "14" },
        { text: "축제공연행사", value: "15" },
        { text: "여행코스", value: "25" },
        { text: "레포츠", value: "28" },
        { text: "숙박", value: "32" },
        { text: "쇼핑", value: "38" },
        { text: "음식점", value: "39" },
      ],
    };
  },
  methods: {
    confirm() {
      if (!this.user.userid) alert("아이디를 입력해주세요");
      else if (!this.user.userpwd) alert("이름을 입력해주세요");
      else if (!this.user.username) alert("비밀번호를 입력해주세요");
      else if (!this.user.useremail) alert("이메일을 입력해주세요");
      else {
        let loginform = {
          id: this.user.userid,
          password: this.user.userpwd,
          name: this.user.username,
          email: this.user.useremail,
        };
        console.log(loginform);
        http.post("user", JSON.stringify(loginform)).then(({ data }) => {
          console.log(data.data[data.data.length - 1].userId);
          sessionStorage.setItem("userid", data.data[data.data.length - 1].userId);
          this.$router.push({ name: "preference" });
        });
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
