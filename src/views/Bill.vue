<template>

  <layout>
    <div class="wrapper-home">
      <header>
        <div class="month">
          <span>6月详情</span>
        </div>
        <div class="balance">
          当月盈余：￥666
        </div>
        <ul class="earning-pay">
          <li class="earning">
            <div >
              <p>800元</p>
              <p>6月收入</p>
            </div>
          </li>
          <li class="pay">

            <div>
              <p>800元</p>
              <p>6月支出</p>
            </div>
          </li>
        </ul>
      </header>
      <main>
        <p><span>6/12</span><span>星期五</span></p>
        <ul>
          <li>
            <Icon icon-name="eat"/>
            <span>饮食</span>
            <span>￥32</span>
          </li>
          <li>
            <Icon icon-name="outside"/>
            <span>出行</span>
            <span>￥58</span>
          </li>
        </ul>
        <p><span>6/11</span><span>星期四</span></p>
        <ul>
          <li>
            <Icon icon-name="outside"/>
            <span>出行</span>
            <span>￥58</span>
          </li>
          <li>
            <Icon icon-name="outside"/>
            <span>出行</span>
            <span>￥58</span>
          </li>
          <li>
            <Icon icon-name="outside"/>
            <span>出行</span>
            <span>￥58</span>
          </li>
          <li>
            <Icon icon-name="outside"/>
            <span>出行</span>
            <span>￥58</span>
          </li>
          <li>
            <Icon icon-name="outside"/>
            <span>出行</span>
            <span>￥58</span>
          </li>
          <li>
            <Icon icon-name="outside"/>
            <span>出行</span>
            <span>￥58</span>
          </li>
        </ul>
      </main>

    </div>

  </layout>


</template>

<script lang="ts">

  export default {
    name: "Bill",

  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  header{
    height: 30vh;
    border: 1px solid;
  background-color: #42b983;
    color: $font-color-white;
    display: flex;
    flex-direction: column;
    position: relative;

  }
  .month{

    flex-grow: 1;
    padding-top: 15px;
  }
  .balance{
    flex-grow: 1;
  }
  .wrapper-home{

  }
  .earning-pay{
    display: flex;
    padding: 10px;
    justify-content: space-around;
  }
  .earning,.pay{
    flex-grow: 1;
    text-align: center;
  }
  .earning{
    border-right: 2px solid #fff;
  }
  main{
    padding: 16px;
    padding-bottom: 0px;
  }
  main>p{
    border-bottom: 1px solid #aaa;
  }

</style>