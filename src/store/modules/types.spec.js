import axios from 'axios';
import Types from './types';
import * as types from '../types';

jest.mock('axios', () => {
    return {
        get: jest.fn(() => { return Promise.resolve({}); }),
        post: jest.fn(() => { return Promise.resolve({}); })
    };
});

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
            it('should call correct commit', () => {
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
                expect(commit.mock.calls.length).toEqual(expected.mock.calls.length);
                expect(commit.mock.calls[0][0]).toEqual(expected.mock.calls[0][0]);
            });
        });

        describe('getTypes', () => {
            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expected = '/types/get-types.php';
                const commit = jest.fn();

                // ACT
                component.actions.getTypes({ commit });

                // ASSERT
                expect(axios.get).toBeCalledWith(expected);
            });
        });

        describe('mutations', () => {
            describe(`${types.TYPES_RESET}`, () => {
                it('should set state', () => {
                    // ASSIGN
                    const expected = {
                        types: []
                    };

                    component.state.types = [
                        {
                            foo: 'bar'
                        }
                    ];

                    // ACT
                    component.mutations[types.TYPES_RESET]();

                    // ASSERT
                    expect(component.state.types).toEqual(expected.types);
                });
            });

            describe(`${types.TYPES_GET_TYPES}`, () => {
                it('should set state when payload returns array', () => {
                    // ASSIGN
                    const expected = {
                        types: [
                            {
                                id: 1,
                                type: 'foo'
                            },
                            {
                                id: 2,
                                type: 'bar'
                            },
                            {
                                id: 3,
                                type: null
                            }
                        ]
                    };
                    const mockState = {};
                    const payload = [
                        {
                            id: '1',
                            type: 'foo'
                        },
                        {
                            id: '2',
                            type: 'bar'
                        },
                        {
                            id: '3',
                            type: null
                        }
                    ];

                    // ACT
                    component.mutations[types.TYPES_GET_TYPES](mockState, payload);

                    // ASSERT
                    expect(component.state.types).toEqual(expected.types);
                });

                it('should set state when payload returns null', () => {
                    // ASSIGN
                    const expected = {
                        types: []
                    };
                    const mockState = {};
                    const payload = null;

                    // ACT
                    component.mutations[types.TYPES_GET_TYPES](mockState, payload);

                    // ASSERT
                    expect(component.state.types).toEqual(expected.types);
                });

                it('should set state when payload returns undefined', () => {
                    // ASSIGN
                    const expected = {
                        types: []
                    };
                    const mockState = {};
                    const payload = undefined;

                    // ACT
                    component.mutations[types.TYPES_GET_TYPES](mockState, payload);

                    // ASSERT
                    expect(component.state.types).toEqual(expected.types);
                });
            });
        });
    });
});
