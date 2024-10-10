<script lang="ts" setup>
import { routers } from '@/router'
import { useRoute } from 'vue-router'

const route = useRoute()

console.log('route', route.fullPath)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-row class="tac">
    <el-col :span="24" class="el-menu-container">
      <el-menu
        :default-active="route.fullPath"
        @open="handleOpen"
        @close="handleClose"
        router="true"
        class="el-menu"
      >
        <div v-for="item in routers" :key="item.name">
          <el-menu-item :index="item.path" class="menu-item" v-if="item.path !== '/'">
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-menu-container {
  border-right: 1px solid #313135;
}
.el-menu {
  height: 100%;
  border-right: 0px;
  color: #f2f2f2;
}
.tac {
  height: calc(100vh - 48px);
  background-color: #fff;
}

.menu-item {
  text-decoration: none;
}

.is-active {
  background-color: #414549;
}
</style>
