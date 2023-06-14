<template>
  <div class="home">
    <el-button type="primary">home</el-button>
    <div>222</div>
    // 写一个输入框
    <el-input v-model="age" :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      msg: 'home',
      aa: {
        b: {
          c: 999
        }
      },
      age:0
    }
  },
  created() {
    let _this = this
    console.log(_this.aa.b.c)
    console.log('home')
  }
}
</script>
<style lang="scss" scoped>
.home {
  div {
    color: red;
  }
}
</style>
