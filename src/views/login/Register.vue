<template>
  <div id="register">
    <div class="hi">Hi，欢迎注册</div>
    <div class="title">胃肠道疾病辅助诊疗系统</div>
    <div class="user">
      <div class="input">
        <div>请输入6-20位账号</div>
        <input
          type="text"
          class="username"
          name="username"
          v-model="username"
          placeholder=""
        />
        <div>请输入6-20位密码</div>
        <input
          type="password"
          class="password"
          name="password"
          v-model="password"
          value=""
          placeholder=""
        />
        <div>请再次输入密码</div>
        <input
          type="password"
          class="password"
          name="password"
          v-model="passwordagain"
          value=""
          placeholder=""
        />
      </div>
    </div>
    <div class="error-info">{{ this.error }}</div>
    <button class="login-btn" @click="registerClick">注册</button>
  </div>
</template>
  
<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      error: "",
      msg: "",
      passwordagain: "",
    };
  },
  methods: {
    registerClick() {
      if (
        this.username.length === 0 &&
        this.password.length === 0 &&
        this.passwordagain.length === 0
      ) {
        this.error = "请输入账号和密码";
      } else if (this.username.length < 6 || this.username.length > 20) {
        this.error = "账号请输入6-20位字符";
      } else if (this.password.length < 6 || this.password.length > 20) {
        this.error = "密码请输入6-20位字符";
      } else if (this.password !== this.passwordagain) {
        this.error = "两次密码不一致，请重新输入";
      } else {
        this.error = "";

        this.getMessage();
      }
    },
    getMessage() {
      const path = "http://10.102.32.67:5000/register";
      this.$axios
        .post(path, {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if(res.data === '注册成功')
              this.$router.replace("/login").catch((err) => err);
          
          this.error = res.data
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
  
<style scoped>
#register {
  width: 350px;
  height: 500px;
  position: relative;
  margin: auto;
  margin-top: 8%;
  font-size: 14px;
  background-color: #fff;
}

.title {
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
  color: var(--color-high-text);
}

.user {
  width: 350px;
  height: 300px;

  box-shadow: 0 0 5px #999;
  margin: 20px 0 10px;
  position: relative;
}
.user .input {
  width: 280px;
  height: 250px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 10px;
}

.user input {
  width: 100%;
  height: 30px;
  margin: 10px 0 15px;
  color: #999;
  font-size: 12px;
}
.user .forget {
  position: absolute;
  font-size: 13px;
  right: 30px;
  color: var(--color-high-text);
}
.user .register {
  position: absolute;
  font-size: 13px;
  right: 0;
  color: var(--color-high-text);
}

.user .forget:hover,
.user .register:hover {
  font-weight: bold;
}
.error-info {
  text-align: center;
  color: var(--color-high-text);
  margin-bottom: 5px;
  height: 15px;
  font-size: 12px;
}
.login-btn {
  width: 350px;
  height: 35px;
  background-color: var(--color-tint);
  border: none;
  outline: none;
  border-radius: 15px;
  color: #fff;
  font-size: 16px;
}
</style>