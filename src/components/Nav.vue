<template>
    <div class="nav">
        <router-link to="/">
            <div>
                <svg>
                    <use xlink:href="#bill"></use>
                </svg>
            </div>
        </router-link>

        <router-link to="/labels"><div><img src="../assets/icons/tab.svg" alt="tab"></div></router-link>

        <router-link to="/add"><div><img src="../assets/icons/rocket.svg" alt="add"></div></router-link>

        <router-link to="/statistics"><div><img src="../assets/icons/sta.svg" alt="statistics"></div></router-link>

        <router-link to="/set"><div><img src="../assets/icons/me.svg" alt="me"></div></router-link>
    </div>
</template>

<script lang="ts">
    import x from "@/assets/icons/bill.svg"
    console.log(x)
  export default {
    name: "nav"
  };
</script>

<style lang="scss" scoped>
.nav{
    display: flex;
    justify-content: space-around;

}
    .nav div img{
    height: 50px;
        opacity: 0.4;
}


</style>