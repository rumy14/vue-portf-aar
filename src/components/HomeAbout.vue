<template>
  <section class="about container">
      <h2>About</h2>
      <!-- <img  src="images/profile.png" alt="Ami Mizuno"> -->
      <picture>
        <source media="(min-width:50px)" srcset="/assets/images/profile.png">
        <source media="(min-width:65px)" srcset="/assets/images/profile.png">
        <img class="profile-img" src="/assets/images/profile.png" alt="Flowers">
      </picture>
      <p>Soufflé sesame snaps dragée. Cotton candy bear claw jelly sweet roll jelly beans. Liquorice danish candy canes lollipop candy biscuit gingerbread cake. Sugar plum topping marshmallow dessert pudding donut croissant.</p>
    </section>
</template>

<script>
  export default {
    name: 'HomeAbout'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
