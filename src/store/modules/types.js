import axios from 'axios';
import * as types from '../types';

const state = {
    types: []
};

const getters = {};

const mutations = {
    [types.TYPES_GET_TYPES]: (innerState, payload) => {
        state.types = Array.isArray(payload) ?
            payload.map((data) => {
                return {
                    id: data.id - 0,
                    type: data.type
                };
            }) :
            [];
    },
    [types.TYPES_RESET]: () => {
        state.types = [];
    }
};

const actions = {
    getTypes: ({ commit }) => {
        axios.get('/types/get-types.php')
            .then(
                (response) => {
                    commit(types.TYPES_GET_TYPES, response.data);
                }
            );
    },
    reset: ({ commit }) => {
        commit(types.TYPES_RESET);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
