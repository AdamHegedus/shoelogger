import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NewBrand from '@/components/brands/new-brand';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('new-brand.vue', () => {

    describe('meta.status is false', () => {

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

    describe('meta.status is true', () => {

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

    it('should match snapshot when text input changed', () => {
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
        const input = 'Test';

        // ACT
        wrapper.find('input').setValue(input);

        // ASSERT
        const element = wrapper.element;
        const actual = wrapper.vm.$data.brand;
        expect(element).toMatchSnapshot();
        expect(actual).toEqual(expected);

    });

    describe('getBrand', () => {

        it('should return the value of text input', () => {
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
            const expected = {
                brand: 'Test'
            };
            const input = 'Test';
            wrapper.find('input').setValue(input);

            // ACT
            const actual = wrapper.vm.getBrand;

            // ASSERT
            expect(actual).toEqual(expected);
        });

    });

    describe('addBrand', () => {

        it('should call event with the value of text input', () => {
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
            const expected = {
                brand: 'Test'
            };
            const input = 'Test';
            wrapper.find('input').setValue(input);

            // ACT
            wrapper.find('button').trigger('click');

            // ASSERT
            expect(actions.addBrand.mock.calls.length).toEqual(1);
            expect(actions.addBrand.mock.calls[0][1]).toEqual(expected);
        });

    });

});
