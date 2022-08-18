<template>
  <div class="mounting">
    <input type="checkbox" class="mounting__checkbox" @change="checkMounting" />
    <img class="mounting__image" src="@/static/images/mounting.svg" />
    <div class="mounting__description">
      <h4 class="mounting__title">Установка</h4>
      <p class="mounting__text">
        Отметьте, если Вам необходима консультация профессионала по монтажу
        выбранных товаров.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    checkMounting() {
      this.$store.commit("needMounting");
    },
  },
};
</script>

<style scoped>
.mounting {
  background-color: #f6f8fa;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 26px;
  margin-top: 35px;
}

.mounting__checkbox {
  width: 20px;
  height: 20px;
}

.mounting__image {
  width: 50px;
  height: 50px;
  padding: 0 20px;
}

.mounting__title {
  font-family: Lato;
  font-size: 16px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding-bottom: 5px;
}

.mounting__text {
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #797b86;
  margin: 0;
}
</style>
