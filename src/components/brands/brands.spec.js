import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Brands from '@/components/brands/brands';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('brands.vue', () => {

    xdescribe('meta.status is true', () => {

        const getters = {
            getMeta: () => {
                return {
                    status: false,
                    message: 'Error message text.'
                };
            }
        };

        const actions = {
            getBrands: jest.fn()
        };

        const state = {
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
                brands: {
                    namespaced: true,
                    getters,
                    actions,
                    state
                }
            }
        });

        it('should match snapshot when page loaded', () => {
            // ASSIGN
            const wrapper = shallowMount(Brands, { store, localVue });
            wrapper.setData({
                selectedIndex: 0
            });
    
            // ACT
            const actual = wrapper.element;
    
            // ASSERT
            expect(actual).toMatchSnapshot();
            expect(actions.getBrands).toBeCalled();
    
        });

    });

    xdescribe('meta.status is false', () => {

        const getters = {
            getMeta: () => {
                return {
                    status: true,
                    message: null
                };
            }
        };

        const actions = {
            getBrands: jest.fn()
        };

        const state = {
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
                brands: {
                    namespaced: true,
                    getters,
                    actions,
                    state
                }
            }
        });

        it('should match snapshot when page loaded', () => {
            // ASSIGN
            const wrapper = shallowMount(Brands, { store, localVue });
            wrapper.setData({
                selectedIndex: 0
            });
    
            // ACT
            const actual = wrapper.element;
    
            // ASSERT
            expect(actual).toMatchSnapshot();
    
        });

    });

    xit('should match snapshot after input set and button clicked', () => {
        // ASSIGN
        const getters = {
            getMeta: () => {
                return {
                    status: true,
                    message: null
                };
            }
        };

        const actions = {
            getBrands: jest.fn(),
            deleteBrand: jest.fn()
        };

        const state = {
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
            selectedIndex: 0
        });

        // ACT
        wrapper.find('button.brand-action').trigger('click');

        // ASSERT
        const element = wrapper.element;
        expect(element).toMatchSnapshot();

    });

    it('should match', () => {
        // ASSIGN
        const getters = {
            getMeta: () => {
                return {
                    status: true,
                    message: null
                };
            }
        };

        const actions = {
            getBrands: jest.fn(),
            deleteBrand: jest.fn()
        };

        const state = {
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
        wrapper.findAll('div.brand-item').at(0).trigger('click');

        // ASSERT
        const element = wrapper.element;
        const vm = wrapper.vm;
        expect(element).toMatchSnapshot();
        expect(vm.selectedIndex).toEqual(0);

    });

    it('should match brands computed property', () => {
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

        const actions = {
            getBrands: jest.fn(),
            deleteBrand: jest.fn()
        };

        const state = {
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

    it('should select brand', () => {
        // ASSIGN
        const expected = 0;

        const getters = {
            getMeta: () => {
                return {
                    status: false,
                    message: null
                };
            }
        };

        const actions = {
            getBrands: jest.fn(),
            deleteBrand: jest.fn(),
            resetMeta: jest.fn()
        };

        const state = {
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
        // wrapper.vm.selectBrand(0);
        const actual = wrapper.vm.selectedIndex;

        // ASSERT
        expect(actual).toEqual(expected);
        expect(actions.getBrands).toBeCalled();
        expect(actions.resetMeta).toBeCalled();

    });

});
