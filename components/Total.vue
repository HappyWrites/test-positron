<template>
  <div class="total">
    <h4 class="total__title">Итого</h4>
    <div class="total__sum">
      <p class="total__subtitle">Сумма заказа</p>
      <p class="total__selected">{{ totalPrice }} ₽</p>
    </div>
    <div class="total__sum">
      <p class="total__subtitle">Количество</p>
      <p class="total__selected">{{ totalCount }} шт</p>
    </div>
    <div class="total__sum">
      <p class="total__subtitle">Установка</p>
      <p class="total__selected">{{ $store.state.mounting ? "Да" : "Нет" }}</p>
    </div>
    <hr />
    <div class="total__sum">
      <p class="total__price">Стоимость товаров</p>
      <p class="total__number">{{ totalPrice }} ₽</p>
    </div>
    <form @submit.prevent="setProducts" class="total__buttons">
      <button type="submit" class="total__button">Оформить заказ</button>
      <button type="button" class="total__button total__button-buy">
        Купить в 1 клик
      </button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    totalCount() {
      return this.$store.getters.getTotalCount;
    },

    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },

  methods: {
    setProducts() {
      this.$store.dispatch("setOrder");
    },
  },
};
</script>

<style scoped>
.total {
  background-color: #f6f8fa;
  border-radius: 5px;
  padding: 35px 20px;
  align-self: center;
  margin-top: 10px;
}

.total__title {
  font-family: Lato;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding-bottom: 31px;
}

.total__sum {
  display: flex;
  justify-content: space-between;
  padding-bottom: 18px;
}

.total__subtitle {
  font-family: Lato;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
}

.total__selected {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: right;
  margin: 0;
}

.total__price {
  font-family: Lato;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  padding-right: 96px;
  margin: 0;
  align-self: flex-end;
}

.total__number {
  font-family: Roboto;
  font-size: 26px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0.005em;
  text-align: right;
  margin: 0;
}

.total__buttons {
  display: flex;
  flex-direction: column;
  padding-top: 14px;
}

.total__button {
  background-color: #0069b4;
  color: white;
  border-radius: 4px;
  padding: 14px 0;
  border: #0069b4;
  margin-bottom: 12px;
  font-family: Lato;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  cursor: pointer;
}

.total__button-buy {
  color: #0069b4;
  background-color: white;
  border: 1px #0069b4 solid;
}
</style>
