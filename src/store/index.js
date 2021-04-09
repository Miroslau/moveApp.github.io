import { createStore } from 'vuex';
import move from './modules/move.js';

export default createStore({
  modules: {
    move,
  }
})
