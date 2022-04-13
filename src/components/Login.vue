<template>
  <div id="pageWrapper">
    <div class="logo">
      <img id="logo" src="../../public/logo.png" alt="" />
      <h1>柠檬记账</h1>
    </div>

    <div class="auth">
      <label>
        <input v-model="username" type="text" placeholder="账号" />
        <span class="notice">2-20位，只能包含汉字/数字/字母和下划线</span>
      </label>
      <label
        ><input type="password" v-model="password" placeholder="密码" />
        <span class="notice">长度 6-20位, 至少包含数字和英文</span></label
      >
    </div>
    <div class="actions">
      <button id="login">登录</button>
      <button id="register">注册</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  username = "";
  password = "";
}
</script>

<style scoped lang="scss">
@import "./src/assets/style/helper";

#pageWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.logo {
  width: 100%;
  max-height: 40%;
  min-height: 40%;
  text-align: center;
  font: $font-hei;
  font-size: 1.5rem;

  & #logo {
    margin-top: 20vh;
    width: 5rem;
    height: 5rem;
  }
}

.auth {
  width: 100%;
  max-height: 30%;
  min-height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & label {
    width: 80%;

    & input {
      width: 100%;
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 0.7rem;
    }

    & .notice {
      margin-top: 0.5rem;
      color: red;
      text-align: center;
      opacity: 0;
    }

    & .notice.show {
      opacity: 1;
    }
  }
}

.actions {
  width: 100%;
  max-height: 30%;
  min-height: 30%;
  margin-top: -10vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  & button {
    margin-top: 25px;
    width: 80%;
    border-radius: 8px;
    padding: 0.5rem;
  }

  #login {
    border: none;
    background: $color-theme;
  }

  #register {
    border: 1px solid #999;
    background: white;
  }
}
</style>
