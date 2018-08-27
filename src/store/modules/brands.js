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
    [types.BRANDS_RESET]: () => {
        state.brands = [];
    }
};

const actions = {
    getBrands: ({ commit }) => {
        axios.get('/brands/get-brands.php')
            .then(
                (response) => {
                    commit(types.BRANDS_GET_BRANDS, response.data);
                }
            );
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
