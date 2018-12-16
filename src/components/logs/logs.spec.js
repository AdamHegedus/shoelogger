import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Logs from '@/components/logs/logs';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
localVue.use(BootstrapVue);

describe('logs.vue', () => {
    describe('when navigation is set', () => {
        it('should render component', () => {
            // ASSIGN
            const navigationState = {
                menu: {
                    logs: {
                        lastPage: '/logs/mock-navigation-state'
                    }
                }
            };

            const logsActions = {
                getLogs: jest.fn()
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    navigation: {
                        namespaced: true,
                        state: navigationState
                    },
                    logs: {
                        namespaced: true,
                        actions: logsActions
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions
                    }
                }
            });

            const router = new VueRouter();
            router.push = jest.fn();
            const wrapper = shallowMount(Logs, { store, localVue, router });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
            expect(logsActions.getLogs).toBeCalled();
            expect(shoesActions.getShoes).toBeCalled();
            expect(wrapper.vm.$router.push.mock.calls).toMatchSnapshot();
        });
    });

    describe('when navigation is unset', () => {
        it('should render component', () => {
            // ASSIGN
            const navigationState = {
                menu: {
                    logs: {
                        lastPage: null
                    }
                }
            };

            const logsActions = {
                getLogs: jest.fn()
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    navigation: {
                        namespaced: true,
                        state: navigationState
                    },
                    logs: {
                        namespaced: true,
                        actions: logsActions
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions
                    }
                }
            });

            const router = new VueRouter();
            router.push = jest.fn();
            const wrapper = shallowMount(Logs, { store, localVue, router });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
            expect(logsActions.getLogs).toBeCalled();
            expect(shoesActions.getShoes).toBeCalled();
            expect(wrapper.vm.$router.push.mock.calls).toMatchSnapshot();
        });
    });

    describe('newLog', () => {
        it('should call router', () => {
            // ASSIGN
            const navigationState = {
                menu: {
                    logs: {
                        lastPage: null
                    }
                }
            };

            const logsActions = {
                getLogs: jest.fn()
            };

            const shoesActions = {
                getShoes: jest.fn()
            };

            const store = new Vuex.Store({
                modules: {
                    navigation: {
                        namespaced: true,
                        state: navigationState
                    },
                    logs: {
                        namespaced: true,
                        actions: logsActions
                    },
                    shoes: {
                        namespaced: true,
                        actions: shoesActions
                    }
                }
            });

            const router = new VueRouter();
            const wrapper = shallowMount(Logs, { store, localVue, router });
            const spy = jest.spyOn(wrapper.vm.$router, 'push');

            // ACT
            wrapper.find('button').trigger('click');

            // ASSERT
            expect(spy.mock.calls).toMatchSnapshot();
        });
    });
});
