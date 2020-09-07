<template>
  <div class="login">
    <div class="bg">
      <div class="login-form">
        <van-cell-group class="login-group">
          <div class="username-box van-hairline--bottom">
            <van-icon class="username-icon" class-prefix="my-icon" name="username"></van-icon>
            <van-field
                class="username"
                v-model="username"
                clearable
                placeholder="请输入用户名"></van-field>
          </div>
          <div class="password-box van-hairline--bottom">
            <van-icon class="password-icon" class-prefix="my-icon" name="password"></van-icon>
            <van-field
                class="password"
                v-model="password"
                type="password"
                placeholder="请输入密码"></van-field>
          </div>
        </van-cell-group>
        <div class="login-button" @click="login">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'Login',
    data() {
      return {
        username : 'fatZe',
        password : '111111'
      }
    },
    methods: {
      login(){
        this.$router.push({path : '/user'})
      }
    }
  }
</script>

<style lang="less" scoped>
  .login {
    height: 100%;
    .bg {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;
      background: url('../../assets/bg.jpg') no-repeat 0 0;
      background-size: 100%;
      .login-form {
        width: 750px;
        height: 750px;
        background: #000;
        /*width: 80%;*/
        /*height: 200px;*/
        .username-icon, .password-icon {
          vertical-align: middle;
          font-size: 20px;
          color: #fff;
        }
        .username, .password {
          display: inline-block;
          vertical-align: middle;
          width: 275px;
          color: #fff;
        }
      }
      .login-group:after{
        border: none;
      }
      .login-button{
        margin-top: 20px;
        border-radius: 5px;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        color: #fff;
        background: linear-gradient(#f22f6b, #f85f33);
      }
    }
  }
</style>

<style lang="less">
  .login {
    .login-form {
      .van-cell-group, .username, .password {
        background: transparent;
        input{
          color: #fff;
        }
      }
      .van-field__left-icon {
        color: #fff;
      }
    }
  }
</style>
