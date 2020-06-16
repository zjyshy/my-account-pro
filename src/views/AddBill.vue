<template>
  <layout>
    <div>
      <header>
        <div>
          <div>收入</div>
          <div>支出</div>
        </div>
      </header>
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
      <footer>
        <div class="numberBorder">
          <div class="left-number">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>

            <button>.</button>
            <button>0</button>
            <button>
              <Icon icon-name="delete"/>
            </button>
          </div>
          <div class="right-enter">
            <button>确定</button>
          </div>
        </div>
      </footer>

    </div>
  </layout>


</template>

<script lang="ts">

  export default {
    name: "AddBill",
    data: function () {
      return {
        billType: '收入'
      };
    },

  };
</script>

<style lang="scss" scoped>

  header {
    display: flex;
    justify-content: center;
    background-color: #eeeeee;

    > div {
      display: flex;
      padding: 10px 0 15px 0;

      > div {
        border: 1px solid #42b983;
        padding: 3px 20px;
        font-weight: 600;
      }

      > div:first-child {
        border-radius: 5px 0 0 5px;
        background-color: #42b983;
        color: white;
      }

      > div:last-child {
        color: #42b983;
        border-radius: 0 5px 5px 0;
      }
    }
  }

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

  footer {
    .numberBorder {
      position: absolute;
      width: 100%;
      bottom: 65px;
      display: flex;
      padding: 0 5px;
      background-color: #dddddd;
      button{
        background-color: #fff;
      }
      .left-number {
        flex-grow: 3;
        display: flex;
        flex-wrap: wrap;

        > button {
          width: 31%;
          height: 50px;
          margin: 2.5px;
          justify-content: space-between;
          border-radius: 5px;
          text-align: center;
        }

      }

      .right-enter {
        margin-bottom: 6px;
        flex-grow: 1;
        max-width: 220px;

        button {
          width: 100%;
          height: 100%;
          margin-top: 3px;
        }
      }
    }


  }

</style>