import * as types from '../types';

const state = {
    menu: {
        selected: null
    }
};

const getters = {};

const mutations = {
    [types.CORE_NAVIGATION_SET]: (innerState, payload) => {
        state.menu.selected = payload;
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
