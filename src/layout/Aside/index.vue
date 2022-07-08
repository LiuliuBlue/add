<template>
  <div class="ce">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      default-active="2"
      text-color="#fff"
    >
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>ManAger</span>
        </el-menu-item>
        <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-1">菜单管理</el-menu-item>
        <el-menu-item index="1-1">角色管理</el-menu-item>
        <el-menu-item index="1-1">部门管理</el-menu-item>
        <el-menu-item index="1-1">员工管理</el-menu-item>
        <el-menu-item index="1-1">薪酬管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>审批管理管理</span>
        </template>
        <el-menu-item index="1-1">休假申请</el-menu-item>
        <el-menu-item index="1-1">待审批</el-menu-item>
        </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
// .ce{
//     background-color:#565c63 ;
// }
</style>
