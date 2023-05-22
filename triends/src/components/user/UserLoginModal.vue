<template>
  <div>
    <span v-b-modal.modal-prevent-closing>로그인</span>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="로그인"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="아이디"
          label-for="id-input"
          invalid-feedback="id is required"
          :state="nameState"
        >
          <b-form-input
            id="id-input"
            v-model="user.userid"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="비밀번호"
          label-for="pwd-input"
          invalid-feedback="password is required"
          :state="nameState"
        >
          <b-form-input
            id="pwd-input"
            v-model="user.userpwd"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
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
};
</script>

<style></style>
