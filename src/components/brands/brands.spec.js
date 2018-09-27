import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Brands from '@/components/brands/brands';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('brands.vue', () => {

    let actions;
    let state;

    beforeEach(() => {
        actions = {
            getBrands: jest.fn(),
            deleteBrand: jest.fn(),
            resetMeta: jest.fn()
        };

        state = {
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
    });

    describe('meta.status is false', () => {

        describe('first element is clicked', () => {

            it('should match snapshot', () => {
                // ASSIGN
                const getters = {
                    getMeta: () => {
                        return {
                            status: false,
                            message: 'Error message text.'
                        };
                    }
                };

                const store = new Vuex.Store({
                    modules: {
                        brands: {
                            namespaced: true,
                            getters,
                            actions,
                            state
                        }
                    }
                });

                const wrapper = shallowMount(Brands, { store, localVue });
                wrapper.findAll('.brand-item').at(0).trigger('click');

                // ACT
                const actual = wrapper.element;

                // ASSERT
                expect(actual).toMatchSnapshot();

            });

        });

    });

    describe('meta.status is true', () => {

        describe('first element is clicked', () => {

            it('should match snapshot', () => {
                // ASSIGN
                const getters = {
                    getMeta: () => {
                        return {
                            status: true,
                            message: null
                        };
                    }
                };

                const store = new Vuex.Store({
                    modules: {
                        brands: {
                            namespaced: true,
                            getters,
                            actions,
                            state
                        }
                    }
                });

                const wrapper = shallowMount(Brands, { store, localVue });
                wrapper.findAll('.brand-item').at(0).trigger('click');


                // ACT
                const actual = wrapper.element;

                // ASSERT
                expect(actual).toMatchSnapshot();

            });

        });

    });

    describe('brands', () => {

        it('should match computed property', () => {
            // ASSIGN
            const expected = [
                {
                    id: 0,
                    brand: 'Foo'
                },
                {
                    id: 1,
                    brand: 'Bar'
                }
            ];

            const getters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const store = new Vuex.Store({
                modules: {
                    brands: {
                        namespaced: true,
                        getters,
                        actions,
                        state
                    }
                }
            });

            const wrapper = shallowMount(Brands, { store, localVue });

            // ACT
            const actual = wrapper.vm.brands;

            // ASSERT
            expect(actual).toEqual(expected);
            expect(actions.getBrands).toBeCalled();

        });

    });

    describe('selectBrand', () => {

        it('should set index when selectedIndex is unset', () => {
            // ASSIGN
            const expected = 0;
            const selectedIndex = 0;

            const getters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const store = new Vuex.Store({
                modules: {
                    brands: {
                        namespaced: true,
                        getters,
                        actions,
                        state
                    }
                }
            });
            const wrapper = shallowMount(Brands, { store, localVue });

            // ACT
            wrapper.vm.selectBrand(selectedIndex);

            // ASSERT
            const actual = wrapper.vm.selectedIndex;
            expect(actual).toEqual(expected);

        });

        it('should set index when selectedIndex is different', () => {
            // ASSIGN
            const expected = 0;
            const selectedIndex = 0;
            const originalIndex = 1;

            const getters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const store = new Vuex.Store({
                modules: {
                    brands: {
                        namespaced: true,
                        getters,
                        actions,
                        state
                    }
                }
            });
            const wrapper = shallowMount(Brands, { store, localVue });
            wrapper.setData({
                selectedIndex: originalIndex
            });

            // ACT
            wrapper.vm.selectBrand(selectedIndex);

            // ASSERT
            const actual = wrapper.vm.selectedIndex;
            expect(actual).toEqual(expected);

        });

        it('should set index when selectedIndex is the same', () => {
            // ASSIGN
            const expected = null;
            const selectedIndex = 0;
            const originalIndex = 0;

            const getters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const store = new Vuex.Store({
                modules: {
                    brands: {
                        namespaced: true,
                        getters,
                        actions,
                        state
                    }
                }
            });
            const wrapper = shallowMount(Brands, { store, localVue });
            wrapper.setData({
                selectedIndex: originalIndex
            });

            // ACT
            wrapper.vm.selectBrand(selectedIndex);

            // ASSERT
            const actual = wrapper.vm.selectedIndex;
            expect(actual).toEqual(expected);

        });

        it('should call resetMeta when meta.status is false', () => {
            // ASSIGN
            const getters = {
                getMeta: () => {
                    return {
                        status: false,
                        message: null
                    };
                }
            };

            const store = new Vuex.Store({
                modules: {
                    brands: {
                        namespaced: true,
                        getters,
                        actions,
                        state
                    }
                }
            });
            const wrapper = shallowMount(Brands, { store, localVue });

            // ACT
            wrapper.vm.selectBrand(0);

            // ASSERT
            expect(actions.resetMeta).toBeCalled();

        });

        it('should not call resetMeta when meta.status is true', () => {
            // ASSIGN
            const getters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };

            const store = new Vuex.Store({
                modules: {
                    brands: {
                        namespaced: true,
                        getters,
                        actions,
                        state
                    }
                }
            });
            const wrapper = shallowMount(Brands, { store, localVue });

            // ACT
            wrapper.vm.selectBrand(0);

            // ASSERT
            expect(actions.resetMeta).not.toBeCalled();

        });

    });

    describe('DOM events', () => {

        it('should call event when \'delete\' button clicked', () => {
            // ASSIGN
            const expected = {
                id: 0
            };
    
            const getters = {
                getMeta: () => {
                    return {
                        status: false,
                        message: null
                    };
                }
            };
    
            const store = new Vuex.Store({
                modules: {
                    brands: {
                        namespaced: true,
                        getters,
                        actions,
                        state
                    }
                }
            });
            const wrapper = shallowMount(Brands, { store, localVue });
            wrapper.vm.selectBrand(0);
    
            // ACT
            wrapper.find('button.brand-action').trigger('click');
    
            // ASSERT
            expect(actions.deleteBrand.mock.calls.length).toEqual(1);
            expect(actions.deleteBrand.mock.calls[0][1]).toEqual(expected);
    
        });
    
        it('should call router when \'new\' button clicked', () => {
            // ASSIGN
            const expected = 'brands/new';
    
            const getters = {
                getMeta: () => {
                    return {
                        status: true,
                        message: null
                    };
                }
            };
    
            const store = new Vuex.Store({
                modules: {
                    brands: {
                        namespaced: true,
                        getters,
                        actions,
                        state
                    }
                }
            });
            const router = new VueRouter();
            const wrapper = shallowMount(Brands, { store, localVue, router });
            const spy = jest.spyOn(wrapper.vm.$router, 'push');
    
            // ACT
            wrapper.find('button').trigger('click');
    
            // ASSERT
            expect(spy.mock.calls.length).toEqual(1);
            expect(spy.mock.calls[0][0]).toEqual(expected);
    
        });

    });

});
