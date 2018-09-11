import * as types from '../types';

const state = {
    menu: {
        shoes: {},
        logs: {
            lastPage: null
        },
        brands: {}
    }
};

const getters = {};

const mutations = {
    [types.CORE_NAVIGATION_SET]: (innerState, payload) => {
        state.menu.logs.lastPage = typeof payload === 'string' ? payload : null;
    }
};

const actions = {
    setNavigation: ({ commit }, payload) => {
        commit(types.CORE_NAVIGATION_SET, payload);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
