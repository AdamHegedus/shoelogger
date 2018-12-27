import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import LogsByShoes from '@/components/logs/logs-by-shoes';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('logs-by-shoes.vue', () => {
    describe('on init', () => {
        it('should render component', () => {
            // ASSIGN
            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Bar',
                        brand: 'Foo',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Bar',
                        brand: 'Foo',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Test',
                        brand: 'Foo',
                        distance: 3,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const shoesState = {
                shoes: [
                    {
                        id: 0,
                        brand: 'Foo',
                        product: 'Bar'
                    },
                    {
                        id: 1,
                        brand: 'Foo',
                        product: 'Test'
                    }
                ]
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions,
                        state: shoesState
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            // ACT
            const wrapper = shallowMount(LogsByShoes, { store, localVue });

            // ASSERT
            expect(wrapper.vm.selectedShoe).toMatchSnapshot();
            expect(wrapper.element).toMatchSnapshot();
            expect(navigationActions.setNavigation.mock.calls[0][1]).toMatchSnapshot();
            expect(shoesActions.getShoes).toBeCalled();
        });
    });

    describe('getShoeDisplayValue', () => {
        it('should set selected shoe', () => {
            // ASSIGN
            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Bar',
                        brand: 'Foo',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Bar',
                        brand: 'Foo',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Test',
                        brand: 'Foo',
                        distance: 3,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const shoesState = {
                shoes: [
                    {
                        id: 0,
                        brand: 'Foo',
                        product: 'Bar'
                    },
                    {
                        id: 1,
                        brand: 'Foo',
                        product: 'Test'
                    }
                ]
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions,
                        state: shoesState
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(LogsByShoes, { store, localVue });
            const input = {
                id: 0,
                brand: 'Foo',
                product: 'Bar'
            };

            // ACT
            const actual = wrapper.vm.getShoeDisplayValue(input);

            // ASSERT
            expect(actual).toMatchSnapshot();
            expect(wrapper.element).toMatchSnapshot();
        });
    });

    describe('getLogsByProduct', () => {
        it('should return filtered list', () => {
            // ASSIGN
            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Bar',
                        brand: 'Foo',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Bar',
                        brand: 'Foo',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Test',
                        brand: 'Foo',
                        distance: 3,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const shoesState = {
                shoes: [
                    {
                        id: 0,
                        brand: 'Foo',
                        product: 'Bar'
                    },
                    {
                        id: 1,
                        brand: 'Foo',
                        product: 'Test'
                    }
                ]
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions,
                        state: shoesState
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(LogsByShoes, { store, localVue });
            const product = 'Bar';

            // ACT
            const actual = wrapper.vm.getLogsByProduct(product);

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('deleteLog', () => {
        it('should call action', () => {
            // ASSIGN
            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Bar',
                        brand: 'Foo',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Bar',
                        brand: 'Foo',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Test',
                        brand: 'Foo',
                        distance: 3,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const shoesState = {
                shoes: [
                    {
                        id: 0,
                        brand: 'Foo',
                        product: 'Bar'
                    },
                    {
                        id: 1,
                        brand: 'Foo',
                        product: 'Test'
                    }
                ]
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions,
                        state: shoesState
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(LogsByShoes, { store, localVue });
            const input = 0;

            // ACT
            wrapper.vm.deleteLog(input);

            // ASSERT
            expect(logsActions.deleteLog.mock.calls[0][1]).toMatchSnapshot();
        });
    });

    describe('columnDefinitions', () => {
        it('should return correct value', () => {
            // ASSIGN
            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Bar',
                        brand: 'Foo',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Bar',
                        brand: 'Foo',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Test',
                        brand: 'Foo',
                        distance: 3,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const shoesState = {
                shoes: [
                    {
                        id: 0,
                        brand: 'Foo',
                        product: 'Bar'
                    },
                    {
                        id: 1,
                        brand: 'Foo',
                        product: 'Test'
                    }
                ]
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions,
                        state: shoesState
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(LogsByShoes, { store, localVue });

            // ACT
            const actual = wrapper.vm.columnDefinitions;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });
});
