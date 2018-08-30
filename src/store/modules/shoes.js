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
        state.shoes = payload.map((data) => {
            return {
                id: data.id - 0,
                type: data.type,
                brand: data.brand,
                product: data.product,
                distance: data.distance - 0
            };
        });
    },
    [types.SHOES_POST_SHOES]: (innerState, payload) => {
        state.meta = success(payload.data) ?
            {
                status: true,
                message: null
            } : {
                status: false,
                message: payload
            };
    },
    [types.SHOES_RESET]: () => {
        state.shoes = [];
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
                commit(types.SHOES_POST_SHOES, response.data);
            });
    },
    reset: ({ commit }) => {
        commit(types.SHOES_RESET);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
