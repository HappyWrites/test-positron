import { selectedItems, viewedProducts } from "./../utils/products";
import { changeStringToNumber, changeNumberToString } from "./../utils/converterValue";

export const state = () => ({
  selectedProducts: [],
  vieweds: [],
  mounting: false,
  slide: 1,
  slidesCount: 1
})

export const mutations = {
  setSelectedProducts(state, data) {
    state.selectedProducts = data;
  },

  setViewed(state, data) {
    state.vieweds = data;
    state.slidesCount = getters.getSlidesCount(state)
  },

  clearCart(state) {
    state.selectedProducts = [];
  },

  removeProduct(state, id) {
    let index = state.selectedProducts.findIndex((item) => item.id === id);
    state.selectedProducts.splice(index, 1);
  },

  increaseCount(state, id) {
    let product = state.selectedProducts.find((item) => item.id === id);
    product.count += 1;
  },

  decreaseCount(state, id) {
    let product = state.selectedProducts.find((item) => item.id === id);
    product.count -= 1;
  },

  needMounting(state) {
    state.mounting = !state.mounting;
  },

  decreaseSlide(state) {
    if (state.slide === 1) {
      state.slide = state.slidesCount;
      return;
    }
    state.slide -= 1;
  },

  increaseSlide(state) {
    if (state.slide === state.slidesCount) {
      state.slide = 1;
      return;
    }
    state.slide += 1;
  }
}

export const actions = {
  getSelectedProducts({ commit }) {
    commit('setSelectedProducts', selectedItems)
  },

  getViewedProducts({ commit }) {
    commit('setViewed', viewedProducts);
  },

  setOrder() {
    return fetch('url', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state.selectedProducts),
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject(`Ошибка: ${res.status}`)
        }
      });
  }
}

export const getters = {
  getTotalCount(state) {
    return state.selectedProducts.reduce((acc, { count }) => {
      return acc + count
    }, 0)
  },

  getTotalPrice(state) {
    let price = state.selectedProducts.reduce((acc, { count, price }) => {
      return acc + count * changeStringToNumber(price);
    }, 0);
    return changeNumberToString(price);
  },

  getSlideItems(state) {
    const items = 4;
    const result = state.vieweds.filter((item, index) => {
      return (
        items * (state.slide - 1) <= index &&
        index < items * state.slide
      );
    });
    return result;
  },

  getSlidesCount(state) {
    state.slidesCount = Math.ceil(state.vieweds.length / 4);
    return state.slidesCount;
  },
}
