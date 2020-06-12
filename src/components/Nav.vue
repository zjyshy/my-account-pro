<template>
    <div>
        <router-link to="/">首页</router-link>

        <router-link to="/labels">标签</router-link>

        <router-link to="/add">添加账单</router-link>

        <router-link to="/statistics">图表</router-link>

        <router-link to="/set">设置</router-link>
    </div>
</template>

<script lang="ts">
  export default {
    name: "nav"
  };
</script>

<style lang="scss" scoped>

</style>