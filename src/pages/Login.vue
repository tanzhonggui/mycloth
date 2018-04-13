<template>
  <div class="login-container">
    <div class="login-wrap">
      <div class="login-left-part">
        <img class="left-part-img" src="../../static/images/login-bg-backstage1.jpg">
      </div>
      <div class="login-right-part">
        <div class="login-title-wrap">
          <p class="login-title-text">用户登录</p>
          <div class="login-title-line"></div>
        </div>
        <form name="loginForm" class="form clearfix">
            <div class="input-item">
                <i class="icon icon-phone"></i>
                <div ui="type:text;id:mobile" class="inp-wrapper clearfix">
                    <input name="mobile" placeholder="请输入用户名" class="phone-num">
                </div>
            </div>
            <div class="input-item">
                <i class="icon icon-password"></i>
                <div ui="type:text;id:password;" class="inp-wrapper clearfix">
                    <input type="text" placeholder="输入验证码" class="identify-code">
                </div>
                <p class="getCode-wrap">
                    <input ui="type:button;id:send-captcha;" value="获取验证码" type="button" class="getCode">
                </p>
            </div>
            <div class="icon-error ui-hide" id="error"></div>
            <input ui="type:button;id:login-btn;" value="登录" type="button" class="btn-login">
        </form>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Login',
  components: {},
  data() {
    return {
      mobile: '',
      code: '',
      uuid: '',
      codeMsg: '获取验证码',
      bottomLogoIsShow: true,
    };
  },
  methods: {

  }
}
</script>

<style >

* {
    margin: 0;
    padding: 0;
}

.ui-text {
    width: auto !important;
    height: auto !important;
}
.ui-input {
    display: block !important;
}
.ui-placeholder {
    line-height: 21px;
    height: 100%;
    vertical-align: middle;
}
/*后台登陆页*/

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F2F6FF;
}

.login-wrap {
  display: flex;
  width: 900px;
  height: 500px;
  box-shadow: 0 10px 14px 0 #D6DDEF;
}

.login-left-part {
  background: #0A388E;
}

.left-part-img {
  /* padding-left: 20px;
  padding-top: 20px; */
  height: 500px;
  width: 530px;
}

.login-right-part {
  display: flex;
  flex-direction: column;
  padding: 0 45px;
  width: 350px;
  background: #fff;
}

.font-size-16 {
  font-size: 16px;
  background: #0A388E;
}

.login-title-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
    margin-bottom: 64px;
}

.login-title-text {
    font-size: 28px;
    color: #3076FC;
    text-align: center;
    font-weight: bold;
    height: 40px;
}

.login-title-line {
    width: 40px;
    height: 4px;
    background: #3076FC;
    margin-top: 10px;
}

.input-item {
    position: relative;
    margin-bottom: 20px;
    border: 1px solid #E6E6E6;
    width: 260px;
}
.inp-wrapper{
    font-size: 16px;
    position: relative;
    margin: 10px;
    margin-left: 30px !important;
    line-height: 21px !important;
    border-width: 0px !important;
    font-size: 16px;
    height: 21px !important;
}
.inp-wrapper input {
    border-width: 0px !important;
}

.inp-wrapper input::placeholder {
    color: #C0CCDA;
}

.btn-login {
    display: inline-block;
    background: #3076FC;
    border-radius: 4px;
    height: 44px;
    width: 260px;
    line-height: 44px;
    cursor: pointer;
    text-align: center;
    margin-top: 30px;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 2px;
}

i.icon {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
    vertical-align: middle;
    width:20px;
    height:20px;

}
.icon-phone {
    background: url(../../static/images/icon-phone.png) no-repeat;
}

.icon-password {
    background: url(../../static/images/icon-password.png) no-repeat;
}

.getCode {
    font-size: 14px;
    color: #3076FC;
    cursor: pointer;
    border: none;
    background: #fff;
}

.getCode-wrap {
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;
    padding-left: 10px;
    margin: 0px 0px 10px;
    border-left: 1px solid #acbaca;
}

.icon-error {
    position: absolute;
    background: url(../../static/images/icon_error.png) no-repeat left center;
    padding-left: 20px;
    color: #D0021B;
    margin-top: 5px;
}
</style>
