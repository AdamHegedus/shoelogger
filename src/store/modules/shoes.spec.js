import axios from 'axios';
import Shoes from './shoes';
import * as types from '../types';

jest.mock('axios', () => {
    return {
        get: jest.fn(() => { return Promise.resolve({}); }),
        post: jest.fn(() => { return Promise.resolve({}); })
    };
});

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
                shoe: null,
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
            expect(actual.shoe).toEqual(expected.shoe);
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
                            [types.SHOES_RESET_META]
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

        describe('getShoes', () => {
            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expected = '/shoes/get-shoes.php';
                const commit = jest.fn();

                // ACT
                component.actions.getShoes({ commit });

                // ASSERT
                expect(axios.get).toBeCalledWith(expected);
            });
        });

        describe('addShoe', () => {
            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expectedUrl = '/shoes/post-shoe.php';
                const expectedPayload = {
                    foo: 'bar'
                };
                const commit = jest.fn();
                const payload = {
                    foo: 'bar'
                };

                // ACT
                component.actions.addShoe({ commit }, payload);

                // ASSERT
                expect(axios.post).toBeCalledWith(expectedUrl, expectedPayload);
            });
        });

        describe('getShoesById', () => {
            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expectedUrl = '/shoes/get-shoes-by-id.php';
                const expectedPayload = {
                    foo: 'bar'
                };
                const commit = jest.fn();
                const payload = {
                    foo: 'bar'
                };

                // ACT
                component.actions.getShoesById({ commit }, payload);

                // ASSERT
                expect(axios.post).toBeCalledWith(expectedUrl, expectedPayload);
            });
        });

        describe('editShoe', () => {
            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expectedUrl = '/shoes/put-shoe.php';
                const expectedPayload = {
                    foo: 'bar'
                };
                const commit = jest.fn();
                const payload = {
                    foo: 'bar'
                };

                // ACT
                component.actions.editShoe({ commit }, payload);

                // ASSERT
                expect(axios.post).toBeCalledWith(expectedUrl, expectedPayload);
            });
        });

        describe('deleteShoe', () => {
            it('should call axios with the correct endpoint', () => {
                // ASSIGN
                const expectedUrl = '/shoes/delete-shoe.php';
                const expectedPayload = {
                    foo: 'bar'
                };
                const commit = jest.fn();
                const payload = {
                    foo: 'bar'
                };

                // ACT
                component.actions.deleteShoe({ commit }, payload);

                // ASSERT
                expect(axios.post).toBeCalledWith(expectedUrl, expectedPayload);
            });
        });
    });

    describe('mutations', () => {
        describe(`${types.SHOES_RESET}`, () => {
            it('should set state', () => {
                // ASSIGN
                const expected = {
                    shoes: [],
                    meta: {
                        message: null,
                        status: false
                    }
                };

                component.state.shoes = [
                    {
                        foo: 'bar'
                    }
                ];
                component.state.meta = {
                    message: 'foo',
                    status: true
                };

                // ACT
                component.mutations[types.SHOES_RESET]();

                // ASSERT
                expect(component.state.shoes).toEqual(expected.shoes);
                expect(component.state.meta).toEqual(expected.meta);
            });
        });

        describe(`${types.SHOES_RESET_META}`, () => {
            it('should set state', () => {
                // ASSIGN
                const expected = {
                    meta: {
                        message: null,
                        status: false
                    }
                };
                component.state.shoes = [
                    {
                        foo: 'bar'
                    }
                ];
                component.state.meta = {
                    message: 'foo',
                    status: true
                };

                // ACT
                component.mutations[types.SHOES_RESET_META]();

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);
            });
        });

        describe(`${types.SHOES_GET_SHOES}`, () => {
            it('should set state when payload returns array', () => {
                // ASSIGN
                const expected = {
                    shoes: [
                        {
                            id: 1,
                            brand: 'foo',
                            type: 'running',
                            product: 'FOO',
                            distance: 100,
                            timestamp: '2018-09-20 06:08:31'
                        },
                        {
                            id: 2,
                            brand: 'bar',
                            type: 'walking',
                            product: 'BAR',
                            distance: 10,
                            timestamp: '2018-09-22 00:00:00'
                        },
                        {
                            id: 3,
                            brand: null,
                            type: 'running',
                            product: 'foo-bar',
                            distance: 0,
                            timestamp: '2018-09-22 06:08:31'
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
                        timestamp: '2018-09-20 06:08:31'
                    },
                    {
                        id: '2',
                        brand: 'bar',
                        type: 'walking',
                        product: 'BAR',
                        distance: '10',
                        timestamp: '2018-09-22 00:00:00'
                    },
                    {
                        id: '3',
                        brand: null,
                        type: 'running',
                        product: 'foo-bar',
                        distance: null,
                        timestamp: '2018-09-22 06:08:31'
                    }
                ];

                // ACT
                component.mutations[types.SHOES_GET_SHOES](mockState, payload);

                // ASSERT
                expect(component.state.shoes).toEqual(expected.shoes);
            });

            it('should set state when payload returns null', () => {
                // ASSIGN
                const expected = {
                    shoes: []
                };
                const mockState = {};
                const payload = null;

                // ACT
                component.mutations[types.SHOES_GET_SHOES](mockState, payload);

                // ASSERT
                expect(component.state.shoes).toEqual(expected.shoes);
            });

            it('should set state when payload returns undefined', () => {
                // ASSIGN
                const expected = {
                    shoes: []
                };
                const mockState = {};
                const payload = undefined;

                // ACT
                component.mutations[types.SHOES_GET_SHOES](mockState, payload);

                // ASSERT
                expect(component.state.shoes).toEqual(expected.shoes);
            });
        });

        describe(`${types.SHOES_GET_SHOES_BY_ID}`, () => {
            it('should set state when payload returns valid data', () => {
                // ASSIGN
                const expected = {
                    shoe: {
                        brandId: 1,
                        id: 0,
                        product: 'Foo Bar',
                        typeId: 2
                    }
                };
                const mockState = {};
                const payload = {
                    data: [
                        {
                            id: '0',
                            brandId: '1',
                            typeId: '2',
                            product: 'Foo Bar'
                        }
                    ]
                };

                // ACT
                component.mutations[types.SHOES_GET_SHOES_BY_ID](mockState, payload);

                // ASSERT
                expect(component.state.shoe).toEqual(expected.shoe);
            });

            it('should set state when payload returns null data', () => {
                // ASSIGN
                const expected = {
                    shoe: null
                };
                const mockState = {};
                const payload = {
                    data: null
                };

                // ACT
                component.mutations[types.SHOES_GET_SHOES_BY_ID](mockState, payload);

                // ASSERT
                expect(component.state.shoe).toEqual(expected.shoe);
            });

            it('should set state when payload returns undefined data', () => {
                // ASSIGN
                const expected = {
                    shoe: null
                };
                const mockState = {};
                const payload = {
                    data: undefined
                };

                // ACT
                component.mutations[types.SHOES_GET_SHOES_BY_ID](mockState, payload);

                // ASSERT
                expect(component.state.shoe).toEqual(expected.shoe);
            });
        });

        describe(`${types.SHOES_POST_SHOE}`, () => {
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
                component.mutations[types.SHOES_POST_SHOE](mockState, payload);

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
                component.mutations[types.SHOES_POST_SHOE](mockState, payload);

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
                component.mutations[types.SHOES_POST_SHOE](mockState, payload);

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);
            });
        });

        describe(`${types.SHOES_PUT_SHOE}`, () => {
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
                component.mutations[types.SHOES_PUT_SHOE](mockState, payload);

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
                component.mutations[types.SHOES_PUT_SHOE](mockState, payload);

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
                component.mutations[types.SHOES_PUT_SHOE](mockState, payload);

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);
            });
        });

        describe(`${types.SHOES_DELETE_SHOE}`, () => {
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
                component.mutations[types.SHOES_DELETE_SHOE](mockState, payload);

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
                component.mutations[types.SHOES_DELETE_SHOE](mockState, payload);

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
                component.mutations[types.SHOES_DELETE_SHOE](mockState, payload);

                // ASSERT
                expect(component.state.meta).toEqual(expected.meta);
            });
        });
    });
});
