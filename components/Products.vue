<template>
  <div class="products">
    <div class="products__detail">
      <Panel />
      <div class="products__items">
        <Product
          v-for="product in this.$store.state.selectedProducts"
          :product="product"
          :key="product.id"
        />
      </div>
      <Mounting />
    </div>
    <Total />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getSelectedProducts");
  },
};
</script>

<style scoped>
.products {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}

.products__items :last-child {
  border: none;
}

.products__detail {
  margin-right: 55px;
}
</style>
