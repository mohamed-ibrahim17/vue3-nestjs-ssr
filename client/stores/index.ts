import { createStore as _createStore } from 'vuex';

export const createStore = () =>
  _createStore({
    state: () => ({
      counter: 0,
    }),
    mutations: {
      increment(state) {
        state.counter++;
      },
    },
    actions: {
      increment(context) {
        context.commit('increment');
      },
    },
    getters: {
      doubleCount: (state) => state.counter * 2,
    },
  });
