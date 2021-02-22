<template>
  <div>
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-xs-12">
                <div class="flood_releaf_video_embeded text-center">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe height="315" src="https://www.youtube.com/embed/4-ZN1RiMy_I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                </div>
            </div>

            <div class="col-xl-5 col-md-5 col-xs-12">
                <div class="flood_releaf_left_side">
                    <ul>
                        <li> <img src="/assets/images/icon/for_human.webp" alt="project-description">     For Human</li>
                        <li> <img src="/assets/images/icon/location.webp" alt="project-description">     Bangladesh</li>
                        <li> <img src="/assets/images/icon/users.webp" alt="project-description">     Emergency food supply to save lives</li>
                        <li> <img src="/assets/images/icon/land_line.webp" alt="project-description">     Largest food distribution charity
                            in Bangladesh</li>
                    </ul>
                </div>
            </div>
   
            <div class="col-md-7 col-xs-12">
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
                    <p><span style="font-size: 22px; font-weight: 600; margin-right:2rem; ">Choose Payment </span> <span> <img src="/assets/images/icon/lock.webp" alt="payment-secure"> SECURE</span> </p>
                </div>
        
                <button class="btn pay-with-btn">Pay With Card/Mobile Banking/Bank Transfer </button>
        
                <router-link to="/bankinfo" class="btn pay-with-btn additional_bank mt-2 ">Additional Bank Information</router-link>
            </div>
        </div>

        <div class="donation-payment-option">
            <picture>
              <source media="(max-width: 799px)" srcset="/assets/images/donation/donate_payment_mobile.webp">
              <source media="(min-width: 800px)" srcset="/assets/images/donation/donation-payment-option.webp">
              <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
            </picture>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="com-xl-12 col-xs-12">
                <div class="flood-relief-program-title">Flood Relief Program</div>
                <div class="grey-bar-align-left"></div>
                <div class="flood-relief-program-description">
                    As a part of emergency response, like every year, we are distributing food among the people in flood affected area. 
                    Every day, we are distributing cooked food and water purification tablet. Kurigram, Jamalpur, Nilphamari, 
                    Tangail and many other area have gone under water. So, please come forward and support them with relief.
                </div>
            </div>

            <div class="col-xl-3 col-xs-12">
                <button type="button" class="btn flood_releaf_donate_btn">donate now</button>
            </div>
            <div class="offset-xl-1"></div>

            <div class="col-xl-8 col-xs-12 flood_releaf_social_share_area">
                <div class="flood_releaf_social_share_icons">
                    <ul>
                        <li class="flood_releaf_social_share_title">shares:</li>
                        <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a href=""><i class="fas fa-envelope"></i> </a></li>
                        <li><a href=""><i class="fas fa-share-alt"></i> </a></li>
                        <li><a href=""><i class="fab fa-whatsapp"></i> </a></li>
                    </ul>
                </div>
            </div>
        </div>
    
        <div class="container mt-5 mb-2">
            <div class="row">
    <div class="col-md-12">
        <div class="flood-relief-program-title float-left">Our Activity</div>
    </div>
                <div class="col-md-2 col-6">
                    <ul class="page-menu">
                        <li class="explore_projects_hero">Explore Projects:</li>
                    </ul>
                </div>
    
                <div class="col-md-2 col-6">
                <ul class="page-menu">
                    <li><a href="#"> One Taka Meal</a></li>
                </ul>
            </div>
    
            <div class="col-md-2 col-6">
                <ul class="page-menu">
                    <li>
                      <router-link to="/floodrelief">Flood Relief Program</router-link>
                    </li>
                </ul>
            </div>
    
            <div class="col-md-2 col-6">
                <ul class="page-menu">
                    <li><a href="#"> Orphanage Center</a></li>
                  
                </ul>
            </div>
    
            <div class="col-md-2 col-6">
                <ul class="page-menu">
                    <li><a href="#"> One Taka Medical Aid</a></li>
              
                </ul>
            </div>
    
       
    
            <div class="col-md-2 col-6">
                <ul class="page-menu">
                    <li>
                      <router-link to="/explore-project">SEE MORE &#x27A4;</router-link></li>
                </ul>
            </div>
                </div>
            </div>



    </div>
  </div>
</template>

<script>
  export default {
    name: 'FloodRelief'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
