<template>
  <div>
    <!-- donation clearification header area start -->
    <div class="page_title_bg">
        <div class="container"> 
        <div class="row">
            <div class="col-xl-12 col-xs-12 donation_clearification_header text-center">
                <p class="donation_clearification_title">Donation Clarification Form</p>
                <p class="white-bar"></p>
                <p class="donation_clearification_text">Home / Donation Clarification Form</p>
            </div>
            </div>
        </div>
    </div>
    <!-- donation clearification header area end -->

    <!-- donation clearification form area end -->
    <div class="all_login_bg donation_clearification_block">
        <div class="container">
           <form action="">
                <div class="row">
                    <div class="col-xl-6 col-xs-6 pl-4 pr-4">
                        <div class="form-group">
                            <label ><span class="required-items">Amount *</span></label>
                            <input type="text" class="form-control from-control-custom" placeholder="Enter Amount in English" alt="amount">
                          </div>
                          
                          <div class="form-group">
                              <label ><span class="required-items">Email *</span></label>
                              <input type="text" class="form-control from-control-custom" placeholder="Enter Your Email" alt="email">
                          </div>
      
                          
                          <div class="form-group">
                              <label ><span class="required-items">Donation Reason *</span></label>
                              <select class="form-control from-control-custom" >
                                  <option>Food Program</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                              </select>
                          </div>
      
                          
                          <div class="form-group">
                              <label ><span class="required-items">Recipient Bkash No *</span></label>
                              <select class="form-control from-control-custom" >
                                  <option>01878116230</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                              </select>
                          </div>
      
                          
                          <div class="form-group">
                              <label ><span class="form-items">Name</span></label>
                              <input type="text" class="form-control from-control-custom" placeholder="Enter Your Name" alt="name">
                          </div>
                    </div>

                    <div class="col-xl-6 col-xs-12">
                        <div class="form-group">
                            <label ><span class="required-items">Currency *</span></label>
                            <select class="form-control from-control-custom" >
                                <option>Taka (BDT)</option>
                                <option>Dollar (USD)</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label ><span class="required-items">Date *</span></label>
                            <input type="date" class="form-control from-control-custom" placeholder="Enter date" alt="date">
                        </div>
    
                        
                        <div class="form-group">
                            <label ><span class="required-items">Payment Channel *</span></label>
                            <select class="form-control from-control-custom" >
                                <option>bKash</option>
                                <option>Rocket</option>
                                <option>Nagad</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
    
                        
                        <div class="form-group">
                            <label ><span class="required-items">Donor's Bkash No *</span></label>
                            <input type="text" class="form-control from-control-custom" placeholder="Enter Your bKash Number" alt="bKash">
                        </div>
    
                        
                        <div class="form-group">
                            <label ><span class="form-items">Attachment</span></label>
                            <input type="file" class="form-control from-control-custom" placeholder="Enter Your Name" alt="Nmae">
                            <small class="form-text text-muted">Note: File Type: jpg, jpeg, png, pdf, Max Size: 1MB</small>
                        </div>
                    </div>
                    
                    <div class="col-xl-12 col-xs-12">
            
                        <div class="form-group">
                            <label><span class="form-items">Message</span></label>
                            <textarea class="form-control from-control-custom" placeholder="Enter Your Message" rows="3"></textarea>
                          </div>
                 
                    </div>

                    <div class="col-xl-12 text-center">
                        <div class="google_capture_area">
                            <img src="/assets/images/AllLogin/google_capture.webp" alt="capture">
                        </div>
                    </div>

                    <div class="col-xl-12 text-center d-flex justify-content-center">
                        <button class="btn forget-btn">SEND</button>
                    </div>

                </div>
            </form>
        </div>
    </div>

    <!-- donation clearification form area end -->
  </div>
</template>

<script>
  export default {
    name: 'DonationClarification'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
