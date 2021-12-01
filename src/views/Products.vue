<template>
  <div class="product">
    <ul class="product-fullpage-indicator">
      <li v-for="(item, index) in products" :key="item.id">
        <img :src="item.logo" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.request.get("/products").then((response) => {
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
  }
}
</style>
