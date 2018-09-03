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
                // expect(actual).toEqual(expected);
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
                // expect(actual).toEqual(expected);
                expect(commit.mock.calls.length).toEqual(expected.mock.calls.length);
                expect(commit.mock.calls[0][0]).toEqual(expected.mock.calls[0][0]);
            });

        });

    });

});
