import axios from 'axios';
import * as types from '../types';

function success(data) {
    return typeof data === 'object' && data !== null;
}

const state = {
    logs: [],
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
    [types.LOGS_GET_LOGS]: (innerState, payload) => {
        state.logs = Array.isArray(payload) ?
            payload.map((data) => {
                return {
                    id: data.id - 0,
                    type: data.type,
                    brand: data.brand,
                    product: data.product,
                    distance: data.distance - 0,
                    date: data.date,
                    timestamp: data.timestamp
                };
            }) :
            [];
    },
    [types.LOGS_POST_LOG]: (innerState, payload) => {
        state.meta = success(payload.data) ?
            {
                status: true,
                message: null
            } : {
                status: false,
                message: payload.meta
            };
    },
    [types.LOGS_DELETE_LOG]: (innerState, payload) => {
        state.meta = success(payload.data) ?
            {
                status: true,
                message: null
            } : {
                status: false,
                message: payload.meta
            };
    },
    [types.LOGS_RESET]: () => {
        state.logs = [];
        state.meta = {
            message: null,
            status: false
        };
    },
    [types.LOGS_RESET_META]: () => {
        state.meta = {
            message: null,
            status: false
        };
    }
};

const actions = {
    getLogs: ({ commit }) => {
        axios.get('/logs/get-logs.php')
            .then((response) => {
                commit(types.LOGS_GET_LOGS, response.data);
            });
    },
    addLog: ({ commit }, payload) => {
        axios.post('/logs/post-log.php', payload)
            .then((response) => {
                commit(types.LOGS_POST_LOG, response.data);
            });
    },
    deleteLog: ({ commit }, payload) => {
        axios.post('/logs/delete-log.php', payload)
            .then((response) => {
                commit(types.LOGS_DELETE_LOG, response.data);
            });
    },
    reset: ({ commit }) => {
        commit(types.LOGS_RESET);
    },
    resetMeta: ({ commit }) => {
        commit(types.LOGS_RESET_META);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
