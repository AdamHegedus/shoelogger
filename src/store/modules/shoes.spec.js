import Shoes from './shoes';
import * as types from '../types';

describe('store > modules > shoes', () => {

    const component = Shoes;

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
                shoes: [],
                meta: {
                    status: false,
                    message: null
                }
            };

            // ACT
            const actual = component.state;

            // ASSERT
            expect(actual).toEqual(expected);
            expect(actual.shoes).toEqual(expected.shoes);
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
                            [types.SHOES_RESET]
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

    });

});
