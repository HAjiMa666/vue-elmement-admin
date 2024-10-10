<!--
 * @Author: Spirit 1546158360@qq.com
 * @Date: 2024-10-01 10:46:05
 * @LastEditors: Spirit
 * @LastEditTime: 2024-10-01 10:47:47
 * @Description: 
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './views/SideBar.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">Element Vue 学习教程</el-header>
      <el-container class="container">
        <el-aside width="200px"><SideBar /></el-aside>
        <el-main class="main"><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.common-layout {
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  background-color: var(--el-menu-bg-color);
  color: var(--el-menu-text-color);
  border-bottom: 1px solid #313135;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
}

.container {
  margin-top: 48px;
}

.main {
  height: calc(100vh - 48px);
  overflow: auto;
  background-color: var(--el-menu-bg-color);
}
</style>
