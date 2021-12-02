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
      <div>
        <div class="content">
          <div class="logo">
            
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
    };
  },
  created() {
    this.request.get("/products").then((response) => {
      console.log("res", response)
      this.products = response;
    });
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
}
</style>
