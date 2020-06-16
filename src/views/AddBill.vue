<template>
  <layout>
    <div>
      <header>
        <div>
          <div :class="type==='1' && 'selected'"
          @click="selectType('1')">收入</div>
          <div :class="type==='0'  && 'selected'"
          @click="selectType('0')">支出</div>
        </div>
      </header>
<Money/>
<number-pad/>

    </div>
  </layout>


</template>

<script >

  import NumberPad from "@/components/AddBill/NumberPad.vue";
  import Money from "@/components/AddBill/Money.vue";
  export default {
    name: "AddBill",
    components: {Money, NumberPad},
    data: function () {
      return {
        //billType: '收入',
        type:'0'//0表示支出，1表示收入
      };
    },
    methods:{
      selectType(type){
        if(type !=='0'&& type!=='1'){
          throw new Error('type is unknown')
        }else{
          this.type = type;
          console.log(type)
        }
    }
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
        color: #42b983;
      }

      > div:first-child {
        border-radius: 5px 0 0 5px;

      }

      > div:last-child {

        border-radius: 0 5px 5px 0;
      }
    }
    .selected{
      background-color: #42b983;
      color: white;
    }
  }



</style>