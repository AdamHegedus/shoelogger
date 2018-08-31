import Brands from './brands';
import * as types from '../types';

describe('store > modules > brands', () => {

    const component = Brands;

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
                brands: [],
                meta: {
                    status: false,
                    message: null
                }
            };

            // ACT
            const actual = component.state;

            // ASSERT
            expect(actual).toEqual(expected);
            expect(actual.brands).toEqual(expected.brands);
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
                            [types.BRANDS_RESET]
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
