import axios from 'axios';
import * as types from '../types';

function success(data) {
    return typeof data === 'object' && data !== null;
}

const state = {
    brands: [],
    meta: {
        message: null,
        status: false
    }
};

const getters = {
    getMeta: (innerState) => {
        return innerState.meta;
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
        state.meta = success(payload.data) ?
            {
                status: true,
                message: null
            } : {
                status: false,
                message: payload.meta
            };
    },
    [types.BRANDS_DELETE_BRAND]: (innerState, payload) => {
        state.meta = success(payload.data) ?
            {
                status: true,
                message: null
            } : {
                status: false,
                message: payload
            };
    },
    [types.BRANDS_RESET]: () => {
        state.brands = [];
        state.meta = {
            message: null,
            status: false
        };
    },
    [types.BRANDS_RESET_META]: () => {
        state.meta = {
            message: null,
            status: false
        };
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
