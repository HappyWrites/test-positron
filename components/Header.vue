<template>
  <div class="header">
    <div class="short-basket">
      <img class="short-basket__image" src="@/static/images/basket.svg" />
      <div class="short-basket__description">
        <h3 class="short-basket__title">Ваша корзина</h3>
        <p class="short-basket__quantity">
          {{ totalCount }} {{ getDeclinationProduct }}
        </p>
        <p class="short-basket__cost">{{ totalPrice }} Р</p>
      </div>
    </div>
  </div>
</template>

<script>
import { declinationProducts } from "./../utils/converterValue";
export default {
  computed: {
    totalCount() {
      return this.$store.getters.getTotalCount;
    },

    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },

    getDeclinationProduct() {
      return declinationProducts(this.totalCount);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  color: #1f2432;
}

.short-basket {
  display: flex;
}

.short-basket__image {
  width: 28px;
  height: 25px;
  align-self: center;
}

.short-basket__description {
  padding-left: 12px;
}

.short-basket__title {
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
}

.short-basket__quantity {
  font-family: Lato;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  color: #797b86;
}

.short-basket__cost {
  font-family: Lato;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
}
</style>
