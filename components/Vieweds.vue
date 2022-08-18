<template>
  <div class="vieweds">
    <div class="vieweds__panel">
      <h2 class="vieweds__title">Просмотренные товары</h2>
      <div class="vieweds__slider">
        <button
          @click="goBack"
          type="button"
          class="vieweds__button vieweds__slider_type_back"
        ></button>
        <div class="vieweds__slider-pages">
          <p class="vieweds__slider-page_type_current">
            {{ this.$store.state.slide }}
          </p>
          <p class="vieweds__slider-page">/</p>
          <p class="vieweds__slider-page">
            {{ this.$store.state.slidesCount }}
          </p>
        </div>
        <button
          @click="goForward"
          type="button"
          class="vieweds__button vieweds__slider_type_forward"
        ></button>
      </div>
    </div>
    <div class="vieweds__items">
      <Viewed v-for="viewed in this.items" :viewed="viewed" :key="viewed.id" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$store.commit("decreaseSlide");
    },

    goForward() {
      this.$store.commit("increaseSlide");
    },
  },

  computed: {
    items() {
      return this.$store.getters.getSlideItems;
    },
  },

  mounted() {
    this.$store.dispatch("getViewedProducts");
  },
};
</script>

<style scoped>
.vieweds {
  margin: 96px 0 0;
}

.vieweds__panel {
  display: flex;
  justify-content: space-between;
}

.vieweds__title {
  font-family: Lato;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
}

.vieweds__slider {
  display: flex;
}

.vieweds__button {
  border: none;
  font: inherit;
  color: inherit;
  background-color: #90a2b5;
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50px;
}

.vieweds__slider_type_back {
  background: url(@/static/images/button-back.svg) center no-repeat;
}

.vieweds__slider_type_forward {
  background: url(@/static/images/button-forward.svg) center no-repeat;
}

.vieweds__slider-pages {
  display: flex;
  margin: 0 16px 0;
}

.vieweds__slider-page {
  font-family: Lato;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
  padding: 7px 3px;
}

.vieweds__slider-page_type_current {
  font-family: Lato;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
}

.vieweds__items {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
}
</style>
