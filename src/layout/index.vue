<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="ce">
        <app-aside></app-aside>
      </el-aside>
      <el-container>
        <el-header>
          <app-header></app-header>
        </el-header>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import AppAside from './Aside'
import AppMain from './Main'
import AppHeader from './Header'
</script>

<style lang='scss' scoped>
.common-layout{
  width: 2000px;
  height: 2000px;
  .ce{
    width: 320px;
    height: 1000px;
    background-color:#565c63 ;

  }
}
</style>
