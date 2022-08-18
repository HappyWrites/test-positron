<template>
  <div class="viewed">
    <img class="viewed__image" :src="viewed.image" alt="просмотренный товар" />
    <h4 class="viewed__title">{{ viewed.name }}</h4>
    <p class="viewed__text">
      {{ viewed.description }}
    </p>
    <p class="viewed__price_type_rub">{{ viewed.priceRub }}</p>
    <p class="viewed__price_type_euro">{{ viewed.priceEuro }}</p>
    <button type="button" class="viewed__button">Подробнее</button>
  </div>
</template>

<script>
export default {
  props: {
    viewed: Object,
  },
};
</script>

<style scoped>
.viewed {
  background-color: #f6f8fa;
  border-radius: 5px;
  padding: 25px;
  box-sizing: border-box;
}

.viewed__image {
  width: 245px;
  height: 245px;
  object-fit: cover;
}

.viewed__title {
  font-family: Lato;
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding-bottom: 10px;
}

.viewed__text {
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  height: 40px;
}

.viewed__price_type_rub {
  font-family: Roboto;
  font-size: 22px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.005em;
  text-align: left;
  margin: 0;
  padding: 60px 0 5px;
}

.viewed__price_type_euro {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #797b86;
  margin: 0;
}

.viewed__button {
  background-color: #0069b4;
  border-radius: 4px;
  font-family: Lato;
  font-size: 16px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  border: none;
  padding: 15px 0;
  width: 100%;
  margin: 17px 0 0;
  cursor: pointer;
}
</style>
