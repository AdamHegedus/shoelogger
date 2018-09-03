jest.mock('axios', () => {
    return {
        get: jest.fn(() => Promise.resolve({})),
        post: jest.fn(() => Promise.resolve({}))
    };
});
import axios from 'axios';
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

        describe('resetMeta', () => {

            it('should call correct commit', () => {
                // ASSIGN
                const expected = {
                    mock: {
                        calls: [
                            [types.BRANDS_RESET_META]
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

        describe('getBrands', () => {

            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expected = '/brands/get-brands.php';
                const commit = jest.fn();

                // ACT
                component.actions.getBrands({ commit });

                // ASSERT
                expect(axios.get).toBeCalledWith(expected);

            });

        });

        describe('addBrand', () => {

            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expectedUrl = '/brands/post-brand.php';
                const expectedPayload = {
                    foo: 'bar'
                };
                const commit = jest.fn();
                const payload = {
                    foo: 'bar'
                };

                // ACT
                component.actions.addBrand({ commit }, payload);

                // ASSERT
                expect(axios.post).toBeCalledWith(expectedUrl, expectedPayload);

            });

        });

        describe('deleteBrand', () => {

            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expectedUrl = '/brands/delete-brand.php';
                const expectedPayload = {
                    foo: 'bar'
                };
                const commit = jest.fn();
                const payload = {
                    foo: 'bar'
                };

                // ACT
                component.actions.deleteBrand({ commit }, payload);

                // ASSERT
                expect(axios.post).toBeCalledWith(expectedUrl, expectedPayload);

            });

        });

    });

    describe('mutations', () => {

        describe(`${types.BRANDS_RESET}`, () => {

            it('should set state', () => {
                // ASSIGN
                const expected = {
                    brands: [],
                    meta: {
                        message: null,
                        status: false
                    }
                };

                component.state.brands = [
                    {
                        foo: 'bar'
                    }
                ];
                component.state.meta = {
                    message: 'foo',
                    status: true
                };

                // ACT
                component.mutations[types.BRANDS_RESET]();

                // ASSERT
                expect(component.state.brands).toEqual(expected.brands);
                expect(component.state.meta).toEqual(expected.meta);

            });

        });

        describe(`${types.BRANDS_RESET_META}`, () => {

            it('should set state', () => {
                // ASSIGN
                const expected = {
                    meta: {
                        message: null,
                        status: false
                    }
                };
                component.state.brands = [
                    {
                        foo: 'bar'
                    }
                ];
                component.state.meta = {
                    message: 'foo',
                    status: true
                };

                // ACT
                component.mutations[types.BRANDS_RESET_META]();

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);

            });

        });

        describe(`${types.BRANDS_GET_BRANDS}`, () => {

            it('should set state when payload returns array', () => {
                // ASSIGN
                const expected = {
                    brands: [
                        {
                            id: 1,
                            brand: 'foo'
                        },
                        {
                            id: 2,
                            brand: 'bar'
                        },
                        {
                            id: 3,
                            brand: null
                        }
                    ]
                };
                const mockState = {};
                const payload = [
                    {
                        id: '1',
                        brand: 'foo'
                    },
                    {
                        id: '2',
                        brand: 'bar'
                    },
                    {
                        id: '3',
                        brand: null
                    }
                ];

                // ACT
                component.mutations[types.BRANDS_GET_BRANDS](mockState, payload);

                // ASSERT
                expect(component.state.brands).toEqual(expected.brands);

            });

            it('should set state when payload returns null', () => {
                // ASSIGN
                const expected = {
                    brands: []
                };
                const mockState = {};
                const payload = null;

                // ACT
                component.mutations[types.BRANDS_GET_BRANDS](mockState, payload);

                // ASSERT
                expect(component.state.brands).toEqual(expected.brands);

            });

        });

        describe(`${types.BRANDS_POST_BRAND}`, () => {

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
                component.mutations[types.BRANDS_POST_BRAND](mockState, payload);

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
                component.mutations[types.BRANDS_POST_BRAND](mockState, payload);

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
                component.mutations[types.BRANDS_POST_BRAND](mockState, payload);

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);

            });

        });

        describe(`${types.BRANDS_DELETE_BRAND}`, () => {

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
                component.mutations[types.BRANDS_DELETE_BRAND](mockState, payload);

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
                component.mutations[types.BRANDS_DELETE_BRAND](mockState, payload);

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
                component.mutations[types.BRANDS_DELETE_BRAND](mockState, payload);

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);

            });

        });

    });

});
