import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import NewShoe from '@/components/shoes/new-shoe';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('new-shoe.vue', () => {
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
            const wrapper = shallowMount(NewShoe, { store, localVue });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('meta.status is true', () => {
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
            const wrapper = shallowMount(NewShoe, { store, localVue });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    it('should match snapshot when text input changed', () => {
        // ASSIGN
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

        const wrapper = shallowMount(NewShoe, { store, localVue });
        const expected = 'Test';
        const input = 'Test';

        // ACT
        wrapper.find('input').setValue(input);

        // ASSERT
        const element = wrapper.element;
        const actual = wrapper.vm.$data.product;
        expect(element).toMatchSnapshot();
        expect(actual).toEqual(expected);
    });

    describe('getShoe', () => {
        it('should return the value of text input', () => {
            // ASSIGN
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

            const wrapper = shallowMount(NewShoe, { store, localVue });
            const input = 'Test';
            wrapper.vm.$data.selectedType = {
                id: 0,
                type: 'Foo'
            };
            wrapper.vm.$data.selectedBrand = {
                id: 0,
                type: 'Foo'
            };
            wrapper.find('#productName').setValue(input);

            // ACT
            const actual = wrapper.vm.getShoe;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('brands', () => {
        it('should return the value from store', () => {
            // ASSIGN
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

            const wrapper = shallowMount(NewShoe, { store, localVue });

            // ACT
            const actual = wrapper.vm.brands;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('types', () => {
        it('should return the value from store', () => {
            // ASSIGN
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

            const wrapper = shallowMount(NewShoe, { store, localVue });

            // ACT
            const actual = wrapper.vm.types;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('addShoe', () => {
        it('should call action', () => {
            // ASSIGN
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

            const wrapper = shallowMount(NewShoe, { store, localVue });
            const input = {
                brandId: 0,
                typeId: 1,
                product: 'Test'
            };

            // ACT
            wrapper.vm.addShoe(input);

            // ASSERT
            const actual = shoesActions.addShoe.mock.calls;
            expect(actual).toMatchSnapshot();
        });
    });

    describe('selectBrand', () => {
        it('should set selectedBrand', () => {
            // ASSIGN
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

            const wrapper = shallowMount(NewShoe, { store, localVue });
            const input = {
                id: 0,
                brand: 'Foo'
            };

            // ACT
            wrapper.vm.selectBrand(input);

            // ASSERT
            const actual = wrapper.vm.selectedBrand;
            expect(actual).toMatchSnapshot();
        });
    });

    describe('selectType', () => {
        it('should set selectedType', () => {
            // ASSIGN
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

            const wrapper = shallowMount(NewShoe, { store, localVue });
            const input = {
                id: 1,
                brand: 'Bar'
            };

            // ACT
            wrapper.vm.selectType(input);

            // ASSERT
            const actual = wrapper.vm.selectedType;
            expect(actual).toMatchSnapshot();
        });
    });

    describe('getTypeDisplayValue', () => {
        it('should return correct value', () => {
            // ASSIGN
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

            const wrapper = shallowMount(NewShoe, { store, localVue });
            const input = {
                id: 1,
                type: 'Bar'
            };

            // ACT
            const actual = wrapper.vm.getTypeDisplayValue(input);

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('getBrandDisplayValue', () => {
        it('should return correct value', () => {
            // ASSIGN
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

            const wrapper = shallowMount(NewShoe, { store, localVue });
            const input = {
                id: 1,
                brand: 'Bar'
            };

            // ACT
            const actual = wrapper.vm.getBrandDisplayValue(input);

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });
});
