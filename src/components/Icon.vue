<template>
    <span class="wrapper-icon">
        <svg class="ic">
            <use :xlink:href="'#'+iconName"></use>
        </svg>
    </span>
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

<style lang="scss" >
    .wrapper-icon{
        text-align: center;
        .ic {
            width: 2em; height: 2em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;


        }
    }
    #empty-icon .ic{
        font-size: 1.2rem;
    }



</style>