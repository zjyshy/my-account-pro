<template>
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
</template>

<script lang="ts">
  export default {
    name: "NumberPad"
  };
</script>

<style lang="scss" scoped>
  footer {
    .numberBorder {
      position: absolute;
      width: 100%;
      bottom: 65px;
      display: flex;
      padding: 0 5px;
      background-color: #dddddd;

      button {
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