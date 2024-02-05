// store.ts
import { createStore } from 'vuex';

export default createStore({
  state: {
    // selectedColor: '#07BEB8', // Default color
    selectedColor: localStorage.getItem('ThemeColor'), // Default color
  },
  mutations: {
    updateSelectedColor(state, colorCode) {
      console.log("updateSelectedColor", colorCode);
      state.selectedColor = colorCode;
    },
  },
  actions: {
    setSelectedColor({ commit }, colorCode) {
      console.log("store.ts fire");
      commit('updateSelectedColor', colorCode);
    },
  },
});
