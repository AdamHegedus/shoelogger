import Types from './types';
import * as types from '../types';

describe('store > modules > types', () => {

    const component = Types;

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

        it('should be empty', () => {
            // ASSIGN
            const expected = {};

            // ACT
            const actual = component.getters;

            // ASSERT
            expect(actual).toEqual(expected);
        });

    });

    describe('state', () => {

        it('should have correct properties', () => {
            // ASSIGN
            const expected = {
                types: []
            };

            // ACT
            const actual = component.state;

            // ASSERT
            expect(actual).toEqual(expected);
            expect(actual.types).toEqual(expected.types);
        });

    });

    describe('actions', () => {

        describe('reset', () => {

            it('should have correct properties', () => {
                // ASSIGN
                const expected = {
                    mock: {
                        calls: [
                            [types.TYPES_RESET]
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
