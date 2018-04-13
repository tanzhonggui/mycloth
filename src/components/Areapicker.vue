<template lang="html">
  <div class="block">
    <span class="demonstration">hover 触发子菜单</span>
    <el-cascader
      expand-trigger="hover"
      :options="options"
      v-model="selectedOptions2"
      @change="handleChange">
    </el-cascader>
  </div>
</template>

<script>
export default {
  data() {
    return{
      options: [
        {
          label: '一致'
        },
      ]
    };
  },
}
</script>

<style lang="css">
</style>
