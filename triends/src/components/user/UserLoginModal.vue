<template>
  <div>
    <span v-b-modal.modal-prevent-closing>로그인</span>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="로그인"
      @ok="handleOk"
    >
      <form ref="form">
        <b-form-group
          label="아이디"
          label-for="id-input"
          invalid-feedback="id is required"
        >
          <b-form-input
            id="id-input"
            v-model="user.userid"
            required
          ></b-form-input>
        </b-form-group>
      </form>
      <form ref="form">
        <b-form-group
          label="비밀번호"
          form="password"
          label-for="pwd-input"
          invalid-feedback="password is required"
        >
          <b-form-input
            id="pwd-input"
            v-model="user.userpwd"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import http from "@/util/http-common";
import { formToJSON } from 'axios';
export default {
  name: "UserLoginModal",
  data() {
    return {
      user: {
        userid: "",
        userpwd: "",
      },
    };
  },
  methods:{
    handleOk(){
      let form = new FormData();
      form.append('userId', this.user.userid)
      form.append('userPwd',this.user.userpwd)
      console.log(formToJSON(form));

      let map={userId:this.user.userid, userPwd:this.user.userpwd}
      console.log(map);
     
      // http.post("/user/login", JSON.stringify(map)).then(({data})=>{
      //   console.log(form);
      //   console.log(data);
      //   sessionStorage.setItem('userid',map.userId);
      // });
      http.post("user/login", JSON.stringify({userId:this.user.userid, userPwd:this.user.userpwd}))
      .then(({data})=>{
        console.log(data);
      })
    }
  }
};
</script>

<style></style>
