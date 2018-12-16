import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Overview from '@/components/logs/overview';

jest.mock('../charts/bar', () => {
    return {
        render: () => {
            return jest.fn().mockImplementation(() => {
                return <div class="mock-bar-chart"/>;
            });
        }
    };
});

const localVue = createLocalVue();
localVue.use(Vuex);

describe('overview.vue', () => {
    describe('when has shoes', () => {
        it('should render component', () => {
            // ASSIGN
            const navigationAction = {
                setNavigation: jest.fn()
            };

            const shoesState = {
                shoes: [0, 1, 2, 3]
            };

            const store = new Vuex.Store({
                modules: {
                    navigation: {
                        namespaced: true,
                        actions: navigationAction
                    },
                    shoes: {
                        namespaced: true,
                        state: shoesState
                    }
                }
            });

            const wrapper = shallowMount(Overview, { store, localVue });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
            expect(navigationAction.setNavigation.mock.calls.length).toMatchSnapshot();
            expect(navigationAction.setNavigation.mock.calls[0][1]).toMatchSnapshot();
        });
    });

    describe('when doesn\'t have shoes', () => {
        it('should render component', () => {
            // ASSIGN
            const navigationAction = {
                setNavigation: jest.fn()
            };

            const shoesState = {
                shoes: []
            };

            const store = new Vuex.Store({
                modules: {
                    navigation: {
                        namespaced: true,
                        actions: navigationAction
                    },
                    shoes: {
                        namespaced: true,
                        state: shoesState
                    }
                }
            });

            const wrapper = shallowMount(Overview, { store, localVue });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
            expect(navigationAction.setNavigation.mock.calls.length).toMatchSnapshot();
            expect(navigationAction.setNavigation.mock.calls[0][1]).toMatchSnapshot();
        });
    });
});
