jest.mock('axios', () => {
    return {
        get: jest.fn(() => Promise.resolve({})),
        post: jest.fn(() => Promise.resolve({}))
    };
});
import axios from 'axios';
import Logs from './logs';
import * as types from '../types';

describe('store > modules > logs', () => {

    const component = Logs;

    describe('namespaced', () => {

        it('should be true', () => {
            // ASSIGN
            const expected = true;

            // ACT
            const actual = component.namespaced;

            // ASSERT
            expect(actual).toEqual(expected);
        });

    });

    describe('getters', () => {

        describe('getMeta', () => {

            it('should return correct data', () => {
                // ASSIGN
                const expected = {
                    status: false,
                    message: null
                };

                const state = {
                    meta: {
                        status: false,
                        message: null
                    }
                };

                // ACT
                const actual = component.getters.getMeta(state);

                // ASSERT
                expect(actual).toEqual(expected);
            });

        });

    });

    describe('state', () => {

        it('should have correct properties', () => {
            // ASSIGN
            const expected = {
                logs: [],
                meta: {
                    status: false,
                    message: null
                }
            };

            // ACT
            const actual = component.state;

            // ASSERT
            expect(actual).toEqual(expected);
            expect(actual.logs).toEqual(expected.logs);
            expect(actual.meta).toEqual(expected.meta);
            expect(actual.meta.status).toEqual(expected.meta.status);
            expect(actual.meta.message).toEqual(expected.meta.message);
        });

    });

    describe('actions', () => {

        describe('reset', () => {

            it('should call correct commit', () => {
                // ASSIGN
                const expected = {
                    mock: {
                        calls: [
                            [types.LOGS_RESET]
                        ]
                    }
                };

                const commit = jest.fn();

                // ACT
                component.actions.reset({ commit });

                // ASSERT
                expect(commit.mock.calls.length).toEqual(expected.mock.calls.length);
                expect(commit.mock.calls[0][0]).toEqual(expected.mock.calls[0][0]);
            });

        });

        describe('resetMeta', () => {

            it('should call correct commit', () => {
                // ASSIGN
                const expected = {
                    mock: {
                        calls: [
                            [types.LOGS_RESET_META]
                        ]
                    }
                };

                const commit = jest.fn();

                // ACT
                component.actions.resetMeta({ commit });

                // ASSERT
                expect(commit.mock.calls.length).toEqual(expected.mock.calls.length);
                expect(commit.mock.calls[0][0]).toEqual(expected.mock.calls[0][0]);
            });

        });

        describe('getLogs', () => {

            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expected = '/logs/get-logs.php';
                const commit = jest.fn();

                // ACT
                component.actions.getLogs({ commit });

                // ASSERT
                expect(axios.get).toBeCalledWith(expected);

            });

        });

        describe('addLog', () => {

            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expectedUrl = '/logs/post-log.php';
                const expectedPayload = {
                    foo: 'bar'
                };
                const commit = jest.fn();
                const payload = {
                    foo: 'bar'
                };

                // ACT
                component.actions.addLog({ commit }, payload);

                // ASSERT
                expect(axios.post).toBeCalledWith(expectedUrl, expectedPayload);

            });

        });

        describe('deleteLog', () => {

            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expectedUrl = '/logs/delete-log.php';
                const expectedPayload = {
                    foo: 'bar'
                };
                const commit = jest.fn();
                const payload = {
                    foo: 'bar'
                };

                // ACT
                component.actions.deleteLog({ commit }, payload);

                // ASSERT
                expect(axios.post).toBeCalledWith(expectedUrl, expectedPayload);

            });

        });

    });

    describe('mutations', () => {

        describe(`${types.LOGS_RESET}`, () => {

            it('should set state', () => {
                // ASSIGN
                const expected = {
                    logs: [],
                    meta: {
                        message: null,
                        status: false
                    }
                };

                component.state.logs = [
                    {
                        foo: 'bar'
                    }
                ];
                component.state.meta = {
                    message: 'foo',
                    status: true
                };

                // ACT
                component.mutations[types.LOGS_RESET]();

                // ASSERT
                expect(component.state.logs).toEqual(expected.logs);
                expect(component.state.meta).toEqual(expected.meta);

            });

        });

        describe(`${types.LOGS_RESET_META}`, () => {

            it('should set state', () => {
                // ASSIGN
                const expected = {
                    meta: {
                        message: null,
                        status: false
                    }
                };
                component.state.logs = [
                    {
                        foo: 'bar'
                    }
                ];
                component.state.meta = {
                    message: 'foo',
                    status: true
                };

                // ACT
                component.mutations[types.LOGS_RESET_META]();

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);

            });

        });

        describe(`${types.LOGS_GET_LOGS}`, () => {

            it('should set state when payload returns array', () => {
                // ASSIGN
                const expected = {
                    logs: [
                        {
                            id: 1,
                            brand: 'foo',
                            type: 'running',
                            product: 'FOO',
                            distance: 100,
                            date: '2000-01-01',
                            timestamp: '2018-09-22 00:00:00'
                        },
                        {
                            id: 2,
                            brand: 'bar',
                            type: 'walking',
                            product: 'BAR',
                            distance: 10,
                            date: '2000-01-01',
                            timestamp: '2018-09-22 06:00:00'
                        },
                        {
                            id: 3,
                            brand: null,
                            type: 'running',
                            product: 'foo-bar',
                            distance: 0,
                            date: '2000-01-01',
                            timestamp: '2018-09-20 00:00:00'
                        }
                    ]
                };
                const mockState = {};
                const payload = [
                    {
                        id: '1',
                        brand: 'foo',
                        type: 'running',
                        product: 'FOO',
                        distance: '100',
                        date: '2000-01-01',
                        timestamp: '2018-09-22 00:00:00'
                    },
                    {
                        id: '2',
                        brand: 'bar',
                        type: 'walking',
                        product: 'BAR',
                        distance: '10',
                        date: '2000-01-01',
                        timestamp: '2018-09-22 06:00:00'
                    },
                    {
                        id: '3',
                        brand: null,
                        type: 'running',
                        product: 'foo-bar',
                        distance: null,
                        date: '2000-01-01',
                        timestamp: '2018-09-20 00:00:00'
                    }
                ];

                // ACT
                component.mutations[types.LOGS_GET_LOGS](mockState, payload);

                // ASSERT
                expect(component.state.logs).toEqual(expected.logs);

            });

            it('should set state when payload returns null', () => {
                // ASSIGN
                const expected = {
                    logs: []
                };
                const mockState = {};
                const payload = null;

                // ACT
                component.mutations[types.LOGS_GET_LOGS](mockState, payload);

                // ASSERT
                expect(component.state.logs).toEqual(expected.logs);

            });

            it('should set state when payload returns undefined', () => {
                // ASSIGN
                const expected = {
                    logs: []
                };
                const mockState = {};
                const payload = undefined;

                // ACT
                component.mutations[types.LOGS_GET_LOGS](mockState, payload);

                // ASSERT
                expect(component.state.logs).toEqual(expected.logs);

            });

        });

        describe(`${types.LOGS_POST_LOG}`, () => {

            it('should set state when payload returns valid data', () => {
                // ASSIGN
                const expected = {
                    meta: {
                        status: true,
                        message: null
                    }
                };
                const mockState = {};
                const payload = {
                    data: {}
                };

                // ACT
                component.mutations[types.LOGS_POST_LOG](mockState, payload);

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);

            });

            it('should set state when payload returns null data', () => {
                // ASSIGN
                const meta = 'foo';
                const expected = {
                    meta: {
                        status: false,
                        message: meta
                    }
                };
                const mockState = {};
                const payload = {
                    data: null,
                    meta
                };

                // ACT
                component.mutations[types.LOGS_POST_LOG](mockState, payload);

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);

            });

            it('should set state when payload returns undefined data', () => {
                // ASSIGN
                const meta = 'foo';
                const expected = {
                    meta: {
                        status: false,
                        message: meta
                    }
                };
                const mockState = {};
                const payload = {
                    data: undefined,
                    meta
                };

                // ACT
                component.mutations[types.LOGS_POST_LOG](mockState, payload);

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);

            });

        });

        describe(`${types.LOGS_DELETE_LOG}`, () => {

            it('should set state when payload returns valid data', () => {
                // ASSIGN
                const expected = {
                    meta: {
                        status: true,
                        message: null
                    }
                };
                const mockState = {};
                const payload = {
                    data: {}
                };

                // ACT
                component.mutations[types.LOGS_DELETE_LOG](mockState, payload);

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);

            });

            it('should set state when payload returns null data', () => {
                // ASSIGN
                const meta = 'foo';
                const expected = {
                    meta: {
                        status: false,
                        message: meta
                    }
                };
                const mockState = {};
                const payload = {
                    data: null,
                    meta
                };

                // ACT
                component.mutations[types.LOGS_DELETE_LOG](mockState, payload);

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);

            });

            it('should set state when payload returns undefined data', () => {
                // ASSIGN
                const meta = 'foo';
                const expected = {
                    meta: {
                        status: false,
                        message: meta
                    }
                };
                const mockState = {};
                const payload = {
                    data: undefined,
                    meta
                };

                // ACT
                component.mutations[types.LOGS_DELETE_LOG](mockState, payload);

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);

            });

        });

    });

});
