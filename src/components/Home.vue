<template>
  <div>

    <HeroAreaProject />
    <HomeAbout />
    <HomeSkills />

  </div>
</template>

<script>

  import HeroAreaProject from './HeroAreaProject.vue'
  import HomeAbout from './HomeAbout.vue'
  import HomeSkills from './HomeSkills.vue'

  export default {
    name: 'Home',
    components:{
      HeroAreaProject,
      HomeAbout,
      HomeSkills
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
