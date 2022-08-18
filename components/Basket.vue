<template>
  <div class="basket">
    <Navigation />
    <Products />
  </div>
</template>
<script>
import Navigation from "./Navigation.vue";
export default {
  components: { Navigation },
};
</script>
<style scoped>
.basket {
  margin-top: 55px;
}
</style>
