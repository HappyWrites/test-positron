<template>
<div class="page">
  <Header />
  <Basket />
  <Vieweds />
</div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: { Header },
  name: "IndexPage",
};
</script>

<style scoped>
.page {
  font-family: "Lato", sans-serif;
  background-color: #E5E5E5;
  padding: 64px 82px 116px 80px;
}
</style>
