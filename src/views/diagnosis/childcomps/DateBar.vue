<template>
  <div class='datebar'>
    <div class='date'>
      <div class='icon'></div>
      <slot></slot>
    </div>
    <div><img src="~assets/img/diagnosis/delete.png" alt=""></div>
  </div>
</template>
  
<script>
  export default {
    name: "DateBar"
  }
</script>
  
<style scoped>
  .datebar {
    display: flex;
    height: 40px;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    margin: 10px 30px;
    font-size: 13px;
    border: 1px solid #ccc
  }
  .datebar .date {
    display: flex;
    align-items: center;
  }
  .datebar .icon {
    width: 8px;
    height: 8px;
    border-left: 2px solid #999;
    border-bottom: 2px solid #999;
    transform: rotate(-45deg);
    margin-right: 10px;
  }

  .datebar img {
    width: 15px;
  }
</style>