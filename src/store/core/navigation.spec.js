import Navigation from './navigation';
import * as types from '../types';

describe('store > core > navigation', () => {

    const component = Navigation;

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
                menu: {
                    shoes: {},
                    logs: {
                        lastPage: null
                    },
                    brands: {}
                }
            };

            // ACT
            const actual = component.state;

            // ASSERT
            expect(actual).toEqual(expected);
            expect(actual.menu).toEqual(expected.menu);
        });

    });

    describe('actions', () => {

        describe('setNavigation', () => {

            it('should call correct commit', () => {
                // ASSIGN
                const expected = {
                    mock: {
                        calls: [
                            [types.CORE_NAVIGATION_SET]
                        ]
                    },
                    payload: 'foo'
                };

                const commit = jest.fn();
                const payload = 'foo';

                // ACT
                component.actions.setNavigation({ commit }, payload);

                // ASSERT
                expect(commit.mock.calls.length).toEqual(expected.mock.calls.length);
                expect(commit.mock.calls[0][0]).toEqual(expected.mock.calls[0][0]);
            });

        });

    });

    describe('mutations', () => {

        describe(`${types.CORE_NAVIGATION_SET}`, () => {

            it('should set state when payload is null', () => {
                // ASSIGN
                const expected = {
                    menu: {
                        shoes: {},
                        logs: {
                            lastPage: null
                        },
                        brands: {}
                    }
                };

                const mockState = {};
                const payload = null;

                // ACT
                component.mutations[types.CORE_NAVIGATION_SET](mockState, payload);

                // ASSERT
                expect(component.state.menu).toEqual(expected.menu);

            });

            it('should set state when payload is undefined', () => {
                // ASSIGN
                const expected = {
                    menu: {
                        shoes: {},
                        logs: {
                            lastPage: null
                        },
                        brands: {}
                    }
                };

                const mockState = {};
                const payload = undefined;

                // ACT
                component.mutations[types.CORE_NAVIGATION_SET](mockState, payload);

                // ASSERT
                expect(component.state.menu).toEqual(expected.menu);

            });

            it('should set state when payload is string', () => {
                // ASSIGN
                const expected = {
                    menu: {
                        shoes: {},
                        logs: {
                            lastPage: 'foo'
                        },
                        brands: {}
                    }
                };

                const mockState = {};
                const payload = 'foo';

                // ACT
                component.mutations[types.CORE_NAVIGATION_SET](mockState, payload);

                // ASSERT
                expect(component.state.menu).toEqual(expected.menu);

            });

            it('should set state when payload is object', () => {
                // ASSIGN
                const expected = {
                    menu: {
                        shoes: {},
                        logs: {
                            lastPage: null
                        },
                        brands: {}
                    }
                };

                const mockState = {};
                const payload = {};

                // ACT
                component.mutations[types.CORE_NAVIGATION_SET](mockState, payload);

                // ASSERT
                expect(component.state.menu).toEqual(expected.menu);

            });

        });

    });

});
