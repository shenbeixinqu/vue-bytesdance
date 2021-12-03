<template>
  <div class="product">
    <ul class="product-fullpage-indicator">
      <li
        v-for="(item, index) in products"
        :key="item.id"
        class="product-fullpage-indicator-item"
        @click="activeIndex = index"
      >
        <img :src="item.logo" alt />
      </li>
    </ul>
    <transition :name="transitionName">
      <div class="view-wrapper" :style="`backgroundImage:url(${item.cover})`">
        <div class="content">
          <div class="logo">
            <img :src="item.logo" width="100%" height="100%" alt />
          </div>
          <h2>{{ item.title }}</h2>
          <div class="description">{{ item.description }}</div>
          <div class="subDescription">{{ item.subDescription }}</div>
          <div class="link">
            更多信息,请访问
            <br />
            <span>{{ item.link }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      activeIndex: 0,
      transitionName: "",
      loading: false,
    };
  },
  watch: {
    activeIndex(newVal, oldVal) {
      console.log("newVal", newVal, "oldVal", oldVal);
      console.log("params", this.$route);
    },
  },
  created() {
    this.loading = true;
    this.request.get("/products").then((response) => {
      console.log("res", response);
      this.products = response;
      this.loading = false;
      console.log("params", this.$route.params);
    });
  },
  computed: {
    item() {
      console.log("products", this.products[this.activeIndex]);
      return this.products[this.activeIndex] || {};
    },
  },
};
</script>

<style lang="less" scoped>
.product {
  position: fixed;
  top: 60px;
  right: 0;
  left: 0;
  bottom: 0;
  min-width: 700px;
  min-height: 500px;
  &-fullpage-indicator {
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    &-item {
      margin: 22px 0;
      width: 5vh;
      height: 5vh;
      min-height: 30px;
      min-width: 30px;
      cursor: pointer;
      border-radius: 50%;
      // overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .view-wrapper {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;

    .content {
      width: 300px;
      .logo {
        height: 80px;
        width: 80px;
      }
      h2 {
        margin: 30px 0;
      }
      .descrtption,
      .subDescription {
        color: #aaa;
        line-height: 1.4;
      }
      .link {
        margin-top: 40px;
        span {
          color: @main-color;
        }
      }
    }
  }
}
</style>
