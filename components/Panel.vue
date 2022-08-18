<template>
  <div class="panel">
    <div class="panel__caption">
      <h2 class="panel__title">Ваша корзина</h2>
      <p class="panel__quantity">4 товара</p>
    </div>
    <button @click="clear" type="button" class="panel__button-clearing">
      Очистить корзину
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    clear() {
      this.$store.commit("clearCart");
    },
  },
};
</script>

<style scoped>
.panel {
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
}

.panel__caption {
  display: flex;
}

.panel__title {
  font-family: Lato;
  margin: 0;
  font-size: 44px;
  font-weight: 700;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: left;
}

.panel__quantity {
  font-family: Lato;
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #797b86;
  align-self: flex-end;
  padding: 0 0 3px 22px;
}

.panel__button-clearing {
  text-decoration: underline;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
  color: #797b86;
  align-self: flex-end;
  padding: 0 0 4px 0;
  cursor: pointer;
}
</style>

