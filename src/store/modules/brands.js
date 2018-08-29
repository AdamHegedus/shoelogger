import axios from 'axios';
import * as types from '../types';

const state = {
    brands: [],
    status: null,
    statusDelete: null
};

const getters = {
    getStatus: (innerState) => {
        return innerState.status;
    },
    getStatusDelete: (innerState) => {
        return innerState.statusDelete;
    }
};

const mutations = {
    [types.BRANDS_GET_BRANDS]: (innerState, payload) => {
        state.brands = payload.map((data) => {
            return {
                id: data.id - 0,
                brand: data.brand
            };
        });
        state.status = null;
        state.statusDelete = null;
    },
    [types.BRANDS_POST_BRAND]: (innerState, payload) => {
        state.status = typeof payload.data === 'object' && payload.data !== null;
    },
    [types.BRANDS_DELETE_BRAND]: (innerState, payload) => {
        state.statusDelete = typeof payload.data === 'object' && payload.data !== null;
    },
    [types.BRANDS_RESET]: () => {
        state.brands = [];
        state.status = null;
        state.statusDelete = null;
    },
    [types.BRANDS_RESET_META]: () => {
        state.status = null;
        state.statusDelete = null;
    }
};

const actions = {
    getBrands: ({ commit }) => {
        axios.get('/brands/get-brands.php')
            .then((response) => {
                commit(types.BRANDS_GET_BRANDS, response.data);
            });
    },
    addBrand: ({ commit }, payload) => {
        axios.post('brands/post-brand.php', payload)
            .then((response) => {
                commit(types.BRANDS_POST_BRAND, response.data);
            });
    },
    deleteBrand: ({ commit }, payload) => {
        axios.post('brands/delete-brand.php', payload)
            .then((response) => {
                commit(types.BRANDS_DELETE_BRAND, response.data);
            });
    },
    reset: ({ commit }) => {
        commit(types.BRANDS_RESET);
    },
    resetMeta: ({ commit }) => {
        commit(types.BRANDS_RESET_META);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
