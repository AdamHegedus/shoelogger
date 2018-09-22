import axios from 'axios';
import * as types from '../types';

function success(data) {
    return typeof data === 'object' && data !== null;
}

const state = {
    shoes: [],
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
    [types.SHOES_GET_SHOES]: (innerState, payload) => {
        state.shoes = Array.isArray(payload) ?
            payload.map((data) => {
                return {
                    id: data.id - 0,
                    type: data.type,
                    brand: data.brand,
                    product: data.product,
                    distance: data.distance - 0,
                    timestamp: data.timestamp
                };
            }) :
            [];
    },
    [types.SHOES_POST_SHOE]: (innerState, payload) => {
        state.meta = success(payload.data) ?
            {
                status: true,
                message: null
            } : {
                status: false,
                message: payload.meta
            };
    },
    [types.SHOES_DELETE_SHOE]: (innerState, payload) => {
        state.meta = success(payload.data) ?
            {
                status: true,
                message: null
            } : {
                status: false,
                message: payload.meta
            };
    },
    [types.SHOES_RESET]: () => {
        state.shoes = [];
        state.meta = {
            message: null,
            status: false
        };
    },
    [types.SHOES_RESET_META]: () => {
        state.meta = {
            message: null,
            status: false
        };
    }
};

const actions = {
    getShoes: ({ commit }) => {
        axios.get('/shoes/get-shoes.php')
            .then((response) => {
                commit(types.SHOES_GET_SHOES, response.data);
            });
    },
    addShoe: ({ commit }, payload) => {
        axios.post('/shoes/post-shoe.php', payload)
            .then((response) => {
                commit(types.SHOES_POST_SHOE, response.data);
            });
    },
    deleteShoe: ({ commit }, payload) => {
        axios.post('/shoes/delete-shoe.php', payload)
            .then((response) => {
                commit(types.SHOES_DELETE_SHOE, response.data);
            });
    },
    reset: ({ commit }) => {
        commit(types.SHOES_RESET);
    },
    resetMeta: ({ commit }) => {
        commit(types.SHOES_RESET_META);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
