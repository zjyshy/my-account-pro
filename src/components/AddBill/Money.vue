<template>

  <main>
    <div class="money">
      <span class="bill-type">{{billType}}</span>金额
      <div class="inputMoney"><span>￥</span>
        <label><input type="text" placeholder="填写金额"></label>
        <span id="empty-icon"><Icon icon-name="empty"/></span>
      </div>
    </div>
    <div class="date">{{billType}}日期 <span class="date-selector">2020-6-12</span></div>
    <div class="mark"><label>备注<input type="text" placeholder="填写备注"></label></div>
    <div class="save">
      <button>保存</button>
    </div>
  </main>
</template>

<script lang="ts">
  export default {
    name: "Money"
  };
</script>

<style lang="scss" scoped>
  main {
    padding: 10px;

    .money {
      padding-top: 15px;


      .inputMoney {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        font-size: 2em;
        padding: 20px 0;

        input {
          width: 90%;
        }
      }

      #empty-icon {
        position: absolute;
        right: 10px;
      }

    }

    .mark {
      padding: 20px 0;
      font-size: 1.2em;

      input {
        padding-left: 10px;
      }
    }

    .save {
      text-align: center;
    }

    button {
      font-size: 1.2rem;
      padding: .5em 5rem;


    }

    .date {
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      padding: 10px;

      .date-selector {
        float: right

      }
    }

  }

</style>