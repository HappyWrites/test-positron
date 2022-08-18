<template>
  <div>
    <nav class="routes">
      <a class="routes__link">Главная</a>
      <p class="routes__link">🢒</p>
      <a class="routes__link">Корзина</a>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.routes {
  display: flex;
}

.routes__link {
  font-family: Lato;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  padding-right: 10px;
}

.routes__link:last-of-type {
  color: #797b86;
}
</style>


