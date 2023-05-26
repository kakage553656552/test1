<template>
  <div class="home">
    <el-button type="primary">home</el-button>
    <div>111</div>
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
      }
    }
  },
  created() {
    // eslint-disable-next-line no-debugger
    debugger
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
