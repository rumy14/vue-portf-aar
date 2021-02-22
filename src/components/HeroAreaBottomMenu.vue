<template>
  <div class="page-section">
       <div class="container">
          <div class="row">
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
                    <router-link to="/explore-project">SEE MORE &#x27A4;</router-link>
                  </li>
                </ul>
             </div>
          </div>
       </div>
    </div>
</template>

<script>
  export default {
    name: 'HeroAreaBottomMenu'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
