<template>
  <a-layout class="home-page">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        @click="onMenu"
        v-model:selectedKeys="selectedKeys"
      >
        <a-menu-item v-for="(item, index) in tabs" :key="String(index)">
          <!-- <user-outlined /> -->
          <component
            :is="
              index === 0
                ? 'GiftOutlined'
                : index === 1
                ? 'FileTextOutlined'
                : 'UserOutlined'
            "
          />
          <span>{{ item }}</span>
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
  FileTextOutlined,
  GiftOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";

@Options({
  components: {
    HelloWorld,
    UserOutlined,
    FileTextOutlined,
    GiftOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
})
export default class Home extends Vue {
  private selectedKeys = ["0"]; // 选中tab
  private collapsed = false; // 显示/隐藏左边tab
  private tabs = ["商品管理", "订单管理", "会员管理"];

  private onMenu(keys: any) {
    const { key } = keys;
    this.$router.push(key === "0" ? "/" : key === "1" ? "orderList" : "member");
  }
}
</script>

<style scoped lang='less'>
@import "./index.less";
</style>