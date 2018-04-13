<template>
<div class="aselect">
  <select  v-model="value"  placeholder="北京">
    <option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </option>
  </select>
</div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value0: ''
      }
    }
  }
</script>

<style>
  .aselect{
    width: 60px;
    height: 30px;
    float: left;
    border-color: #f2f2f2;
    text-align: center;
    margin-top: -3px;
  }

  .aselect select{
    border: none;
    outline: none;
    appearance: none;
    width: 100%;
    height: 30px;
    line-height: 30px;
    border-color: #f2f2f2;
  }
</style>
