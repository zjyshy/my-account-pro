<template>
    <div class="wrapper">
        <svg class="ic">
            <use :xlink:href="'#'+iconName"></use>
        </svg>
    </div>
</template>

<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try{
    importAll(require.context('../assets/icons',true,/\.svg$/))
  }catch (e) {
    console.log(e)
  }
  export default {
    name: "Icon",
   props:['iconName']
  };
</script>

<style lang="scss" scoped>
    .wrapper{
        text-align: center;
        .ic {
            width: 3em;
            opacity: 0.5;
            height: 30px;


        }
    }



</style>