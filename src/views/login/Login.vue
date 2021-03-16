<template>
  <div id="login">
    <div class="hi">Hi，欢迎登录</div>
    <div class="title">胃窥镜图像疾病分割系统</div>
    <div class="user">
      <div class="input">
        <div>账号</div>
        <input
          type="text"
          class="username"
          name="username"
          v-model="username"
          placeholder="请输入用户名、手机或邮箱"
        />
        <div>密码</div>
        <input
          type="password"
          class="password"
          name="password"
          v-model="password"
          value=""
          placeholder="请输入密码"
        />
        <div>
          <a href="#" class="forget">忘记密码？</a>
          <a class="register" href="#">注册</a>
        </div>
      </div>
    </div>
    <div class="error-info">{{ this.error }}</div>
    <button class="login-btn" @click="loginClick">登录</button>
    
  </div>
</template>
  
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      error: "",
      msg: "",

    };
  },
 
  methods: {
    loginClick() {
      if (this.username.length === 0 && this.password.length === 0) {
        this.error = "请输入账号和密码";
      } else if (this.username.length < 6 || this.username.length > 20) {
        this.error = "账号请输入6-20位字符";
      } else if (this.password.length < 6 || this.password.length > 20) {
        this.error = "密码请输入6-20位字符";
      } else {
        this.error = "";

        this.getMessage();
        
      }
    },

    getMessage() {
      const path = "http://localhost:5000/login";
      this.$axios.post(path, {
        username: this.username,
        password: this.password,
    }).then((res) => {
        if(res.data.token && res.data.token == this.username) {
          // this.$store.commit('changeLogin',res.data.token)
          this.$store.commit('changeLogin',{ Authorization: res.data.token })
          this.$router.replace("/home").catch((err) => err);
        } else {
          alert('账号或密码错误，请重新输入')
        }
        }).catch((error) => {
          console.log(error)
        });
    },
  },
};
</script>
  
<style scoped>
#login {
  width: 350px;
  height: 350px;
  position: relative;
  margin: auto;
  margin-top: 12%;
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
  height: 220px;
  box-shadow: 0 0 5px #999;
  margin: 20px 0 10px;
  position: relative;
}
.user .input {
  width: 280px;
  height: 200px;
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