<template>
  <el-container class="home-page">
    <el-menu
      background-color="#031529"
      text-color="#fff"
      :collapse="isCollapse"
      mode="vertical"
      :unique-opened="true"
      :router="true"
      :collapse-transition="false"
      :default-openeds="['0']"
    >
      <div class="logo">
        <span>欢迎...</span>
      </div>
      <template v-for="(item, i) of routes" :key="item.name">
        <el-submenu v-if="item.children" :index="item.path">
          <template #title>
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(child, idx) of item.children"
              :key="i + '-' + idx"
              :index="child.path"
              >选项1
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item v-else :index="item.path">
          <i :class="item.meta.icon"></i>
          <template #title
            ><span>{{ item.meta.title }}</span></template
          >
        </el-menu-item>
      </template>
    </el-menu>

    <el-container>
      <el-main>
        <header class="both-sides-center">
          <i
            @click="onIcon"
            :class="[!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']"
            style="margin-right: 15px"
          ></i>
          <el-button>退出</el-button>
        </header>
        <div class="main">
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
          </el-breadcrumb> -->
          <router-view name="content" />
        </div>
      </el-main>
      <!-- <el-footer> 后台管理系统 ©2020 </el-footer> -->
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import { Vue } from "vue-class-component";
import { routes } from "@/router";

export default class Home extends Vue {
  private isCollapse = false;
  private routes = routes[1].children;

  private onIcon() {
    this.isCollapse = !this.isCollapse;
  }
}
</script>


<style scoped lang='less'>
@import "./index.less";
</style>