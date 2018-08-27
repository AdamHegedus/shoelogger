import axios from 'axios';
import * as types from '../types';

const state = {
    logs: []
};

const getters = {};

const mutations = {
    [types.LOGS_GET_LOGS]: (innerState, payload) => {
        state.logs = payload.map((data) => {
            return {
                id: data.id,
                type: data.type,
                brand: data.brand,
                product: data.product,
                distance: data.distance,
                date: data.date
            };
        });
    },
    [types.LOGS_RESET]: () => {
        state.logs = [];
    }
};

const actions = {
    getLogs: ({ commit }) => {
        axios.get('/logs/get-logs.php')
            .then(
                (response) => {
                    commit(types.LOGS_GET_LOGS, response.data);
                }
            );
    },
    addLog: ({ commit }, payload) => {
        axios.post('/logs/post-log.php', payload)
            .then((response) => {
                commit(types.LOGS_POST_LOG, response.data);
            });
    },
    reset: ({ commit }) => {
        commit(types.LOGS_RESET);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
