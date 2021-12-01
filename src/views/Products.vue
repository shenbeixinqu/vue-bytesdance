<template>
  <div class="product">
    <ul class="product-fullpage-indicator">
      <li v-for="(item, index) in products" :key="item.id">
        <img :src="item.logo" alt="" />
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
  &-fullpage-indicator {
   
  }
}
</style>
