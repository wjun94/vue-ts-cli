<template>
  <div class="about">
    <HelloWorld />
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p><p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p><p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private selectedKeys: string[] = ["0"]; // 选中tab
  private collapsed = false; // 显示/隐藏左边tab
  private tabs: string[] = ["商品管理", "订单管理", "会员管理"];

  private onMenu(keys: any) {
    const { key } = keys;
    this.$router.push(key === "0" ? "/" : key === "1" ? "orderList" : "member");
  }
}
</script>

<style scoped lang='less'>
@import "./index.less";
</style>