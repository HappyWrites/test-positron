<template>
  <div class="product" v-if="product.count > 0">
    <img class="product__image" :src="product.image" alt="выбранный товар" />
    <div class="product__description">
      <h3 class="product__title">{{ product.name }}</h3>
      <p class="product__text">
        {{ product.description }}
      </p>
      <p class="product__article">Артикул: {{ product.article }}</p>
    </div>
    <div class="product__buttons">
      <div class="product__buttons-changing">
        <button
          @click="diminutionCount(product.id)"
          type="button"
          class="product__button-changing"
        >
          -
        </button>
        <input class="product__button-changing" :placeholder="product.count" />
        <button
          @click="riseCount(product.id)"
          type="button"
          class="product__button-changing"
        >
          +
        </button>
      </div>
      <p v-if="product.count > 1" class="product__price-unit">
        {{ product.price }} Р/шт
      </p>
    </div>
    <p class="product__price">{{ getProductPrice }} ₽</p>
    <button
      @click="deleteProduct(product.id)"
      type="button"
      class="product__button-delete"
    ></button>
  </div>
</template>

<script>
import {
  changeNumberToString,
  changeStringToNumber,
} from "./../utils/converterValue";
export default {
  props: {
    product: Object,
  },

  methods: {
    deleteProduct(id) {
      this.$store.commit("removeProduct", id);
    },

    riseCount(id) {
      this.$store.commit("increaseCount", id);
    },

    diminutionCount(id) {
      this.$store.commit("decreaseCount", id);
    },
  },

  computed: {
    getProductPrice() {
      let price = changeStringToNumber(this.product.price) * this.product.count;
      return changeNumberToString(price);
    },
  },
};
</script>

<style scoped>
.product {
  display: flex;
  justify-content: space-between;
  padding: 23px 16px 18px 0;
  border-bottom: 1px #c4c4c4 solid;
}

.product__image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.product__description {
  width: 263px;
  padding-top: 6px;
}

.product__title {
  font-family: Lato;
  font-size: 16px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
}

.product__text {
  font-family: Lato;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding: 6px 0 7px;
}

.product__article {
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #797b86;
  margin: 0;
}

.product__buttons-changing {
  display: flex;
}

.product__button-changing {
  background-color: #f6f8fa;
  border-radius: 4px;
  width: 32px;
  height: 34px;
  padding: 0;
  margin: 35px 2px 0 0;
  text-align: center;
  border: none;
  align-self: center;
  cursor: pointer;
  color: #1f2432;
}

.product__price-unit {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;
  padding-top: 8px;
}

.product__price {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
  align-self: center;
}

.product__button-delete {
  width: 12px;
  height: 12px;
  background: url(@/static/images/delete.svg) center no-repeat;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  align-self: flex-start;
  padding: 0;
  margin-top: 5px;
  cursor: pointer;
}
</style>
