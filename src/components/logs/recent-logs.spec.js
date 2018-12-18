import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import RecentLogs from '@/components/logs/recent-logs';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('recent-logs.vue', () => {
    describe('meta.status is true', () => {
        it('should match snapshot', () => {
            // ASSIGN
            const logsGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 3,
                        timestamp: 100
                    },
                    {
                        id: 3,
                        product: 'Bar',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 4,
                        product: 'Bar',
                        brand: 'foobar',
                        distance: 5,
                        timestamp: 100
                    },
                    {
                        id: 5,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 6,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 5,
                        timestamp: 100
                    },
                    {
                        id: 7,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 5,
                        timestamp: 100
                    },
                    {
                        id: 8,
                        product: 'Bar',
                        brand: 'foobar',
                        distance: 5,
                        timestamp: 100
                    },
                    {
                        id: 9,
                        product: 'bar',
                        brand: 'foobar',
                        distance: 10,
                        timestamp: 100
                    },
                    {
                        id: 10,
                        product: 'Bar',
                        brand: 'foobar',
                        distance: 50,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });
            wrapper.vm.selectLog(0);

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
            expect(navigationActions.setNavigation.mock.calls[0][1]).toMatchSnapshot();
        });
    });

    describe('meta.status is false', () => {
        it('should match snapshot', () => {
            // ASSIGN
            const logsGetters = {
                getMeta: () => {
                    return {
                        status: false,
                        message: 'Error message text'
                    };
                }
            };

            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 3,
                        timestamp: 100
                    },
                    {
                        id: 3,
                        product: 'Bar',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 4,
                        product: 'Bar',
                        brand: 'foobar',
                        distance: 5,
                        timestamp: 100
                    },
                    {
                        id: 5,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 6,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 5,
                        timestamp: 100
                    },
                    {
                        id: 7,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 5,
                        timestamp: 100
                    },
                    {
                        id: 8,
                        product: 'Bar',
                        brand: 'foobar',
                        distance: 5,
                        timestamp: 100
                    },
                    {
                        id: 9,
                        product: 'bar',
                        brand: 'foobar',
                        distance: 10,
                        timestamp: 100
                    },
                    {
                        id: 10,
                        product: 'Bar',
                        brand: 'foobar',
                        distance: 50,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });
            wrapper.vm.selectLog(0);

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
            expect(navigationActions.setNavigation.mock.calls[0][1]).toMatchSnapshot();
        });
    });


    describe('selectLog', () => {
        it('should set index when selectedIndex is unset', () => {
            // ASSIGN
            const selectedIndex = 0;

            const logsGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 3,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });

            // ACT
            wrapper.vm.selectLog(selectedIndex);

            // ASSERT
            const actual = wrapper.vm.selectedIndex;
            expect(actual).toMatchSnapshot();
        });

        it('should set index when selectedIndex is the same', () => {
            // ASSIGN
            const selectedIndex = 0;
            const originalIndex = 0;

            const logsGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 3,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });
            wrapper.setData({
                selectedIndex: originalIndex
            });

            // ACT
            wrapper.vm.selectLog(selectedIndex);

            // ASSERT
            const actual = wrapper.vm.selectedIndex;
            expect(actual).toMatchSnapshot();
        });

        it('should set index when selectedIndex is different', () => {
            // ASSIGN
            const selectedIndex = 1;
            const originalIndex = 0;

            const logsGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 3,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });
            wrapper.setData({
                selectedIndex: originalIndex
            });

            // ACT
            wrapper.vm.selectLog(selectedIndex);

            // ASSERT
            const actual = wrapper.vm.selectedIndex;
            expect(actual).toMatchSnapshot();
        });

        it('should call resetMeta when meta.status is false', () => {
            // ASSIGN
            const selectedIndex = 0;
            const logsGetters = {
                getMeta: () => {
                    return {
                        status: false,
                        message: null
                    };
                }
            };

            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 3,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });
            // ACT
            wrapper.vm.selectLog(selectedIndex);

            // ASSERT
            const actual = logsActions.resetMeta;
            expect(actual).toBeCalled();
        });


        it('should not call resetMeta when meta.status is true', () => {
            // ASSIGN
            const selectedIndex = 0;

            const logsGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 3,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });

            // ACT
            wrapper.vm.selectLog(selectedIndex);

            // ASSERT
            const actual = logsActions.resetMeta;
            expect(actual).not.toBeCalled();
        });
    });

    describe('deleteLog', () => {
        it('should call event', () => {
            // ASSIGN
            const logsGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const logsActions = {
                getLogs: jest.fn(),
                deleteLog: jest.fn(),
                resetMeta: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 1,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 1,
                        timestamp: 100
                    },
                    {
                        id: 2,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 3,
                        timestamp: 100
                    }
                ]
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const navigationActions = {
                setNavigation: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions
                    },
                    navigation: {
                        namespaced: true,
                        actions: navigationActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });
            wrapper.vm.selectLog(0);

            // ACT
            wrapper.find('button.log-delete').trigger('click');

            // ASSERT
            expect(logsActions.deleteLog.mock.calls.length).toEqual(1);
            expect(logsActions.deleteLog.mock.calls[0][1]).toMatchSnapshot();
        });
    });
});
