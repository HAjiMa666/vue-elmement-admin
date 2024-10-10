<!--
 * @Author: Spirit 1546158360@qq.com
 * @Date: 2024-10-01 10:46:05
 * @LastEditors: Spirit
 * @LastEditTime: 2024-10-01 10:49:06
 * @Description: 首页
-->
<script setup lang="ts"></script>

<template>
  <main class="title">欢迎来到 Vue3 + Element Plus 学习项目</main>
  <div class="description">
    在这里你能学会 Vue3 的基本用法，同时也能熟悉 Element Plus 组件库的用法。
  </div>
  <div class="overview">
    <el-card class="card" body-class="card-body">
      <div class="card-title">当前组件数量</div>
      <div class="card-description">12</div>
    </el-card>
    <el-card class="card" body-class="card-body">
      <div class="card-title">当前组件数量</div>
      <div class="card-description">12</div>
    </el-card>
    <el-card class="card" body-class="card-body">
      <div class="card-title">当前组件数量</div>
      <div class="card-description">12</div>
    </el-card>
    <el-card class="card" body-class="card-body">
      <div class="card-title">当前组件数量</div>
      <div class="card-description">12</div>
    </el-card>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 36px;
  color: var(--el-menu-text-color);
  line-height: 64px;
}
.description {
  text-align: center;
  font-size: 18px;
  color: #666;
  line-height: 1;
}

.overview {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 48px;
}

.card {
  flex-basis: 300px;
  max-width: 360px;
  height: 180px;

  &:deep(.card-body) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .card-title {
    text-align: center;
    font-size: 24px;
    height: 48px;
  }

  .card-description {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    flex: 1;
  }
}
</style>
