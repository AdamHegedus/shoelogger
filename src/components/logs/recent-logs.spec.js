import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
// import BootstrapVue from 'bootstrap-vue';
import RecentLogs from '@/components/logs/recent-logs';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
// localVue.use(BootstrapVue);

describe('logs.vue', () => {
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
            expect(navigationActions.setNavigation.mock).toMatchSnapshot();
        });
    });

    xdescribe('meta.status is false', () => {
        it('should match snapshot', () => {
            // ASSIGN
            const logsGetters = {
                getMeta: () => {
                    return {
                        status: false,
                        message: 'Error message text.'
                    };
                }
            };

            const logsActions = {
                getShoes: jest.fn(),
                resetMeta: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 100,
                        timestamp: 100
                    }
                ]
            };

            const typesState = {
                types: [
                    {
                        id: 0,
                        type: 'Foo'
                    }
                ]
            };

            const brandsState = {
                brands: [
                    {
                        id: 0,
                        brand: 'Foo'
                    }
                ]
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    brands: {
                        namespaced: true,
                        state: brandsState,
                        actions: brandsActions
                    },
                    types: {
                        namespaced: true,
                        state: typesState,
                        actions: typesActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });
            wrapper.vm.selectShoe(0);

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    xdescribe('selectShoe', () => {
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
                getShoes: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 100,
                        timestamp: 100
                    }
                ]
            };

            const typesState = {
                types: [
                    {
                        id: 0,
                        type: 'Foo'
                    }
                ]
            };

            const brandsState = {
                brands: [
                    {
                        id: 0,
                        brand: 'Foo'
                    }
                ]
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        state: logsState,
                        actions: logsActions
                    },
                    brands: {
                        namespaced: true,
                        state: brandsState,
                        actions: brandsActions
                    },
                    types: {
                        namespaced: true,
                        state: typesState,
                        actions: typesActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });

            // ACT
            wrapper.vm.selectShoe(selectedIndex);

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
                getShoes: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 100,
                        timestamp: 100
                    }
                ]
            };

            const typesState = {
                types: [
                    {
                        id: 0,
                        type: 'Foo'
                    }
                ]
            };

            const brandsState = {
                brands: [
                    {
                        id: 0,
                        brand: 'Foo'
                    }
                ]
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        state: logsState,
                        actions: logsActions
                    },
                    brands: {
                        namespaced: true,
                        state: brandsState,
                        actions: brandsActions
                    },
                    types: {
                        namespaced: true,
                        state: typesState,
                        actions: typesActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });
            wrapper.setData({
                selectedIndex: originalIndex
            });

            // ACT
            wrapper.vm.selectShoe(selectedIndex);

            // ASSERT
            const actual = wrapper.vm.selectedIndex;
            expect(actual).toMatchSnapshot();
        });

        it('should set index when selectedIndex is different', () => {
            // ASSIGN
            const selectedIndex = 0;
            const originalIndex = 1;

            const logsGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const logsActions = {
                getShoes: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 100,
                        timestamp: 100
                    }
                ]
            };

            const typesState = {
                types: [
                    {
                        id: 0,
                        type: 'Foo'
                    }
                ]
            };

            const brandsState = {
                brands: [
                    {
                        id: 0,
                        brand: 'Foo'
                    }
                ]
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        state: logsState,
                        actions: logsActions
                    },
                    brands: {
                        namespaced: true,
                        state: brandsState,
                        actions: brandsActions
                    },
                    types: {
                        namespaced: true,
                        state: typesState,
                        actions: typesActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });
            wrapper.setData({
                selectedIndex: originalIndex
            });

            // ACT
            wrapper.vm.selectShoe(selectedIndex);

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
                        message: 'Error message text.'
                    };
                }
            };

            const logsActions = {
                getShoes: jest.fn(),
                resetMeta: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 100,
                        timestamp: 100
                    }
                ]
            };

            const typesState = {
                types: [
                    {
                        id: 0,
                        type: 'Foo'
                    }
                ]
            };

            const brandsState = {
                brands: [
                    {
                        id: 0,
                        brand: 'Foo'
                    }
                ]
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    brands: {
                        namespaced: true,
                        state: brandsState,
                        actions: brandsActions
                    },
                    types: {
                        namespaced: true,
                        state: typesState,
                        actions: typesActions
                    }
                }
            });
            const wrapper = shallowMount(RecentLogs, { store, localVue });

            // ACT
            wrapper.vm.selectShoe(selectedIndex);

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
                getShoes: jest.fn(),
                resetMeta: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 100,
                        timestamp: 100
                    }
                ]
            };

            const typesState = {
                types: [
                    {
                        id: 0,
                        type: 'Foo'
                    }
                ]
            };

            const brandsState = {
                brands: [
                    {
                        id: 0,
                        brand: 'Foo'
                    }
                ]
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    brands: {
                        namespaced: true,
                        state: brandsState,
                        actions: brandsActions
                    },
                    types: {
                        namespaced: true,
                        state: typesState,
                        actions: typesActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });

            // ACT
            wrapper.vm.selectShoe(selectedIndex);

            // ASSERT
            const actual = logsActions.resetMeta;
            expect(actual).not.toBeCalled();
        });
    });

    xdescribe('newShoe', () => {
        it('should call router', () => {
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
                getShoes: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 100,
                        timestamp: 100
                    }
                ]
            };

            const typesState = {
                types: [
                    {
                        id: 0,
                        type: 'Foo'
                    }
                ]
            };

            const brandsState = {
                brands: [
                    {
                        id: 0,
                        brand: 'Foo'
                    }
                ]
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        state: logsState,
                        actions: logsActions
                    },
                    brands: {
                        namespaced: true,
                        state: brandsState,
                        actions: brandsActions
                    },
                    types: {
                        namespaced: true,
                        state: typesState,
                        actions: typesActions
                    }
                }
            });

            const router = new VueRouter();
            const wrapper = shallowMount(RecentLogs, { store, localVue, router });
            const spy = jest.spyOn(wrapper.vm.$router, 'push');

            // ACT
            wrapper.find('button').trigger('click');

            // ASSERT
            expect(spy.mock.calls).toMatchSnapshot();
        });
    });

    xdescribe('editShoe', () => {
        it('should call router', () => {
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
                getShoes: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 100,
                        timestamp: 100
                    }
                ]
            };

            const typesState = {
                types: [
                    {
                        id: 0,
                        type: 'Foo'
                    }
                ]
            };

            const brandsState = {
                brands: [
                    {
                        id: 0,
                        brand: 'Foo'
                    }
                ]
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        state: logsState,
                        actions: logsActions
                    },
                    brands: {
                        namespaced: true,
                        state: brandsState,
                        actions: brandsActions
                    },
                    types: {
                        namespaced: true,
                        state: typesState,
                        actions: typesActions
                    }
                }
            });

            const router = new VueRouter();
            const wrapper = shallowMount(RecentLogs, { store, localVue, router });
            const spy = jest.spyOn(wrapper.vm.$router, 'push');
            wrapper.vm.selectShoe(0);

            // ACT
            wrapper.find('button.shoe-edit').trigger('click');

            // ASSERT
            expect(spy.mock.calls).toMatchSnapshot();
        });
    });

    xdescribe('deleteShoe', () => {
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
                getShoes: jest.fn(),
                deleteShoe: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const logsState = {
                logs: [
                    {
                        id: 0,
                        product: 'Foo',
                        brand: 'foobar',
                        distance: 100,
                        timestamp: 100
                    }
                ]
            };

            const typesState = {
                types: [
                    {
                        id: 0,
                        type: 'Foo'
                    }
                ]
            };

            const brandsState = {
                brands: [
                    {
                        id: 0,
                        brand: 'Foo'
                    }
                ]
            };

            const store = new Vuex.Store({
                modules: {
                    logs: {
                        namespaced: true,
                        getters: logsGetters,
                        actions: logsActions,
                        state: logsState
                    },
                    brands: {
                        namespaced: true,
                        state: brandsState,
                        actions: brandsActions
                    },
                    types: {
                        namespaced: true,
                        state: typesState,
                        actions: typesActions
                    }
                }
            });

            const wrapper = shallowMount(RecentLogs, { store, localVue });
            wrapper.vm.selectShoe(0);

            // ACT
            wrapper.find('button.shoe-delete').trigger('click');

            // ASSERT
            expect(logsActions.deleteShoe.mock.calls.length).toEqual(1);
            expect(logsActions.deleteShoe.mock.calls[0][1]).toMatchSnapshot();
        });
    });
});
