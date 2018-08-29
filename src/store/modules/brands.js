import axios from 'axios';
import * as types from '../types';

const state = {
    brands: []
};

const getters = {};

const mutations = {
    [types.BRANDS_GET_BRANDS]: (innerState, payload) => {
        state.brands = payload.map((data) => {
            return {
                id: data.id - 0,
                brand: data.brand
            };
        });
    },
    [types.BRANDS_DELETE_BRAND]: () => {
    },
    [types.BRANDS_RESET]: () => {
        state.brands = [];
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
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
