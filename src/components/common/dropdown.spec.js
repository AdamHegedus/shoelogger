import { shallowMount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Dropdown from '@/components/common/dropdown';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('dropdown.vue', () => {
    describe('render', () => {
        it('should render component when selected is null', () => {
            // ASSIGN
            const wrapper = shallowMount(Dropdown, {
                localVue,
                propsData: {
                    event: 'mock-event',
                    placeholder: 'mock-placeholder',
                    selected: null,
                    data: [
                        {
                            id: 0,
                            text: 'Mock 01'
                        },
                        {
                            id: 1,
                            text: 'Mock 02'
                        }
                    ],
                    getDisplayValue: (item) => { return item.text; }
                }
            });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });

        it('should render component when selected is set', () => {
            // ASSIGN
            const wrapper = shallowMount(Dropdown, {
                localVue,
                propsData: {
                    event: 'mock-event',
                    placeholder: 'mock-placeholder',
                    selected: {
                        id: 0,
                        text: 'Mock 01'
                    },
                    data: [
                        {
                            id: 0,
                            text: 'Mock 01'
                        },
                        {
                            id: 1,
                            text: 'Mock 02'
                        }
                    ],
                    getDisplayValue: (item) => {
                        return item.text;
                    }
                }
            });

            // ACT
            const actual = wrapper.element;

            // ASSERT
            expect(actual).toMatchSnapshot();
        });
    });

    describe('select', () => {
        it('should emit event', () => {
            // ASSIGN
            const wrapper = shallowMount(Dropdown, {
                localVue,
                propsData: {
                    event: 'mock-event',
                    placeholder: 'mock-placeholder',
                    selected: null,
                    data: [
                        {
                            id: 0,
                            text: 'Mock 01'
                        },
                        {
                            id: 1,
                            text: 'Mock 02'
                        }
                    ],
                    getDisplayValue: (item) => {
                        return item.text;
                    }
                }
            });
            const input = {
                id: 0,
                text: 'Mock 01'
            };
            const mockEvent = jest.fn();
            wrapper.vm.$on('mock-event', mockEvent);

            // ACT
            wrapper.vm.select(input);

            // ASSERT
            expect(mockEvent).toBeCalledWith(input);
        });
    });
});
