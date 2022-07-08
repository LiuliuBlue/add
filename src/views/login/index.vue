<template>
  <div class="dl">
    <div class="hx">
      <div>火星</div>
      <div class="inpu">
        <input type="text" placeholder="请输入用户名" /><br />
        <input type="text" placeholder="请输入密码" />
      </div>
      <div>
        <button @click="deng">登录</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 跳转页面
const deng = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.dl {
  width: 100%;
  height: 100%;
  position: relative;
  .hx {
    position: absolute;
    width: 800px;
    height: 500px;

    // margin-left: 800px;
    border: 2px solid #ccc;
    top: 280px;
    left: 800px;
    div {
      font-size: 60px;
      text-align: center;
      padding-top: 20px;
    }
    .inpu input {
      width: 300px;
      height: 30px;
    }
    button {
      background-color: aqua;
      width: 200px;
    }
  }
}
</style>
