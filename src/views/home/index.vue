<template>
  <a-layout class="home-page">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>商品管理</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>订单管理</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>会员管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view name="content" />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        后台管理系统 ©2020
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";

@Options({
  components: {
    HelloWorld,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
})
export default class Home extends Vue {
  private selectedKeys = ["1"];
  private collapsed = false;
}
</script>

<style scoped lang='less'>
@import "./index.less";
</style>