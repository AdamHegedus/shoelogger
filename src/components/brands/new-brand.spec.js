import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NewBrand from '@/components/brands/new-brand';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('index.vue', () => {

    describe('meta.status is true', () => {

        const getters = {
            getMeta: () => {
                return {
                    status: false,
                    message: 'Error message text.'
                };
            }
        };

        const actions = {
            addBrand: jest.fn()
        };

        const store = new Vuex.Store({
            modules: {
                brands: {
                    namespaced: true,
                    getters,
                    actions
                }
            }
        });

        it('should match snapshot when page loaded', () => {
            // ASSIGN
            const wrapper = shallowMount(NewBrand, { store, localVue });
    
            // ACT
            const actual = wrapper.element;
    
            // ASSERT
            expect(actual).toMatchSnapshot();
    
        });

    });

    describe('meta.status is false', () => {

        const getters = {
            getMeta: () => {
                return {
                    status: true,
                    message: null
                };
            }
        };

        const actions = {
            addBrand: jest.fn()
        };

        const store = new Vuex.Store({
            modules: {
                brands: {
                    namespaced: true,
                    getters,
                    actions
                }
            }
        });

        it('should match snapshot when page loaded', () => {
            // ASSIGN
            const wrapper = shallowMount(NewBrand, { store, localVue });
    
            // ACT
            const actual = wrapper.element;
    
            // ASSERT
            expect(actual).toMatchSnapshot();
    
        });

    });

    it('should match snapshot after input set and button clicked', () => {
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
            addBrand: jest.fn()
        };

        const store = new Vuex.Store({
            modules: {
                brands: {
                    namespaced: true,
                    getters,
                    actions
                }
            }
        });
        const wrapper = shallowMount(NewBrand, { store, localVue });
        const expected = 'Test';

        // ACT
        wrapper.find('input').setValue(expected);
        wrapper.find('button').trigger('click');

        // ASSERT
        const element = wrapper.element;
        const actual = wrapper.vm.$data.brand;
        expect(element).toMatchSnapshot();
        expect(actual).toEqual(expected);

    });

});
