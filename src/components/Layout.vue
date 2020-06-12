<template>
    <div class="wrapper">
        <div class="content">
            <slot></slot>
        </div>
        <div class="nav">
            <Nav/>
        </div>

    </div>
</template>

<script lang="ts">
  export default {
    name: "Layout"
  };
</script>

<style lang="scss" scoped>
    .wrapper{
        border: 1px solid #42b983;
        height: 100vh;
        display: flex;
        flex-flow: column nowrap;
    }
    .content{
        flex-grow:1 ;
        overflow: auto;
    }


</style>