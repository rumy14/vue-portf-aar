<template>
  <div>
    <!-- hero area start -->
    <div class="page_title_bg">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-xs-12 donation_clearification_header text-center">
                    <p class="donation_clearification_title">explore projects</p>
                    <p class="white-bar"></p>
                    <p class="donation_clearification_text">Home / Explore Projects</p>
                </div>
            </div>
        </div>
        </div>
    <!-- hero area end -->

    <!-- body area start -->
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-sm-12 col-12 text-center all_project_body_title ">All Projects</div>
            <p class="grey-bar-center"></p>

            <div class="row individual_project">
                <div class="col-xl-4 col-sm-4 col-12 p-0">
                    <div class="project_image">
                        <img src="/assets/images/explore_projects/project1.webp" alt="project1">
                    </div>
                </div>

                <div class="col-xl-8 col-sm-8 col-12">
                    <div class="project_title_and_description ">
                        <div class="project_title">Winter Cloths Distribution</div>
                        <div class="project_des">Every year, millions of underprivileged people and children are suffering for deadly winter. 
                            We want to distribute winter cloths for 10000 <button class="explore_projects_read_more_btn">Read more</button> </div>
                        <button class="explore_projects_donate_btn">
                            <router-link to="/donate">Donate Now</router-link>
                        </button>
                    </div>
                </div>
            </div>

            <div class="row individual_project">
                <div class="col-xl-4 col-sm-4 col-12 p-0">
                    <div class="project_image">
                        <img src="/assets/images/explore_projects/project2.webp" alt="project">
                    </div>
                </div>

                <div class="col-xl-8 col-sm-8 col-12">
                    <div class="project_title_and_description ">
                        <div class="project_title">Bidyanondo Mother & Child Care Hospital</div>
                        <div class="project_des">To ensure proper treatment of the general public and for those who live under the poverty line, Bidyanondo is going to establishing "Bidyanondo Mother<button class="explore_projects_read_more_btn">Read more</button> </div>
                        <button class="explore_projects_donate_btn">
                            <router-link to="/donate">Donate Now</router-link>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="row individual_project">
                <div class="col-xl-4 col-sm-4 col-12 p-0">
                    <div class="project_image">
                        <img src="/assets/images/explore_projects/project3.webp" alt="project">
                    </div>
                </div>

                <div class="col-xl-8 col-sm-8 col-12">
                    <div class="project_title_and_description ">
                        <div class="project_title">Lets Fight against COVID 19</div>
                        <div class="project_des">Daily lunch program, Disinfectant program, PPE for medical personals, Hand sanitizes need your generous donation during this pandemic  <button class="explore_projects_read_more_btn">Read more</button> </div>
                        <button class="explore_projects_donate_btn">
                            <router-link to="/donate">Donate Now</router-link>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="row individual_project">
                <div class="col-xl-4 col-sm-4 col-12 p-0">
                    <div class="project_image">
                        <img src="/assets/images/explore_projects/project4.webp" alt="project">
                    </div>
                </div>

                <div class="col-xl-8 col-sm-8 col-12">
                    <div class="project_title_and_description ">
                        <div class="project_title">One Taka Meal</div>
                        <div class="project_des">A very new and unique program began by Bidyanondo is 'Ek Takay Ahar', which refers to 'food for a single penny'. Under this program <button class="explore_projects_read_more_btn">Read more</button> </div>
                        <button class="explore_projects_donate_btn">
                            <router-link to="/donate">Donate Now</router-link>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="row individual_project">
                <div class="col-xl-4 col-sm-4 col-12 p-0">
                    <div class="project_image">
                        <img src="/assets/images/explore_projects/project5.webp" alt="project">
                    </div>
                </div>

                <div class="col-xl-8 col-sm-8 col-12">
                    <div class="project_title_and_description ">
                        <div class="project_title">Flood Relief Program</div>
                        <div class="project_des">As a part of emergency response, like every year, we are distributing food among the people in flood affected area. Every day, we are distributing cooked  <button class="explore_projects_read_more_btn">Read more</button> </div>
                        <button class="explore_projects_donate_btn">
                            <router-link to="/donate">Donate Now</router-link>
                        </button>
                    </div>
                </div>
            </div>

            <div class="row individual_project">
                <div class="col-xl-4 col-sm-4 col-12 p-0">
                    <div class="project_image">
                        <img src="/assets/images/explore_projects/project6.webp" alt="project">
                    </div>
                </div>

                <div class="col-xl-8 col-sm-8 col-12">
                    <div class="project_title_and_description ">
                        <div class="project_title">Hospital For COVID patients</div>
                        <div class="project_des">TTo ensure proper treatment of the general public and for those who live under the poverty line, Bidyanondo has established the "Bidyanondo CMP Field Hospital" to battle <button class="explore_projects_read_more_btn">Read more</button> </div>
                        <button class="explore_projects_donate_btn">
                            <router-link to="/donate">Donate Now</router-link>
                        </button>
                    </div>
                </div>
            </div>
        
        </div>

        <div class="row">
            <div class="col-xl-12" style="display: flex; justify-content: center;">
                <div class="pagination">
                    <a href="#">.</a>
                    <a href="#">.</a>
                    <a href="#">.</a>
                    <a href="#">.</a>
                    <a href="#">.</a>
                    <a href="#">.</a>
                    <a href="#">.</a>
                </div>
            </div>
        </div>
    </div>

    <!-- body area end -->
  </div>
</template>

<script>
  export default {
    name: 'ExploreProject'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
