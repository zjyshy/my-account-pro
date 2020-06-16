<template>
<div id="app">

  <router-view/>

</div>
</template>

<script lang="ts">
  export default {
    name: "App",
  };

</script>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  #app{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: $font-hei;
    color: $font-color-black;
  }


</style>
