<template>
  <div>

    <div class="page_title_bg">
        <div class="container">
        <div class="row">
            <div class="col-xl-12 col-xs-12 donation_clearification_header text-center">
                <p class="donation_clearification_title">contact us</p>
                <p class="white-bar"></p>
                <p class="donation_clearification_text">Home / Contact Us</p>
            </div>
        </div>
        </div>
    </div>

    <div class="contact_body_bg">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-12 text-center">
                    <div class="leave_message_title">
                        LEAVE US A MESSAGE
                        <p class="grey-bar"></p>
                    </div>
                </div>
              
                <div class="col-xl-4 col-12 mb-5">
                    <div class="address_bg">
                        <table class="contact_us_address_area">
                            <tr>
                                <td class="contact_address_icon"><img src="/assets/images/icon/contact_address.webp" alt="address"></td>
                                <td class="contact_address_title">Location:</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="contact_address">House: 13 (1st floor), Road: 2/B,
                                    Pallabi R/A, Mirpur,Dhaka- 1216</td>
                            </tr>
                            <tr>
                                <td class="contact_address_icon"><img src="/assets/images/icon/contact_telephone.webp" alt="address"></td>
                                <td class="contact_phone_title">Call Us:</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="contact_phone">+880 1878116234</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="col-xl-8 col-12 text-center">
                    <form action="">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                              <input type="text" class="form-control contact_form_bg" placeholder="Name">
                            </div>
                            <div class="form-group col-md-6">
                              <input type="text" class="form-control contact_form_bg" placeholder="Email">
                            </div>
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control contact_form_bg" placeholder="Subject">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control contact_form_bg" rows="5" placeholder="Your Message"></textarea>
                        </div>
    
                        <div class="col-xl-12 col-12 text-center">
                            <div class="human_verification"><img src="/assets/images/AllLogin/google_capture.webp" alt="human-verification"></div>
                        </div>
                        <div class="col-xl-12 text-center d-flex justify-content-center">
                            <button class="btn forget-btn contact_btn">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
