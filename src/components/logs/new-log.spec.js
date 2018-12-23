import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import NewLog from '@/components/logs/new-log';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('new-log.vue', () => {
    describe('meta.status is false', () => {
        const logsGetters = {
            getMeta: () => {
                return {
                    status: false,
                    message: 'Error message text.'
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
                logs: {
                    namespaced: true,
                    getters: logsGetters
                },
                shoes: {
                    namespaced: true,
                    getters: logsGetters,
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
            const wrapper = shallowMount(NewLog, { store, localVue });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('meta.status is true', () => {
        const logsGetters = {
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
                logs: {
                    namespaced: true,
                    getters: logsGetters
                },
                shoes: {
                    namespaced: true,
                    getters: logsGetters,
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
            const wrapper = shallowMount(NewLog, { store, localVue });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    it('should match snapshot when distance text input has changed', () => {
        // ASSIGN
        const logsGetters = {
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
                logs: {
                    namespaced: true,
                    getters: logsGetters
                },
                shoes: {
                    namespaced: true,
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

        const wrapper = shallowMount(NewLog, { store, localVue });
        const expected = '1';
        const input = '1';

        // ACT
        wrapper.find('input').setValue(input);

        // ASSERT
        const element = wrapper.element;
        const actual = wrapper.vm.$data.distance;
        expect(element).toMatchSnapshot();
        expect(actual).toEqual(expected);
    });

    describe('getShoe', () => {
        it('should return the value of text input', () => {
            // ASSIGN
            const logsGetters = {
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
                    logs: {
                        namespaced: true,
                        getters: logsGetters
                    },
                    shoes: {
                        namespaced: true,
                        getters: logsGetters,
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

            const wrapper = shallowMount(NewLog, { store, localVue });
            const input = '1';
            wrapper.vm.$data.selectedShoe = {
                id: 0,
                brandId: 0,
                typeId: 0,
                product: 'Foo'
            };
            wrapper.vm.$data.distance = 10;
            wrapper.vm.$data.date = new Date('2000-01-01').toISOString().substring(0, 10);
            wrapper.find('#distance').setValue(input);

            // ACT
            const actual = wrapper.vm.getShoe;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('shoes', () => {
        it('should return the value from store', () => {
            // ASSIGN
            const logsGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const shoesState = {
                shoes: [
                    {
                        id: 0,
                        brandId: 0,
                        typeId: 0,
                        product: 'Foo'
                    },
                    {
                        id: 1,
                        brandId: 0,
                        typeId: 0,
                        product: 'Bar'
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
                        getters: logsGetters
                    },
                    shoes: {
                        namespaced: true,
                        state: shoesState
                    },
                    brands: {
                        namespaced: true,
                        state: brandsState
                    },
                    types: {
                        namespaced: true,
                        state: typesState
                    }
                }
            });

            const wrapper = shallowMount(NewLog, { store, localVue });

            // ACT
            const actual = wrapper.vm.shoes;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('addLog', () => {
        it('should call action', () => {
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
                addLog: jest.fn()
            };

            const shoesState = {
                shoes: [
                    {
                        id: 0,
                        brandId: 0,
                        typeId: 0,
                        product: 'Foo'
                    },
                    {
                        id: 1,
                        brandId: 0,
                        typeId: 0,
                        product: 'Bar'
                    }
                ]
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
                        id: 1,
                        type: 'Bar'
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
                        actions: logsActions,
                        getters: logsGetters
                    },
                    shoes: {
                        namespaced: true,
                        state: shoesState,
                        getters: logsGetters
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

            const wrapper = shallowMount(NewLog, { store, localVue });
            const input = {
                shoeId: 0,
                distance: 10,
                date: 1000000000
            };

            // ACT
            wrapper.vm.addLog(input);

            // ASSERT
            const actual = logsActions.addLog.mock.calls;
            expect(actual).toMatchSnapshot();
        });
    });

    describe('getShoeDisplayValue', () => {
        it('should return correct value', () => {
            // ASSIGN
            const logsGetters = {
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
                        id: 1,
                        type: 'Bar'
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
                        getters: logsGetters
                    },
                    shoes: {
                        namespaced: true,
                        getters: logsGetters,
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

            const wrapper = shallowMount(NewLog, { store, localVue });
            const input = {
                id: 1,
                brand: 'Bar',
                product: 'Foo'
            };

            // ACT
            const actual = wrapper.vm.getShoeDisplayValue(input);

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });
});
