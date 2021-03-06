import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import EditShoe from '@/components/shoes/edit-shoe';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
localVue.use(BootstrapVue);

describe('edit-shoe.vue', () => {
    describe('meta.status is false', () => {
        const $route = {
            params: {
                id: '1'
            }
        };

        const shoesGetters = {
            getMeta: () => {
                return {
                    status: false,
                    message: 'Error message text.'
                };
            }
        };

        const shoesActions = {
            editShoe: jest.fn(),
            getShoesById: jest.fn(() => {
                return {
                    id: 1,
                    typeId: 0,
                    brandId: 0,
                    product: 'Foo Bar'
                };
            })
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
            const router = new VueRouter();
            const wrapper = shallowMount(EditShoe, {
                store,
                localVue,
                router,
                mocks: {
                    $route
                }
            });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('meta.status is true', () => {
        const $route = {
            params: {
                id: '1'
            }
        };

        const shoesGetters = {
            getMeta: () => {
                return {
                    status: true,
                    message: null
                };
            }
        };

        const shoesActions = {
            editShoe: jest.fn(),
            getShoesById: jest.fn(() => {
                return {
                    id: 1,
                    typeId: 0,
                    brandId: 0,
                    product: 'Foo Bar'
                };
            })
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
            const router = new VueRouter();
            const wrapper = shallowMount(EditShoe, {
                store,
                localVue,
                router,
                mocks: {
                    $route
                }
            });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    it('should match snapshot when text input changed', () => {
        // ASSIGN
        const $route = {
            params: {
                id: '1'
            }
        };

        const shoesGetters = {
            getMeta: () => {
                return {
                    status: true,
                    message: null
                };
            }
        };

        const shoesActions = {
            editShoe: jest.fn(),
            getShoesById: jest.fn(() => {
                return {
                    id: 1,
                    typeId: 0,
                    brandId: 0,
                    product: 'Foo Bar'
                };
            })
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

        const router = new VueRouter();
        const wrapper = shallowMount(EditShoe, {
            store,
            localVue,
            router,
            mocks: {
                $route
            }
        });

        const expected = 'Test';
        const input = 'Test';

        // ACT
        wrapper.find('input').setValue(input);

        // ASSERT
        const { element } = wrapper;
        const actual = wrapper.vm.$data.product;
        expect(element).toMatchSnapshot();
        expect(actual).toEqual(expected);
    });

    describe('getShoe', () => {
        it('should return the value of text input', () => {
            // ASSIGN
            const $route = {
                params: {
                    id: '1'
                }
            };

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const shoesActions = {
                editShoe: jest.fn(),
                getShoesById: jest.fn(() => {
                    return {
                        id: 1,
                        typeId: 0,
                        brandId: 0,
                        product: 'Foo Bar'
                    };
                })
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

            const shoesState = {
                shoe: {
                    id: 1,
                    typeId: 0,
                    brandId: 0,
                    product: 'Foo Bar'
                }
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

            const router = new VueRouter();
            const wrapper = shallowMount(EditShoe, {
                store,
                localVue,
                router,
                mocks: {
                    $route
                }
            });

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
            const $route = {
                params: {
                    id: '1'
                }
            };

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const shoesActions = {
                editShoe: jest.fn(),
                getShoesById: jest.fn(() => {
                    return {
                        id: 1,
                        typeId: 0,
                        brandId: 0,
                        product: 'Foo Bar'
                    };
                })
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

            const router = new VueRouter();
            const wrapper = shallowMount(EditShoe, {
                store,
                localVue,
                router,
                mocks: {
                    $route
                }
            });

            // ACT
            const actual = wrapper.vm.brands;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('types', () => {
        it('should return the value from store', () => {
            // ASSIGN
            const $route = {
                params: {
                    id: '1'
                }
            };

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const shoesActions = {
                editShoe: jest.fn(),
                getShoesById: jest.fn(() => {
                    return {
                        id: 1,
                        typeId: 0,
                        brandId: 0,
                        product: 'Foo Bar'
                    };
                })
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

            const router = new VueRouter();
            const wrapper = shallowMount(EditShoe, {
                store,
                localVue,
                router,
                mocks: {
                    $route
                }
            });

            // ACT
            const actual = wrapper.vm.types;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('editShoe', () => {
        it('should call action', () => {
            // ASSIGN
            const $route = {
                params: {
                    id: '1'
                }
            };

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const shoesActions = {
                editShoe: jest.fn(),
                getShoesById: jest.fn(() => {
                    return {
                        id: 1,
                        typeId: 0,
                        brandId: 0,
                        product: 'Foo Bar'
                    };
                })
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

            const router = new VueRouter();
            const wrapper = shallowMount(EditShoe, {
                store,
                localVue,
                router,
                mocks: {
                    $route
                }
            });
            const input = {
                id: 1,
                brandId: 0,
                typeId: 1,
                product: 'Test'
            };

            // ACT
            wrapper.vm.editShoe(input);

            // ASSERT
            const actual = shoesActions.editShoe.mock.calls[
                shoesActions.editShoe.mock.calls.length - 1
            ][1];
            expect(actual).toMatchSnapshot();
        });
    });

    describe('selectBrand', () => {
        it('should set selectedBrand', () => {
            // ASSIGN
            const $route = {
                params: {
                    id: '1'
                }
            };

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const shoesActions = {
                editShoe: jest.fn(),
                getShoesById: jest.fn(() => {
                    return {
                        id: 1,
                        typeId: 0,
                        brandId: 0,
                        product: 'Foo Bar'
                    };
                })
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

            const router = new VueRouter();
            const wrapper = shallowMount(EditShoe, {
                store,
                localVue,
                router,
                mocks: {
                    $route
                }
            });
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
            const $route = {
                params: {
                    id: '1'
                }
            };

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const shoesActions = {
                editShoe: jest.fn(),
                getShoesById: jest.fn(() => {
                    return {
                        id: 1,
                        typeId: 0,
                        brandId: 0,
                        product: 'Foo Bar'
                    };
                })
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

            const router = new VueRouter();
            const wrapper = shallowMount(EditShoe, {
                store,
                localVue,
                router,
                mocks: {
                    $route
                }
            });
            const input = {
                id: 1,
                type: 'Bar'
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
            const $route = {
                params: {
                    id: '1'
                }
            };

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const shoesActions = {
                editShoe: jest.fn(),
                getShoesById: jest.fn(() => {
                    return {
                        id: 1,
                        typeId: 0,
                        brandId: 0,
                        product: 'Foo Bar'
                    };
                })
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

            const router = new VueRouter();
            const wrapper = shallowMount(EditShoe, {
                store,
                localVue,
                router,
                mocks: {
                    $route
                }
            });
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
            const $route = {
                params: {
                    id: '1'
                }
            };

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const shoesActions = {
                editShoe: jest.fn(),
                getShoesById: jest.fn(() => {
                    return {
                        id: 1,
                        typeId: 0,
                        brandId: 0,
                        product: 'Foo Bar'
                    };
                })
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

            const router = new VueRouter();
            const wrapper = shallowMount(EditShoe, {
                store,
                localVue,
                router,
                mocks: {
                    $route
                }
            });
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

    describe('metaChanged', () => {
        describe('meta.status is true', () => {
            it('should call event', () => {
                // ASSIGN
                const $route = {
                    params: {
                        id: '1'
                    }
                };

                const shoesGetters = {
                    getMeta: () => {
                        return {
                            status: true,
                            message: null
                        };
                    }
                };

                const shoesActions = {
                    editShoe: jest.fn(),
                    getShoesById: jest.fn(() => {
                        return {
                            id: 1,
                            typeId: 0,
                            brandId: 0,
                            product: 'Foo Bar'
                        };
                    })
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

                const router = new VueRouter();
                const wrapper = shallowMount(EditShoe, {
                    store,
                    localVue,
                    router,
                    mocks: {
                        $route
                    }
                });

                const spy = jest.spyOn(wrapper.vm.$router, 'push');

                const input = {
                    status: true
                };

                // ACT
                wrapper.vm.metaChanged(input);

                // ASSERT
                expect(spy.mock.calls.length).toEqual(1);
                expect(spy.mock.calls[0][0]).toMatchSnapshot();
            });
        });

        describe('meta.status is false', () => {
            it('should call event', () => {
                // ASSIGN
                const $route = {
                    params: {
                        id: '1'
                    }
                };

                const shoesGetters = {
                    getMeta: () => {
                        return {
                            status: true,
                            message: null
                        };
                    }
                };

                const shoesActions = {
                    editShoe: jest.fn(),
                    getShoesById: jest.fn(() => {
                        return {
                            id: 1,
                            typeId: 0,
                            brandId: 0,
                            product: 'Foo Bar'
                        };
                    })
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

                const router = new VueRouter();
                const wrapper = shallowMount(EditShoe, {
                    store,
                    localVue,
                    router,
                    mocks: {
                        $route
                    }
                });

                const spy = jest.spyOn(wrapper.vm.$router, 'push');

                const input = {
                    status: false
                };

                // ACT
                wrapper.vm.metaChanged(input);

                // ASSERT
                expect(spy.mock.calls.length).toEqual(0);
            });
        });
    });

    describe('originalChanged', () => {
        it('should call event', () => {
            // ASSIGN
            const $route = {
                params: {
                    id: '1'
                }
            };

            const shoesGetters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const shoesActions = {
                editShoe: jest.fn(),
                getShoesById: jest.fn(() => {
                    return {
                        id: 1,
                        typeId: 0,
                        brandId: 0,
                        product: 'Foo Bar'
                    };
                })
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
                    },
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
                    },
                    {
                        id: 1,
                        brand: 'Bar'
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

            const router = new VueRouter();
            const wrapper = shallowMount(EditShoe, {
                store,
                localVue,
                router,
                mocks: {
                    $route
                }
            });

            const input = {
                typeId: 0,
                brandId: 1,
                product: 'Foo Bar'
            };

            // ACT
            wrapper.vm.originalChanged(input);

            // ASSERT
            expect(wrapper.vm.product).toMatchSnapshot();
            expect(wrapper.vm.selectedBrand).toMatchSnapshot();
            expect(wrapper.vm.selectedType).toMatchSnapshot();
        });
    });
});
