import Vue from 'vue';
import Vuex from 'vuex';

import types from './modules/types';
import brands from './modules/brands';
import shoes from './modules/shoes';
import logs from './modules/logs';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        types,
        brands,
        shoes,
        logs
    }
});

export default store;
