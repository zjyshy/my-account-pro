<template>
  <layout>
    <div>
      <header>
        <div>
          <div>收入</div>
          <div>支出</div>
        </div>
      </header>
<Money/>
<number-pad/>

    </div>
  </layout>


</template>

<script lang="ts">

  import NumberPad from "@/components/AddBill/NumberPad.vue";
  import Money from "@/components/AddBill/Money.vue";
  export default {
    name: "AddBill",
    components: {Money, NumberPad},
    data: function () {
      return {
        billType: '收入'
      };
    },

  };
</script>

<style lang="scss" scoped>

  .content{
    overflow-x: hidden;
  }
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



</style>