<template>
  <div>
    <div class="page_title_bg">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-xs-12 donation_clearification_header text-center">
                    <p class="donation_clearification_title">Sign In</p>
                    <p class="white-bar"></p>
                    <p class="donation_clearification_text">Home / Sign In</p>
                </div>
            </div>
        </div>
    </div>
    <div class="all_login_bg forget_password">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 text-center d-flex mobile_p0 justify-content-center">

                    <form action="" class="form_block request_block">
                        <input type="text" placeholder="Enter your Email" class="form-control sing_in_input">
                        <input type="text" placeholder="Enter Your Password" class="form-control sing_in_input">
                       <p><input type="checkbox"> <span>Remember Me</span>  </p>
                        <button class="btn signIn_btn">SIGN IN</button>

                        <a href="" class="btn google_btn"><img src="/assets/images/AllLogin/gooogle_icon.webp" alt="google-icon"> SIGN IN WITH GOOGLE</a>
                        <router-link to="/forgot-password" class="forget_password_link"><u>Forgot Password</u></router-link>
                    </form>


                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignIn'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
