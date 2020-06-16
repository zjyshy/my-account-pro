<template>
    <nav class="nav">
        <router-link to="/home" active-class="selected">

            <Icon icon-name="bill"/>
            <p>主页</p>
        </router-link>

        <router-link to="/labels" active-class="selected">
            <Icon icon-name="tab"/>
            <p>标签</p>
        </router-link>

        <router-link to="/add" active-class="selected">
            <Icon icon-name="rocket"/>
            <p>添加</p>
        </router-link>

        <router-link to="/statistics" active-class="selected">
      <Icon icon-name="sta"/>
            <p>图表</p>
        </router-link>

        <router-link to="/set" active-class="selected">
            <Icon icon-name="me"/>
            <p>设置</p>
        </router-link>
    </nav>
</template>

<script lang="ts">


  export default {
    name: "nav"
  };
</script>

<style lang="scss" scoped>
    .nav {
        display: flex;
        justify-content: space-around;
        padding-top: 5px;
        width: 100%;
        box-shadow: 0 0 10px rgba(0,0,0,.2);
        p{
            text-align: center;
            font-size: 12px;
        }

        a{
            opacity: 0.5;
        }
        .selected{
            opacity: 1;
        }
    }



</style>