import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Shoes from '@/components/shoes/shoes';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
localVue.use(BootstrapVue);

describe('shoes.vue', () => {
    describe('meta.status is false', () => {
        const shoesGetters = {
            getMeta: () => {
                return {
                    status: false,
                    message: 'Error message text.'
                };
            }
        };

        const shoesActions = {
            getShoes: jest.fn()
        };

        const brandsActions = {
            getBrands: jest.fn()
        };

        const typesActions = {
            getTypes: jest.fn()
        };

        const shoesState = {
            shoes: [
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
                shoes: {
                    namespaced: true,
                    getters: shoesGetters,
                    actions: shoesActions,
                    state: shoesState
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

        it('should match snapshot when page loaded', () => {
            // ASSIGN
            const wrapper = shallowMount(Shoes, { store, localVue });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('DOM events', () => {
        const shoesGetters = {
            getMeta: () => {
                return {
                    status: false,
                    message: 'Error message text.'
                };
            }
        };

        const shoesActions = {
            getShoes: jest.fn(),
            deleteShoe: jest.fn(),
            resetMeta: jest.fn()
        };

        const brandsActions = {
            getBrands: jest.fn()
        };

        const typesActions = {
            getTypes: jest.fn()
        };

        const shoesState = {
            shoes: [
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
                shoes: {
                    namespaced: true,
                    getters: shoesGetters,
                    actions: shoesActions,
                    state: shoesState
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

        it('should call router when \'new\' button clicked', () => {
            // ASSIGN
            const router = new VueRouter();
            const wrapper = shallowMount(Shoes, { store, localVue, router });
            const spy = jest.spyOn(wrapper.vm.$router, 'push');

            // ACT
            wrapper.find('button').trigger('click');

            // ASSERT
            expect(spy.mock.calls).toMatchSnapshot();
        });

        it('should call event when \'delete\' button clicked meta false', () => {
            // ASSIGN
            const wrapper = shallowMount(Shoes, { store, localVue });
            wrapper.vm.selectShoe(0);

            // ACT
            wrapper.find('button.shoe-action').trigger('click');

            // ASSERT
            expect(shoesActions.deleteShoe.mock.calls).toMatchSnapshot();
        });

        it('should call event when \'delete\' button clicked meta true', () => {
            // ASSIGN
            shoesGetters.getMeta = () => {
                return {
                    status: true,
                    message: null
                };
            };
            const wrapper = shallowMount(Shoes, { store, localVue });
            wrapper.vm.selectShoe(0);

            // ACT
            wrapper.find('button.shoe-action').trigger('click');

            // ASSERT
            expect(shoesActions.deleteShoe.mock.calls).toMatchSnapshot();
        });
    });

    xdescribe('meta.status is true', () => {
        const shoesGetters = {
            getMeta: () => {
                return {
                    status: true,
                    message: null
                };
            }
        };

        const shoesActions = {
            addShoe: jest.fn()
        };

        const brandsActions = {
            getBrands: jest.fn()
        };

        const typesActions = {
            getTypes: jest.fn()
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
                shoes: {
                    namespaced: true,
                    getters: shoesGetters,
                    actions: shoesActions
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

        it('should match snapshot when page loaded', () => {
            // ASSIGN
            const wrapper = shallowMount(Shoes, { store, localVue });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('selectShoe', () => {
        it('should set index when selectedIndex is unset', () => {
            // ASSIGN
            const selectedIndex = 0;

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: false,
                        message: 'Error message text.'
                    };
                }
            };

            const shoesActions = {
                getShoes: jest.fn(),
                deleteShoe: jest.fn(),
                resetMeta: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const shoesState = {
                shoes: [
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
                    shoes: {
                        namespaced: true,
                        getters: shoesGetters,
                        actions: shoesActions,
                        state: shoesState
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

            const wrapper = shallowMount(Shoes, { store, localVue });

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

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: false,
                        message: 'Error message text.'
                    };
                }
            };

            const shoesActions = {
                getShoes: jest.fn(),
                deleteShoe: jest.fn(),
                resetMeta: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const shoesState = {
                shoes: [
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
                    shoes: {
                        namespaced: true,
                        getters: shoesGetters,
                        actions: shoesActions,
                        state: shoesState
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

            const wrapper = shallowMount(Shoes, { store, localVue });
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

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: false,
                        message: 'Error message text.'
                    };
                }
            };

            const shoesActions = {
                getShoes: jest.fn(),
                deleteShoe: jest.fn(),
                resetMeta: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const shoesState = {
                shoes: [
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
                    shoes: {
                        namespaced: true,
                        getters: shoesGetters,
                        actions: shoesActions,
                        state: shoesState
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

            const wrapper = shallowMount(Shoes, { store, localVue });
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
            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: false,
                        message: 'Error message text.'
                    };
                }
            };

            const shoesActions = {
                getShoes: jest.fn(),
                deleteShoe: jest.fn(),
                resetMeta: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const shoesState = {
                shoes: [
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
                    shoes: {
                        namespaced: true,
                        getters: shoesGetters,
                        actions: shoesActions,
                        state: shoesState
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
            const wrapper = shallowMount(Shoes, { store, localVue });

            // ACT
            wrapper.vm.selectShoe(selectedIndex);

            // ASSERT
            const actual = shoesActions.resetMeta;
            expect(actual).toBeCalled();
        });


        it('should not call resetMeta when meta.status is true', () => {
            // ASSIGN
            const selectedIndex = 0;
            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const shoesActions = {
                getShoes: jest.fn(),
                deleteShoe: jest.fn(),
                resetMeta: jest.fn()
            };

            const brandsActions = {
                getBrands: jest.fn()
            };

            const typesActions = {
                getTypes: jest.fn()
            };

            const shoesState = {
                shoes: [
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
                    shoes: {
                        namespaced: true,
                        getters: shoesGetters,
                        actions: shoesActions,
                        state: shoesState
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

            const wrapper = shallowMount(Shoes, { store, localVue });

            // ACT
            wrapper.vm.selectShoe(selectedIndex);

            // ASSERT
            const actual = shoesActions.resetMeta;
            expect(actual).not.toBeCalled();
        });
    });
});
