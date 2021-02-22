<template>
  <div>
    <!--donation page start -->
<div class="container">
    <div class="row">
<div class="offset-md-1 col-md-3 col-xs-12">
<div class="donate-left-section">
    <img src="/assets/images/donation/left-section-image.webp" alt="donate-left-image">
    <p>We are a non-profit and non-corporate
        foundation. We hold many campaigns to help the under privileged. Some of our programs consist of making hospital for covid patients,
         one taka meal and getting warm clothes to the people who cannot afford them. We strictly run our missions on donations from the
          kind people that help us. We humbly ask for your donations so that we can fulfill these
        missions. So, will lend a hand?</p>
</div>
    </div>

    <div class="col-md-7 offset-md-1 col-xs-12">
        <p class="donate-title">DONATE NOW </p>
        <ul class="onetime-or-month">
            <li>  <input type="radio" name=""> ONE TIME</li>
            <li>  <input type="radio" name=""> MONTHLY </li>
        </ul> 
        <div class="row">
            <div class="col-md-4 col-4 p-1">
                <p class="price-value">৳ 95,000</p>
            </div>
            <div class="col-md-4 col-4 p-1">
                <p class="price-value"> ৳ 70,000</p>
            </div>
            <div class="col-md-4 col-4 p-1">
                <p class="price-value">৳ 30,000</p>
            </div>
        

    <div class="col-md-4 col-4 p-1">
        <p class="price-value">৳ 30,000</p>
    </div>
    <div class="col-md-8 col-8 p-1">
       <input type="text" placeholder="OTHER AMOUNT" name="" class="customer-donation-input customer-donation">
    </div>
</div>
<div class="chose-payment">
    <p><span style="font-size: 22px; font-weight: 600; margin-right:2rem; ">Choose Payment </span> <span> <img src="/assets/images/icon/lock.webp" alt="secure"> SECURE</span> </p>
</div>

<button class="btn pay-with-btn">Pay With Card/Mobile Banking/Bank Transfer </button>

<router-link to="/bankinfo" class="btn pay-with-btn additional_bank mt-2 ">Additional Bank Information</router-link>

    </div> <!--col-md-7 end-->
</div>




</div> <!--container section-->

<div class="donation-payment-option">
    <picture>
        <source media="(min-width:650px)" srcset="/assets/images/donation/donation-payment-option.webp">
        <source media="(min-width:465px)" srcset="/assets/images/donation/donate_payment_mobile.webp">
        <img src="/assets/images/donation/donate_payment_mobile.webp" alt="Flowers" style="width:100%;">
      </picture>
</div>

<!--donation page end -->
  </div>
</template>

<script>
  export default {
    name: 'Donate'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
