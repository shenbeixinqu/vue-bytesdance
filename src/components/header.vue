<template>
  <div class="header">
    <div class="logo">
      <a href="/"> </a>
    </div>
    <ul class="navbar">
      <router-link to="/" exact v-slot="{ href, navigate, isActive }">
        <li class="navbar-item" :class="{ active: isActive }">
          <a :href="href" @click="navigate">主页</a>
        </li>
      </router-link>
      <router-link to="/jobs">
        <li class="navbar-item" :class="{ active: isActive }">
          <a :href="href" @click="navigate">职位</a>
        </li>
      </router-link>
      <router-link to="/products">
        <li class="navbar-item" :class="{ active: isActive }">
          <a :href="href" @click="navigate">产品与服务</a>
        </li>
      </router-link>
      <li>
        <a href="https://job.bytedance.com/campus" target="_blank">校园招聘</a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "Header",
  data() {
    return {
      state:store.state
    }
  },
};
</script>

<style lang="less" scoped>
.header {
  color: #aaa;
}
.navbar {
  display: flex;
  &-item {
    margin: 0 20px;
    &.active {
      color: @main-color;
    }
  }
}
</style>
