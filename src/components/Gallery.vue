<template>
  <div>
    
    <!-- gallery header area start -->
    <div class="page_title_bg">
        <div class="container">

    
        <div class="row">
            <div class="col-xl-12 col-xs-12 donation_clearification_header text-center">
                <p class="donation_clearification_title"><span><a href="press.html"> PRESS .</a></span>  <span class="gallery-link"> GALLERY </span><span><a href="video_albam.html"> . VIDEO ALBUM</a></span>  </p>
                <p class="donation_clearification_text">Home / Media / Gallery</p>
            </div>
                </div>
        </div>
    </div>
    <!-- gallery header area end -->


    <!-- gallery submenu bar start -->
    <div class="container">
        <div class="row press_submenu button-group filter-button-group">
            <div class="col-xl-12 col-12 ">
                    <ul class=" text-center myBtnContainer">
                        <li class="press_submenu_items"><button  onclick="filterSelection('all')">all</button></li>
                        <li class="press_submenu_items"><button  onclick="filterSelection('covid')"><span class="press_submenu_bullet">.</span> COVID-19 ACTIVITIES</button></li>
                        <li class="press_submenu_items"><button  onclick="filterSelection('covid')"><span class="press_submenu_bullet">.</span>Iftar & Seheri</button></li>
                        <li class="press_submenu_items"><button  onclick="filterSelection('covid')"><span class="press_submenu_bullet">.</span>EDUCATION</button></li>
                        <li class="press_submenu_items"><button  onclick="filterSelection('covid')"><span class="press_submenu_bullet">.</span>volunteers service</button></li>
                        <li class="press_submenu_items"><button  onclick="filterSelection('covid')"><span class="press_submenu_bullet">.</span>eid for every muslim</button></li>
                        <li class="press_submenu_items"><button  onclick="filterSelection('covid')"><span class="press_submenu_bullet">.</span>support for refugees</button></li>
                        <li class="press_submenu_items"><button  onclick="filterSelection('covid')"><span class="press_submenu_bullet">.</span>orphange projects</button></li>
                        <li class="press_submenu_items"><button  onclick="filterSelection('covid')"><span class="press_submenu_bullet">.</span>covid-19</button></li>
                        <li class="press_submenu_items"><button  onclick="filterSelection('covid')"><span class="press_submenu_bullet">.</span>woman empowerment</button></li>
                        <li class="press_submenu_items"><button  onclick="filterSelection('covid')"><span class="press_submenu_bullet">.</span>tretment</button></li>
                    </ul>
            </div>
        </div>
    </div>
    <!-- gallery submenu bar end -->
    
    <!-- gallery area start -->
    <div class="container">
        <div class="row protfolio-items grid">

            <div class="col-xl-4 col-6 col-sm-6 column covid">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6 iftar">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6 muslim">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6 support">
                <div class="gallery_img muslim">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6 muslim">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6 orphange">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6 women">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6 support">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

        
            <div class="col-xl-4 col-6 col-sm-6 women">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6 orphange">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6 treatment">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

            <div class="col-xl-4 col-6 col-sm-6 treatment">
                <div class="gallery_img">
                    <img src="/assets/images/gallery/galler_image_1.png" alt="gallery-image">
                </div>
            </div>

        </div>
    </div>
    <!-- gallery area end -->

  </div>
</template>

<script>
  export default {
    name: 'Gallery'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
